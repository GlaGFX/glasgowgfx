import type { Metadata, ResolvingMetadata } from 'next';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarfieldBackground from '@/components/layout/StarfieldBackground';
import PageTransitionWrapper from '@/components/layout/PageTransitionWrapper';

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
    default: "Nexus • Design Collective",
    template: "%s | Nexus"
  }
  const description = "A collective of designers, developers, and strategists passionate about creating meaningful digital products"

  // Open Graph configuration
  const openGraph = {
    title: title.default,
    description,
    url: new URL(SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus Design Collective",
    }],
    locale: "en_US",
    type: "website",
  }

  // Twitter Card configuration
  // Twitter Card configuration
  const twitter = {
    card: "summary_large_image" as const,
    title: title.default,
    description,
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus Design Collective"
    }],
    creator: "@glasgowgfx"
  }

  // Return merged metadata
  return {
    title,
    description,
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
