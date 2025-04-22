import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  link: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  features, 
  link 
}: ServiceCardProps) {
  return (
    <motion.div 
      className="service-card bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/[.08] hover:border-white/20"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="card-icon text-4xl mb-6 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 font-bold">{title}</h3>
      <p className="text-gray mb-6 leading-relaxed">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href={link} 
        className="text-primary font-semibold hover:underline inline-flex items-center"
      >
        Learn more <span className="ml-1">→</span>
      </a>
    </motion.div>
  );
}