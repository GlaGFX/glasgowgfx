'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/, 'Please enter a valid phone number').optional(),
  interests: z.array(z.string()).nonempty('Please select at least one area of interest'),
  otherInterest: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
        <p>Thank you for your interest! We'll contact you when relevant opportunities arise.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={`form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300 ${
            errors.email ? 'border-red-500' : ''
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={`form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300 ${
            errors.phone ? 'border-red-500' : ''
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <p className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest *</p>
        <div className="flex flex-wrap gap-2">
          {['Design', 'Development', 'Marketing', 'Other'].map((interest) => {
            const id = `interest-${interest.toLowerCase()}`;
            return (
              <div key={interest} className="relative">
                <input
                  id={id}
                  type="checkbox"
                  value={interest}
                  {...register('interests')}
                  className="absolute opacity-0 h-0 w-0 peer"
                />
                <label
                  htmlFor={id}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200
                    bg-white/5 border border-white/10 text-gray-700 dark:text-gray-300
                    peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary
                    hover:bg-white/10 hover:border-white/20
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2"
                >
                  {interest}
                </label>
              </div>
            );
          })}
        </div>
        {errors.interests && (
          <p className="mt-1 text-sm text-red-500">{errors.interests.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="submit-btn w-full p-4 rounded-lg bg-primary text-white font-semibold text-base cursor-pointer transition-all duration-300 ease-in-out border-none hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Interest'}
      </button>
    </form>
  );
}