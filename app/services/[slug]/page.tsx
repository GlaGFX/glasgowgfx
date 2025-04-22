import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find(s => s.id === params.slug);
  if (!service) return {};
  
  return {
    title: `${service.title} | Glasgow GFX`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.id === params.slug);
  if (!service) return notFound();

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Service Hero */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{service.title}</h1>
            <p className="text-xl mb-8">{service.description}</p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
              Get a Quote
            </button>
          </div>
          <div className="w-full md:w-1/3 bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Service Highlights</h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Related Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case study items would be mapped here */}
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Case Study Example</h3>
            <p className="text-gray mb-4">Brief description of a relevant project.</p>
            <a href="#" className="text-primary font-semibold hover:underline">View Project →</a>
          </div>
        </div>
      </motion.section>

      {/* Pricing/CTA */}
      <motion.section 
        className="bg-white/5 p-12 rounded-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8 max-w-xl mx-auto">
          Contact us for a custom quote tailored to your specific needs.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
          Contact Us
        </button>
      </motion.section>
    </div>
  );
}
