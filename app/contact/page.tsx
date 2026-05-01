import type { Metadata } from 'next';
import InquiryForm from '@/components/ui/InquiryForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Contact Us | Uptown Garden Venue & Catering',
  description:
    'Get in touch with Uptown Garden for event inquiries, venue tours, and bookings. Located in Bacolod City. Contact us today to plan your perfect celebration.',
  openGraph: {
    title: 'Contact Us | Uptown Garden Venue & Catering',
    description:
      'Contact Uptown Garden for event inquiries and bookings in Bacolod City.',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/20 to-surface">
        <div className="container-custom text-center">
          <h1 className="text-sage-dark mb-6">Get in Touch</h1>
          <p className="text-xl text-bark/80 max-w-3xl mx-auto">
            Ready to plan your event? We'd love to hear from you. Fill out the
            form below or reach out directly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif text-sage-dark mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage/20 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-dark mb-1">Address</h3>
                    <p className="text-bark/80">
                      123 Garden Street, Mandalagan
                      <br />
                      Bacolod City, Negros Occidental
                      <br />
                      6100 Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage/20 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-dark mb-1">Phone</h3>
                    <p className="text-bark/80">
                      <a
                        href="tel:+63xxxxxxxxxx"
                        className="hover:text-sage-dark transition-colors"
                      >
                        +63 XXX XXX XXXX
                      </a>
                      <br />
                      <a
                        href="tel:+63xxxxxxxxxx"
                        className="hover:text-sage-dark transition-colors"
                      >
                        +63 XXX XXX XXXX
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage/20 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-dark mb-1">Email</h3>
                    <p className="text-bark/80">
                      <a
                        href="mailto:info@uptowngarden.com"
                        className="hover:text-sage-dark transition-colors"
                      >
                        info@uptowngarden.com
                      </a>
                      <br />
                      <a
                        href="mailto:events@uptowngarden.com"
                        className="hover:text-sage-dark transition-colors"
                      >
                        events@uptowngarden.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sage/20 mr-4 flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-sage-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-dark mb-1">
                      Business Hours
                    </h3>
                    <p className="text-bark/80">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-sage/10 border-2 border-sage/20">
                <h3 className="font-serif text-xl text-sage-dark mb-4">
                  Visit Our Venue
                </h3>
                <p className="text-bark/80 mb-4">
                  Schedule a tour to experience the beauty of Uptown Garden
                  firsthand. Our team will be happy to show you around and
                  discuss how we can bring your event vision to life.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sage-dark font-medium hover:text-sage transition-colors"
                >
                  Get Directions
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="card">
              <h2 className="text-3xl font-serif text-sage-dark mb-6">
                Send Us an Inquiry
              </h2>
              <p className="text-bark/80 mb-6">
                Fill out the form below and we'll get back to you within 24
                hours to discuss your event needs.
              </p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
