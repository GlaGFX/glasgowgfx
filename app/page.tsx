import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import Footer from '@/components/layout/Footer';

const SITE_URL = 'https://aligne-studio.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: "Aligne Studio | Premium Pilates Studio",
  description: "Transform your body and mind through the perfect alignment of strength, flexibility, and mindfulness. Experience pilates in our modern, minimalist studio.",
  openGraph: {
    title: "Aligne Studio | Premium Pilates Studio",
    description: "Transform your body and mind through the perfect alignment of strength, flexibility, and mindfulness. Experience pilates in our modern, minimalist studio.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Aligne Studio | Premium Pilates Studio",
    description: "Transform your body and mind through the perfect alignment of strength, flexibility, and mindfulness. Experience pilates in our modern, minimalist studio.",
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Aligne Studio - Premium Pilates Studio"
    }],
    creator: "@alignestudio"
  },
  metadataBase: new URL(SITE_URL)
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
