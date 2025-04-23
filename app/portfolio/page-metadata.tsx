import type { Metadata } from 'next';

const SITE_URL = 'https://glasgowgfx.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: 'Portfolio | Nexus',
  description: 'Explore our portfolio of digital experiences created with passion, precision, and purpose.',
  openGraph: {
    title: 'Portfolio | Nexus',
    description: 'Explore our portfolio of digital experiences created with passion, precision, and purpose.',
    url: new URL('/portfolio', SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus Design Collective - Our Portfolio",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Portfolio | Nexus',
    description: 'Explore our portfolio of digital experiences created with passion, precision, and purpose.',
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus Design Collective - Our Portfolio"
    }],
    creator: "@glasgowgfx"
  },
  metadataBase: new URL(SITE_URL)
};