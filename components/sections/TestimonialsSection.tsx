'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { testimonialsData } from '@/data/testimonials'; // Import data

export function TestimonialsSection() {
  // Use the first testimonial from the data array
  const testimonial = testimonialsData[0];

  // Return null or a placeholder if there's no testimonial data
  if (!testimonial) {
    return null; // Or render a placeholder message
  }

  return (
    <section className="container mx-auto px-6 py-20 md:py-32" id="about">
      <motion.h2
        className="section-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight font-black-mango"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Members Say
      </motion.h2>

      <motion.div
        className="testimonial-container relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="testimonial-text text-xl md:text-2xl font-medium leading-relaxed md:leading-loose mb-8 italic text-gray-900 dark:text-gray-100">
          {testimonial.text}
        </p>
        <div className="testimonial-author flex flex-col items-center gap-2">
          <div className="author-avatar w-16 h-16 rounded-full bg-gray-light flex items-center justify-center font-bold text-dark text-xl">
            {testimonial.author.avatarInitial}
          </div>
          <div className="author-name font-bold text-lg text-gray-900 dark:text-gray-100">{testimonial.author.name}</div>
          <div className="author-title text-purple-700 dark:text-gray-400 text-sm">{testimonial.author.title}</div>
        </div>
      </motion.div>
    </section>
  );
}