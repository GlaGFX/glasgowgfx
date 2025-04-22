import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Glasgow GFX',
  description: 'Get in touch with Glasgow GFX. We\'d love to hear about your project.',
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