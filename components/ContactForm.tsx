'use client';

import React, { useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('formSubmitted')) {
      setSubmitStatus('success');
      setSubmitMessage('Form submitted successfully! Email sent.');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // Store reference to the form
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage(''); // Clear previous message

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    let response: Response | null = null; // Variable to hold response

    try {
      // --- Fetch Operation ---
      response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // --- Response Processing ---
      if (response.ok) {
        const responseText = await response.text();
        try {
          if (!responseText) {
            // Handle empty response body
            console.warn('Received empty success response body. Status:', response.status);
            setSubmitStatus('success'); // Treat as success since status is OK
            setSubmitMessage('Form submitted successfully! (No confirmation details)');
            if (form) form.reset(); // Check form exists before reset
            localStorage.setItem('formSubmitted', 'true');
          } else {
            // Try parsing the non-empty text as JSON
            const result = JSON.parse(responseText);
            if (result.success) {
              setSubmitStatus('success');
              setSubmitMessage(result.message || 'Form submitted successfully! Email sent.');
              if (form) form.reset(); // Check form exists before reset
              localStorage.setItem('formSubmitted', 'true');
            } else {
              // Handle cases where response is OK but API indicates failure
              console.error('API indicated failure despite OK status:', result);
              setSubmitStatus('error');
              setSubmitMessage(result.message || 'Submission failed on the server.');
            }
          }
        } catch (parseError) { // Catch JSON parsing errors specifically
          console.error('Error parsing success response JSON:', parseError, 'Response Text:', responseText, 'Response Status:', response.status);
          setSubmitStatus('error');
          setSubmitMessage('Submission likely succeeded, but the response format was unexpected.');
          if (form) form.reset(); // Check form exists - still reset as email likely sent
          localStorage.setItem('formSubmitted', 'true'); // Assume success based on status
        }
      } else { // Handle non-2xx responses (4xx, 5xx)
        let errorMessage = `Server error: ${response.status}`;
        try {
          // Try parsing error response JSON
          const errorResult = await response.json();
          errorMessage = errorResult.message || `Server responded with status ${response.status}`;
        } catch (parseError) {
          console.error('Error parsing error response JSON:', parseError, 'Response Status:', response.status);
          errorMessage = `Server responded with status ${response.status}, but error details are unclear.`;
        }
        setSubmitStatus('error');
        setSubmitMessage(errorMessage);
      }

    } catch (fetchError) { // Catch only genuine fetch/network errors
      console.error('Form submission fetch/network error:', fetchError);
      setSubmitStatus('error');
      let errorMessage = 'Network error during submission.';
      // Add details only if it's a generic Error, avoiding the reset TypeError message here
      if (fetchError instanceof Error && !(fetchError instanceof TypeError && fetchError.message.includes("reading 'reset'"))) {
        errorMessage += ` Details: ${fetchError.message}`;
      } else if (fetchError instanceof TypeError && fetchError.message.includes("reading 'reset'")) {
         // Log the reset error specifically if it somehow bubbles up here
         console.error("Reset error caught unexpectedly in fetch catch block:", fetchError);
         errorMessage = "An unexpected error occurred after submission attempt.";
      }
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="your.email@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:ring-primary focus:border-primary" placeholder="How can we help?"></textarea>
          </div>
          <div>
            <button 
              type="submit" 
              className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500">{submitMessage}</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500">{submitMessage}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;