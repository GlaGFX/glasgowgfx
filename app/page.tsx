'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links with proper type casting
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll as EventListener);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="hero relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="hero-content flex flex-col items-center gap-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="hero-tagline text-primary font-bold text-sm uppercase tracking-widest px-4 py-2 rounded-full bg-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Design Collective
            </motion.span>

            <motion.div
              className="glitch-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h1
                className="glitch text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none"
                data-text="GLASGOW GFX"
              >
                GLASGOW GFX
              </h1>
            </motion.div>

            <motion.p 
              className="hero-desc text-lg md:text-xl text-gray max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              We're a collective of designers, developers, and strategists passionate about creating meaningful digital products that push boundaries.
            </motion.p>

            <motion.div 
              className="hero-cta flex flex-col sm:flex-row gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <button className="btn-primary px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30">
                View Our Work
              </button>
              <button className="btn-outline px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out hover:-translate-y-1">
                Learn Our Process
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span>Scroll to explore</span>
          <div className="scroll-arrow w-8 h-8 border-2 border-gray rounded-full flex items-center justify-center animate-bounce">
            ↓
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20 md:py-32" id="approach">
        <div className="feature-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "✦",
              title: "Strategic Vision",
              description: "We dive deep into understanding your goals, audience, and market to develop strategies that drive meaningful results."
            },
            {
              icon: "◎",
              title: "Thoughtful Design",
              description: "Our design approach balances aesthetics with functionality, creating intuitive interfaces that delight users."
            },
            {
              icon: "⦿",
              title: "Technical Excellence",
              description: "We build with cutting-edge technologies and best practices, ensuring your digital products are future-proof."
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-20 md:py-32" id="work">
        <motion.h2 
          className="section-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Projects
        </motion.h2>

        <div className="project-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              imageUrl: "/api/placeholder/400/320?text=Project+1",
              category: "UI/UX Design",
              title: "Harmony Finance Platform",
              description: "A comprehensive redesign focused on accessibility and user experience."
            },
            {
              imageUrl: "/api/placeholder/400/320?text=Project+2",
              category: "Brand Identity",
              title: "Lumina Health",
              description: "Creating a cohesive brand identity for a healthcare startup."
            },
            {
              imageUrl: "/api/placeholder/400/320?text=Project+3",
              category: "Web Application",
              title: "Scope Project Management",
              description: "An intuitive project management tool for creative teams."
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-20 md:py-32" id="about">
        <motion.h2 
          className="section-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <motion.div 
          className="testimonial-container relative p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="testimonial-text text-xl md:text-2xl font-medium leading-relaxed md:leading-loose mb-8 italic">
            "Working with Nexus transformed our digital presence completely. Their strategic approach and attention to detail exceeded our expectations at every step."
          </p>
          <div className="testimonial-author flex flex-col items-center gap-2">
            <div className="author-avatar w-16 h-16 rounded-full bg-gray-light flex items-center justify-center font-bold text-dark text-xl">
              JD
            </div>
            <div className="author-name font-bold text-lg">Jane Doe</div>
            <div className="author-title text-gray text-sm">CEO, Innovate Labs</div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-20 md:py-32" id="contact">
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            className="contact-title text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Create Together
          </motion.h2>

          <motion.p 
            className="contact-desc text-gray max-w-xl mb-12 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Have a project in mind? We'd love to hear about it. Get in touch with us and let's start a conversation about bringing your vision to life.
          </motion.p>

          <motion.form 
            className="contact-form grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group md:col-span-2">
              <input
                type="text"
                className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
                placeholder="Project Type"
              />
            </div>
            <div className="form-group md:col-span-2">
              <textarea
                className="form-textarea w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300 min-h-[150px] resize-vertical"
                placeholder="Tell us about your project"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn md:col-span-2 w-full p-4 rounded-lg bg-primary text-white font-semibold text-base cursor-pointer transition-all duration-300 ease-in-out border-none hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
