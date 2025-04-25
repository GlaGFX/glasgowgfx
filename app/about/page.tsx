import React from 'react';
import type { Metadata } from 'next';
import { FiUsers, FiAward, FiClock, FiLayers } from 'react-icons/fi';
import ServiceCard from '@/components/ServiceCard';
import TeamMemberCard from '@/components/TeamMemberCard';
// import ProcessVisualization from '@/components/ProcessVisualization'; // Remove static import
import StarfieldBackground from '@/components/layout/StarfieldBackground';
import DynamicProcessVisualization from '@/components/DynamicProcessVisualization'; // Import the new client component
import { teamMembers } from '@/data/team';


const SITE_URL = 'https://glasgowgfx.com';
const OG_IMAGE_URL = new URL('/og-image.png', SITE_URL);

export const metadata: Metadata = {
  title: 'About Us | Nexus',
  description: 'Learn about our team, values, and creative process - a collective passionate about crafting exceptional digital experiences that drive results.',
  openGraph: {
    title: 'About Us | Nexus',
    description: 'Learn about our team, values, and creative process - a collective passionate about crafting exceptional digital experiences that drive results.',
    url: new URL('/about', SITE_URL),
    siteName: "Nexus",
    images: [{
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      alt: "Nexus Design Collective - About Our Team and Process",
    }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Us | Nexus',
    description: 'Learn about our team, values, and creative process - a collective passionate about crafting exceptional digital experiences that drive results.',
    images: [{
      url: OG_IMAGE_URL.toString(),
      alt: "Nexus Design Collective - About Our Team and Process"
    }],
    creator: "@glasgowgfx"
  },
  metadataBase: new URL(SITE_URL)
};

const AboutPage = () => {
  return (
    <div className="relative">
      {/* Background handled by layout */}
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">About Glasgow GFX</h1>
        <p className="text-xl text-gray max-w-3xl mx-auto">
          Crafting digital experiences that inspire and transform
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
        <div className="space-y-6 text-gray">
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

      {/* Our Process */}
      <DynamicProcessVisualization />

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
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;