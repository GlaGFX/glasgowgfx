import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { FiPenTool, FiCode, FiUsers } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Our Services | Glasgow GFX',
  description: 'Explore the professional design and development services offered by Glasgow GFX.',
};

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        <ServiceCard title="Design Services" icon={FiPenTool}>
          <ul className="space-y-4 pl-2">
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/brand-identity" className="hover:underline flex-1">Brand Identity & Logo Design</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/ui-ux-design" className="hover:underline flex-1">UI/UX Design</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/print-packaging" className="hover:underline flex-1">Print & Packaging Design</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/motion-graphics" className="hover:underline flex-1">Motion Graphics</Link>
            </li>
          </ul>
          <div className="mt-6">
            <Link href="/services/design" className="text-primary hover:underline font-medium">Learn more →</Link>
          </div>
          <div className="mt-6">
            <Link href="/services/development" className="text-primary hover:underline font-medium">Learn more →</Link>
          </div>
        </ServiceCard>

        <ServiceCard title="Development Services" icon={FiCode}>
          <ul className="space-y-4 pl-2">
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/web-development" className="hover:underline flex-1">Web Application Development</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/mobile-development" className="hover:underline flex-1">Mobile App Development</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/ecommerce" className="hover:underline flex-1">E-commerce Solutions</Link>
            </li>
            <li className="flex items-start gap-3 group hover:text-primary transition-all duration-200 cursor-pointer">
              <span className="text-primary group-hover:translate-x-1 transition-transform duration-200 mt-1">•</span>
              <Link href="/services/cms" className="hover:underline flex-1">CMS Implementation</Link>
            </li>
          </ul>
        </ServiceCard>

        <ServiceCard title="Our Approach" icon={FiUsers}>
          <div className="space-y-4">
            <p>
              We take a collaborative approach to every project, working closely with our clients.
            </p>
            <p>
              Our process combines creative thinking with technical expertise to deliver exceptional results.
            </p>
          </div>
        </ServiceCard>
      </div>
      <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-8">
        <p>We offer comprehensive design and development solutions tailored to your business needs. Our team combines creative vision with technical expertise to deliver exceptional results.</p>
      </div>
    </div>
  );
};

export default ServicesPage;