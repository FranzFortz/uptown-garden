import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import AboutSection from '@/components/sections/AboutSection';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Uptown Garden Venue & Catering | Bacolod',
  description:
    'Premier event venue in Bacolod City offering elegant spaces for weddings, debuts, birthdays, and corporate events. Experience refined organic elegance in a lush garden setting.',
  openGraph: {
    title: 'Uptown Garden Venue & Catering | Bacolod',
    description:
      'Premier event venue in Bacolod City offering elegant spaces for weddings, debuts, birthdays, and corporate events.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-sage-dark mb-4">Why Choose Uptown Garden</h2>
            <p className="text-lg text-bark/80 max-w-2xl mx-auto">
              Experience the perfect blend of natural beauty and modern elegance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="w-8 h-8 text-sage-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-sage-dark mb-3">
                Stunning Natural Setting
              </h3>
              <p className="text-bark/80">
                Lush gardens and open spaces create a breathtaking backdrop for
                your special day
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="w-8 h-8 text-sage-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-sage-dark mb-3">
                Full-Service Catering
              </h3>
              <p className="text-bark/80">
                Exquisite cuisine prepared by our expert culinary team to
                delight your guests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sage/20">
                <svg
                  className="w-8 h-8 text-sage-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-sage-dark mb-3">
                Expert Event Planning
              </h3>
              <p className="text-bark/80">
                Dedicated team ensuring every detail is perfect from start to
                finish
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <GallerySection />
      <AboutSection />

      <section className="section-padding bg-gradient-to-r from-sage to-sage-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let us help you create unforgettable memories in our beautiful
            garden venue. Contact us today for a consultation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sage-dark px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-surface hover:shadow-xl inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
