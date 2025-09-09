import type { Metadata } from 'next';
import { motion } from 'framer-motion';
// Import the new section components
import HomePageClient from '@/components/HomePageClient';

const SITE_URL = 'https://alignestudio.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: "Home | Aligne Studio",
  description: "Transform your body and mind at Aligne Studio. Premium pilates classes, personalized training, and wellness programs in a modern, minimalist environment.",
  openGraph: {
    title: "Home | Aligne Studio",
    description: "Transform your body and mind at Aligne Studio. Premium pilates classes, personalized training, and wellness programs in a modern, minimalist environment.",
    url: new URL(SITE_URL),
    siteName: "Aligne Studio",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Aligne Studio - Premium Pilates Studio Homepage",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Aligne Studio",
    description: "Transform your body and mind at Aligne Studio. Premium pilates classes, personalized training, and wellness programs in a modern, minimalist environment.",
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Aligne Studio - Premium Pilates Studio Homepage"
    }],
    creator: "@alignestudio"
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
