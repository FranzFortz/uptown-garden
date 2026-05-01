import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us | Uptown Garden Venue & Catering',
  description:
    'Learn about Uptown Garden, Bacolod City\'s premier event venue. Our story, values, and commitment to creating unforgettable celebrations for over a decade.',
  openGraph: {
    title: 'About Us | Uptown Garden Venue & Catering',
    description:
      'Discover the story behind Bacolod\'s premier event venue and our commitment to excellence.',
  },
};

const values = [
  {
    title: 'Excellence',
    description:
      'We strive for perfection in every detail, from cuisine to decor, ensuring your event exceeds expectations.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Authenticity',
    description:
      'We stay true to our roots, blending natural beauty with genuine hospitality to create memorable experiences.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description:
      'We continuously evolve our services and spaces to meet modern event needs while preserving timeless elegance.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

const highlights = [
  {
    title: 'Capacity',
    value: '300',
    unit: 'Guests',
    description: 'Flexible spaces for intimate to grand celebrations',
  },
  {
    title: 'Experience',
    value: '10+',
    unit: 'Years',
    description: 'Decade of excellence in event hosting',
  },
  {
    title: 'Events',
    value: '500+',
    unit: 'Hosted',
    description: 'Successful events and counting',
  },
  {
    title: 'Satisfaction',
    value: '100%',
    unit: 'Goal',
    description: 'Committed to exceeding expectations',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/20 to-surface">
        <div className="container-custom text-center">
          <h1 className="text-sage-dark mb-6">About Uptown Garden</h1>
          <p className="text-xl text-bark/80 max-w-3xl mx-auto">
            Creating unforgettable moments in Bacolod's most enchanting garden
            venue since 2014.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sage-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-bark/80 leading-relaxed">
                <p>
                  Uptown Garden was born from a simple vision: to create a space
                  where natural beauty and refined elegance converge, providing
                  the perfect backdrop for life's most precious moments.
                </p>
                <p>
                  Located in the heart of Bacolod City, our venue has become
                  synonymous with exceptional service, stunning aesthetics, and
                  unforgettable celebrations. From intimate weddings to grand
                  corporate events, we've had the privilege of hosting over 500
                  successful events.
                </p>
                <p>
                  Our commitment goes beyond providing a beautiful space. We
                  partner with you to understand your vision, handle every
                  detail, and ensure your event flows seamlessly from start to
                  finish.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-sage to-sage-dark shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white/30 font-serif text-2xl">
                  Venue Image
                </div>
              </div>
              <div className="absolute -top-6 -left-6 w-2/3 aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-earth to-sage shadow-xl -z-10">
                <div className="w-full h-full opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-sage-dark mb-4">Our Values</h2>
            <p className="text-lg text-bark/80 max-w-2xl mx-auto">
              The principles that guide us in creating exceptional experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card text-center group">
                <div className="text-sage-dark mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif text-sage-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-bark/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-sage-dark mb-4">Venue Highlights</h2>
            <p className="text-lg text-bark/80 max-w-2xl mx-auto">
              Discover what makes Uptown Garden the perfect choice for your event
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="card text-center">
                <div className="text-4xl md:text-5xl font-serif text-sage-dark mb-2">
                  {highlight.value}
                </div>
                <div className="text-lg font-medium text-earth mb-3">
                  {highlight.unit}
                </div>
                <div className="text-sm text-bark/70">{highlight.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 card max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-sage-dark mb-6 text-center">
              Venue Features & Amenities
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">
                    Lush garden ceremony area
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">
                    Climate-controlled reception hall
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">
                    Professional kitchen facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">
                    State-of-the-art audio-visual equipment
                  </span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">Bridal suite and prep rooms</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">Spacious parking area</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">
                    Handicap-accessible facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-sage-dark mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-bark/80">24/7 security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-sage to-sage-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Let's Create Magic Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Experience the Uptown Garden difference. Schedule a venue tour or
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sage-dark px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-surface hover:shadow-xl inline-block"
            >
              Contact Us
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-white/10 inline-block"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
