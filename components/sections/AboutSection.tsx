import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sage-dark mb-6">Why Uptown Garden</h2>
            <p className="text-lg text-bark/80 mb-6 leading-relaxed">
              Nestled in the heart of Bacolod City, Uptown Garden offers a
              unique blend of natural beauty and modern sophistication. Our
              lush garden setting provides the perfect backdrop for your most
              cherished moments.
            </p>
            <p className="text-lg text-bark/80 mb-8 leading-relaxed">
              With over a decade of experience in creating unforgettable events,
              our dedicated team ensures every detail is perfect, from intimate
              gatherings to grand celebrations.
            </p>
            <Link href="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sage to-sage-dark shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-white/30 font-serif text-2xl">
                Venue Image
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-earth to-sage shadow-xl -z-10">
              <div className="w-full h-full opacity-50" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-sage-dark text-4xl md:text-5xl font-serif mb-4">
              500+
            </div>
            <div className="text-bark/80 font-medium">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-sage-dark text-4xl md:text-5xl font-serif mb-4">
              10+
            </div>
            <div className="text-bark/80 font-medium">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-sage-dark text-4xl md:text-5xl font-serif mb-4">
              300
            </div>
            <div className="text-bark/80 font-medium">Guests Capacity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
