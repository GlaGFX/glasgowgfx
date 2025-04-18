import React from 'react';
import type { Metadata } from 'next';
import { FiUsers, FiAward, FiClock, FiLayers } from 'react-icons/fi';
import ServiceCard from '@/components/ServiceCard';
import TeamMemberCard from '@/components/TeamMemberCard';

export const metadata: Metadata = {
  title: 'About Us | Glasgow GFX',
  description: 'Learn about our team, values and creative process at Glasgow GFX design studio.',
};

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">About Glasgow GFX</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Crafting digital experiences that inspire and transform
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
        <div className="space-y-6 text-gray-400">
          <p>
            Founded in 2015, Glasgow GFX began as a small collective of designers passionate about
            creating meaningful digital experiences. Today, we've grown into a multidisciplinary
            studio serving clients worldwide.
          </p>
          <p>
            Our journey has been guided by a commitment to excellence, innovation, and building
            lasting relationships with our clients and community.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard title="Collaboration" icon={FiUsers}>
              We believe the best work comes from diverse perspectives working in harmony.
            </ServiceCard>
            <ServiceCard title="Innovation" icon={FiAward}>
              Constantly pushing boundaries to deliver cutting-edge solutions.
            </ServiceCard>
            <ServiceCard title="Craftsmanship" icon={FiLayers}>
              Meticulous attention to detail in every pixel and line of code.
            </ServiceCard>
            <ServiceCard title="Integrity" icon={FiClock}>
              Honest communication and ethical practices guide everything we do.
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard
            name="Alex Morgan"
            role="Creative Director"
            bio="With 10+ years in design, Alex leads our creative vision with a focus on user-centered solutions."
            imageUrl="/team/alex.jpg"
          />
          <TeamMemberCard
            name="Jamie Chen"
            role="Lead Developer"
            bio="Full-stack specialist passionate about building performant, accessible web applications."
            imageUrl="/team/jamie.jpg"
          />
          <TeamMemberCard
            name="Taylor Smith"
            role="UX Strategist"
            bio="Combines psychology and design to create intuitive user experiences that drive results."
            imageUrl="/team/taylor.jpg"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;