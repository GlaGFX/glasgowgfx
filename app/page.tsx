import type { Metadata } from 'next';
import ComingSoonPage from '@/components/ComingSoonPage';

const SITE_URL = 'https://alignestudio.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: "Coming Soon | Aligne Studio",
  description: "Something extraordinary is on the way. Be the first to know when Aligne Studio launches - premium pilates classes, personalized training, and wellness programs.",
  openGraph: {
    title: "Coming Soon | Aligne Studio",
    description: "Something extraordinary is on the way. Be the first to know when Aligne Studio launches - premium pilates classes, personalized training, and wellness programs.",
    url: new URL(SITE_URL),
    siteName: "Aligne Studio",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Aligne Studio - Coming Soon",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coming Soon | Aligne Studio",
    description: "Something extraordinary is on the way. Be the first to know when Aligne Studio launches - premium pilates classes, personalized training, and wellness programs.",
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Aligne Studio - Coming Soon"
    }],
    creator: "@alignestudio"
  },
  metadataBase: new URL(SITE_URL)
};

export default function Home() {
  return <ComingSoonPage />;
}
