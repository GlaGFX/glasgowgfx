import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/[.08] hover:border-white/20 relative overflow-hidden">
      <div className="card-icon text-4xl mb-6 inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        {icon}
      </div>
      <h3 className="text-2xl mb-4 font-bold">{title}</h3>
      <p className="text-gray leading-relaxed">{description}</p>
    </div>
  );
}