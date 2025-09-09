import type { Metadata, ResolvingMetadata } from 'next';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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

const SITE_URL = 'https://alignestudio.com'
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL)

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent

  // Core metadata values
  const title = {
    default: "Aligne Studio | Premium Pilates Studio",
    template: "%s | Aligne Studio"
  }
  const description = "Transform your body and mind at Aligne Studio. Premium pilates classes, personalized training, and wellness programs in a modern, minimalist environment. Experience the perfect alignment of strength, flexibility, and mindfulness."
  const keywords = [
    "pilates",
    "pilates studio",
    "pilates classes",
    "fitness",
    "wellness",
    "strength training",
    "flexibility",
    "mindfulness",
    "personal training",
    "body alignment",
    "core strength",
    "reformer pilates"
  ]

  // Open Graph configuration
  const openGraph = {
    title: title.default,
    description,
    url: new URL(SITE_URL),
    siteName: "Aligne Studio",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Aligne Studio - Premium Pilates Studio",
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
      alt: "Aligne Studio - Premium Pilates Studio"
    }],
    creator: "@alignestudio"
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
          {/* Header */}
          <Header />
          
          {/* Main content with page transitions */}
          <PageTransitionWrapper>
            <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
