'use client';

import { useState, useTransition } from 'react';
import { submitInquiry } from '@/actions/submitInquiry';
import type { InquiryInput } from '@/lib/validators/inquiry';

export default function InquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setGeneralError('');
    setShowSuccess(false);

    const formData = new FormData(e.currentTarget);

    const data: InquiryInput = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      event_type: formData.get('event_type') as 'wedding' | 'birthday_debut' | 'corporate',
      event_date: formData.get('event_date') as string,
      guest_count: formData.get('guest_count') ? Number(formData.get('guest_count')) : undefined,
      message: formData.get('message') as string,
    };

    startTransition(async () => {
      const result = await submitInquiry(data);

      if (!result.success) {
        if (result.errors) {
          setErrors(result.errors);
        } else if (result.error === 'db') {
          setGeneralError(
            'Unable to submit your inquiry at this time. Please try again or contact us directly.'
          );
        } else {
          setGeneralError('An unexpected error occurred. Please try again.');
        }
      } else {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          setShowSuccess(false);
        }, 10000);
      }
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <div className="bg-sage/20 border-2 border-sage text-sage-dark p-4 rounded-lg">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h4 className="font-semibold mb-1">Inquiry Submitted Successfully!</h4>
              <p className="text-sm">
                Thank you for your interest in Uptown Garden. We've received your
                inquiry and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {generalError && (
        <div className="bg-red-50 border-2 border-red-300 text-red-800 p-4 rounded-lg">
          <div className="flex items-start">
            <svg
              className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm">{generalError}</p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block font-medium text-bark mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={isPending}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sage ${
            errors.name
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-mist focus:border-sage'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-medium text-bark mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sage ${
            errors.email
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-mist focus:border-sage'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block font-medium text-bark mb-2">
          Phone <span className="text-bark/50 text-sm">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          disabled={isPending}
          className="w-full px-4 py-3 rounded-lg border-2 border-mist transition-colors focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="+63 XXX XXX XXXX"
        />
        {errors.phone && (
          <p className="text-red-600 text-sm mt-1">{errors.phone[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="event_type" className="block font-medium text-bark mb-2">
          Event Type <span className="text-red-500">*</span>
        </label>
        <select
          id="event_type"
          name="event_type"
          required
          disabled={isPending}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sage ${
            errors.event_type
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-mist focus:border-sage'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <option value="">Select an event type</option>
          <option value="wedding">Wedding</option>
          <option value="birthday_debut">Birthday & Debut</option>
          <option value="corporate">Corporate Event</option>
        </select>
        {errors.event_type && (
          <p className="text-red-600 text-sm mt-1">{errors.event_type[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="event_date" className="block font-medium text-bark mb-2">
          Event Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="event_date"
          name="event_date"
          required
          min={today}
          disabled={isPending}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-sage ${
            errors.event_date
              ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
              : 'border-mist focus:border-sage'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        />
        {errors.event_date && (
          <p className="text-red-600 text-sm mt-1">{errors.event_date[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="guest_count" className="block font-medium text-bark mb-2">
          Guest Count <span className="text-bark/50 text-sm">(Optional)</span>
        </label>
        <input
          type="number"
          id="guest_count"
          name="guest_count"
          min="1"
          disabled={isPending}
          className="w-full px-4 py-3 rounded-lg border-2 border-mist transition-colors focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Estimated number of guests"
        />
        {errors.guest_count && (
          <p className="text-red-600 text-sm mt-1">{errors.guest_count[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-bark mb-2">
          Message <span className="text-bark/50 text-sm">(Optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={isPending}
          className="w-full px-4 py-3 rounded-lg border-2 border-mist transition-colors focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage disabled:opacity-50 disabled:cursor-not-allowed resize-none"
          placeholder="Tell us more about your event..."
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </>
        ) : (
          'Submit Inquiry'
        )}
      </button>

      <p className="text-sm text-bark/60 text-center">
        By submitting this form, you agree to be contacted by Uptown Garden
        regarding your event inquiry.
      </p>
    </form>
  );
}
