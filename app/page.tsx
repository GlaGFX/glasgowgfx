import type { Metadata } from 'next';
import { motion } from 'framer-motion';
// Import the new section components
import HomePageClient from '@/components/HomePageClient';

const SITE_URL = 'https://glasgowgfx.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: "Home | Nexus",
  description: "Crafting exceptional digital experiences through innovative design and development. Let's collaborate to bring your vision to life.",
  openGraph: {
    title: "Home | Nexus",
    description: "Crafting exceptional digital experiences through innovative design and development. Let's collaborate to bring your vision to life.",
    url: new URL(SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus - Digital Design Collective Homepage",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Nexus",
    description: "Crafting exceptional digital experiences through innovative design and development. Let's collaborate to bring your vision to life.",
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus - Digital Design Collective Homepage"
    }],
    creator: "@glasgowgfx"
  },
  metadataBase: new URL(SITE_URL)
};

export default function Home() {
  // useEffect for smooth scrolling removed - will be handled later or via CSS

  return (
    <main className="relative">
      <HomePageClient />
    </main>
  );
}
