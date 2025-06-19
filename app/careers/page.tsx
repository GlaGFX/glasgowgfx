'use client';

import CareersForm from '@/components/CareersForm';

export default function CareersPage() {
  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
        <p className="text-gray-500 mb-10">
          Interested in working with us? Share your details and we'll notify you about future opportunities.
        </p>
        <CareersForm />
      </div>
    </div>
  )
}