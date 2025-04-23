import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

const SITE_URL = 'https://glasgowgfx.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: 'Contact | Nexus',
  description: 'Ready to start your project? Contact our team today for a free consultation and let\'s create something amazing together.',
  openGraph: {
    title: 'Contact | Nexus',
    description: 'Ready to start your project? Contact our team today for a free consultation and let\'s create something amazing together.',
    url: new URL('/contact', SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus - Contact Our Design Team",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contact | Nexus',
    description: 'Ready to start your project? Contact our team today for a free consultation and let\'s create something amazing together.',
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus - Contact Our Design Team"
    }],
    creator: "@glasgowgfx"
  },
  metadataBase: new URL(SITE_URL)
};

const ContactPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to start your next project? Let's talk.
        </p>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;