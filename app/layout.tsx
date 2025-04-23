import type { Metadata, ResolvingMetadata } from 'next';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/layout/StarfieldBackground';
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

const SITE_URL = 'https://glasgowgfx.com'
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL)

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent

  // Core metadata values
  const title = {
    default: "Glasgow GFX | Professional Graphic Design Services",
    template: "%s | Glasgow GFX"
  }
  const description = "Expert graphic design services including logo design, brand identity, print design, digital graphics, UI/UX design, and marketing materials. Based in Glasgow, serving clients worldwide."
  const keywords = [
    "graphic design",
    "logo design",
    "brand identity",
    "print design",
    "digital graphics",
    "UI/UX design",
    "marketing materials",
    "Glasgow designer",
    "visual identity",
    "packaging design"
  ]

  // Open Graph configuration
  const openGraph = {
    title: title.default,
    description,
    url: new URL(SITE_URL),
    siteName: "Glasgow GFX",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Glasgow GFX - Professional Graphic Design Services",
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
      alt: "Glasgow GFX - Professional Graphic Design Services"
    }],
    creator: "@glasgowgfx"
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
          {/* Starfield background component */}
          <StarfieldBackground />
          
          {/* Header */}
          <Header />
          
          {/* Main content with page transitions */}
          <PageTransitionWrapper>
            <main className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </PageTransitionWrapper>
          
          {/* Footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
