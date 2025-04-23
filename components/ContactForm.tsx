'use client';

import React, { useRef, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { sendContactMessage, type ContactFormState } from '@/lib/actions'; // Import Server Action and State type

// Separate component for the submit button to use useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

const ContactForm: React.FC = () => {
  const initialState: ContactFormState = { message: null, errors: {}, success: false };
  const [state, formAction] = useFormState(sendContactMessage, initialState);
  const formRef = useRef<HTMLFormElement>(null); // Ref to reset the form

  // Effect to reset the form on successful submission
  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="grid md:grid-cols-2 gap-16">
      {/* Contact Info */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="space-y-6 text-gray-400">
          <p className="flex items-center">
            <FiMail className="mr-3 h-5 w-5 text-primary" />
            <span>hello@glasgowgfx.com</span>
          </p>
          <p className="flex items-center">
            <FiPhone className="mr-3 h-5 w-5 text-primary" />
            <span>+44 141 123 4567</span>
          </p>
          <p className="flex items-center">
            <FiPhone className="mr-3 h-5 w-5 text-primary" />
            <span>07572 221612</span>
          </p>
          <p className="flex items-start">
            <FiMapPin className="mr-3 h-5 w-5 text-primary mt-1" />
            <span className="block">
              The Pentagon Business Centre<br />
              36-38 Washington St<br />
              Glasgow<br />
              G3 8AZ
            </span>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
        {/* Pass the formAction to the form's action prop */}
        <form ref={formRef} className="space-y-6" action={formAction}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="Your Name" aria-describedby="name-error" />
            {state.errors?.name && (
              <p id="name-error" className="mt-1 text-sm text-red-500">{state.errors.name.join(', ')}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="your.email@example.com" aria-describedby="email-error" />
             {state.errors?.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">{state.errors.email.join(', ')}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help?" aria-describedby="message-error"></textarea>
             {state.errors?.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500">{state.errors.message.join(', ')}</p>
            )}
          </div>
          <div>
            {/* Use the SubmitButton component */}
            <SubmitButton />
            {/* Display overall form message from state */}
            {state.message && !state.errors && (
              <p className={`mt-4 ${state.success ? 'text-primary' : 'text-red-500'}`}>
                {state.message}
              </p>
            )}
             {/* Display validation summary if needed */}
             {state.message && state.errors && Object.keys(state.errors).length > 0 && (
              <p className="mt-4 text-red-500">
                {state.message} {/* General validation failure message */}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;