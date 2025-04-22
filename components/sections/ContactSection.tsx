'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useActionState } from 'react'; // Import useActionState from react
import { useFormStatus } from 'react-dom'; // Import useFormStatus from react-dom
import { sendContactMessage, type ContactFormState } from '@/lib/actions'; // Import action and state type

// Submit Button component to handle pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="submit-btn md:col-span-2 w-full p-4 rounded-lg bg-primary text-white font-semibold text-base cursor-pointer transition-all duration-300 ease-in-out border-none hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = { message: null, errors: {}, success: false };
  const [state, formAction] = useActionState(sendContactMessage, initialState); // Use useActionState
  const formRef = useRef<HTMLFormElement>(null); // Ref to reset the form

  // Reset form on successful submission
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);


  return (
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

        {/* Use the server action */}
        <motion.form
          ref={formRef} // Assign ref
          action={formAction} // Use the formAction from useFormState
          className="contact-form grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="name" // Add name attribute
              className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
              placeholder="Your Name"
              required
              aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name && state.errors.name.map((error: string) => (
                <p className="mt-1 text-sm text-red-500" key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email" // Add name attribute
              className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
              placeholder="Your Email"
              required
              aria-describedby="email-error"
            />
             <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email && state.errors.email.map((error: string) => (
                <p className="mt-1 text-sm text-red-500" key={error}>{error}</p>
              ))}
            </div>
          </div>
          <div className="form-group md:col-span-2">
            <input
              type="text"
              name="projectType" // Add name attribute
              className="form-input w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300"
              placeholder="Project Type"
            />
          </div>
          <div className="form-group md:col-span-2">
            <textarea
              name="message" // Add name attribute
              className="form-textarea w-full p-4 rounded-lg bg-white/5 border border-white/10 text-light placeholder-gray focus:outline-none focus:border-primary focus:bg-white/[.08] transition-all duration-300 min-h-[150px] resize-vertical"
              placeholder="Tell us about your project"
              required
            aria-describedby="message-error"
            ></textarea>
           <div id="message-error" aria-live="polite" aria-atomic="true">
             {state.errors?.message && state.errors.message.map((error: string) => (
               <p className="mt-1 text-sm text-red-500" key={error}>{error}</p>
             ))}
           </div>
        </div>
        <SubmitButton /> {/* Use the SubmitButton component */}

         {/* Display general form message (success or failure) */}
         {state.message && (
           <div
             aria-live="polite"
             className={`md:col-span-2 mt-4 text-sm ${state.success ? 'text-green-500' : 'text-red-500'}`}
           >
             {state.message}
           </div>
         )}
      </motion.form>
      </div>
    </section>
  );
}