'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '@/components/FeatureCard'; // Assuming FeatureCard is correctly imported

import { featuresData } from '@/data/features'; // Import data

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32" id="approach">
      <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
        {featuresData.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="h-full" // Ensure motion.div takes full height for proper card layout
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}