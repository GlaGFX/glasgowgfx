import type { Metadata, ResolvingMetadata } from 'next';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';
import Script from 'next/script';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const SITE_URL = 'https://glasgowgfx.vercel.app'
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL)

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent

  // Core metadata values
  const title = {
    default: "ALIGNÉ STUDIO | Realign, relax, renew, recover",
    template: "%s | Align Studio"
  }
  const description = "Align Studio is a multidisciplinary design practice working worldwide. Architectural design, branding, and creative solutions with a focus on innovative and sustainable design approaches."
  const keywords = [
    "design studio",
    "architecture",
    "branding",
    "multidisciplinary design",
    "creative solutions",
    "design practice",
    "architectural design",
    "visual identity",
    "spatial design",
    "graphic design",
    "studio ba",
    "design consultancy"
  ]

  // Open Graph configuration
  const openGraph = {
    title: title.default,
    description,
    url: new URL(SITE_URL),
    siteName: "Align Studio",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Align Studio - Multidisciplinary Design Practice",
    }],
    locale: "en_US",
    type: "website",
  }

  // Twitter Card configuration
  const twitter = {
    card: "summary_large_image" as const,
    title: title.default,
    description,
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Align Studio - Multidisciplinary Design Practice"
    }],
    creator: "@alignstudio"
  }

  // Return merged metadata
  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE_URL),
    openGraph,
    twitter,
    // Preserve parent metadata where applicable
    ...(parentMetadata.openGraph?.images ? {
      openGraph: {
        ...openGraph,
        images: parentMetadata.openGraph.images
      }
    } : {}),
    ...(parentMetadata.twitter ? {
      twitter: {
        card: "summary_large_image" as const,
        title: parentMetadata.twitter.title || twitter.title,
        description: parentMetadata.twitter.description || twitter.description,
        images: parentMetadata.twitter.images || twitter.images,
        creator: parentMetadata.twitter.creator || twitter.creator
      }
    } : {}),
    // Add dynamic metadata here based on params/searchParams
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {/* Main content with page transitions */}
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
