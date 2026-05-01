import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-sage via-sage-dark to-bark"
        style={{
          backgroundImage: 'linear-gradient(135deg, #8A9E7F 0%, #5C7A52 50%, #4A3F35 100%)',
        }}
      />
      
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container-custom text-center text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-balance">
          Where Elegance Meets Nature
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-balance opacity-90">
          Create unforgettable moments in Bacolod's premier garden venue for
          weddings, celebrations, and corporate events
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="bg-white text-sage-dark px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-surface hover:shadow-lg"
          >
            Book an Event
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white opacity-75"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
