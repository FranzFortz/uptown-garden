import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Our Services | Uptown Garden Venue & Catering',
  description:
    'Discover our comprehensive event services including weddings, debuts, birthdays, and corporate events. Customized packages for every celebration at Uptown Garden Bacolod.',
  openGraph: {
    title: 'Our Services | Uptown Garden Venue & Catering',
    description:
      'Comprehensive event services for weddings, debuts, birthdays, and corporate events in Bacolod.',
  },
};

const services = [
  {
    id: 'wedding',
    title: 'Weddings',
    description:
      'Say "I do" in a breathtaking garden setting designed for romance and elegance. Our wedding packages include ceremony and reception spaces, full catering services, event coordination, and customizable decor to bring your dream wedding to life.',
    features: [
      'Indoor and outdoor ceremony options',
      'Elegant reception hall',
      'Customizable wedding packages',
      'Professional event coordination',
      'Full catering and bar services',
      'Bridal suite and preparation areas',
      'Audio-visual equipment',
      'Ample parking for guests',
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    id: 'birthday',
    title: 'Birthday & Debut Celebrations',
    description:
      "Celebrate life's milestones in style with our versatile event spaces. From intimate birthday gatherings to grand debut celebrations, we provide the perfect setting and services to make your special day unforgettable.",
    features: [
      'Flexible space configurations',
      'Themed decoration options',
      'Catering for all age groups',
      'Entertainment coordination',
      'Photography-friendly spaces',
      'Indoor and outdoor areas',
      'Party planning assistance',
      'Guest capacity up to 300',
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        />
      </svg>
    ),
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description:
      'Host professional and impactful corporate events in our sophisticated venues. Ideal for conferences, seminars, team building activities, company parties, and business meetings with modern amenities and professional service.',
    features: [
      'Modern conference facilities',
      'High-speed internet connectivity',
      'Presentation equipment',
      'Breakout spaces',
      'Professional catering',
      'Team building areas',
      'Flexible seating arrangements',
      'Business lunch and dinner options',
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/20 to-surface">
        <div className="container-custom text-center">
          <h1 className="text-sage-dark mb-6">Our Services</h1>
          <p className="text-xl text-bark/80 max-w-3xl mx-auto">
            Comprehensive event solutions tailored to your vision. From intimate
            gatherings to grand celebrations, we bring your dreams to life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-sage-dark mb-6">{service.icon}</div>
                <h2 className="text-3xl font-serif text-sage-dark mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-bark/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href="/contact" className="btn-primary">
                  Inquire Now
                </Link>
              </div>

              <div className={`card ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-xl font-serif text-sage-dark mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
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
                      <span className="text-bark/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="card max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-sage-dark mb-4">
              Custom Packages Available
            </h2>
            <p className="text-lg text-bark/80 mb-8">
              Every event is unique, and so are our packages. We work closely with
              you to create a customized package that fits your vision, guest
              count, and budget. Our experienced team will guide you through every
              step of the planning process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/gallery" className="btn-secondary">
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
