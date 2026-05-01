import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gallery | Uptown Garden Venue & Catering',
  description:
    'Explore our stunning event gallery showcasing weddings, debuts, birthdays, and corporate events hosted at Uptown Garden Bacolod. See our beautiful garden venue in action.',
  openGraph: {
    title: 'Gallery | Uptown Garden Venue & Catering',
    description:
      'Stunning event photos from weddings, debuts, and corporate events at Uptown Garden Bacolod.',
  },
};

const galleryItems = [
  { id: 1, category: 'Wedding', caption: 'Garden Wedding Ceremony' },
  { id: 2, category: 'Wedding', caption: 'Reception Hall Setup' },
  { id: 3, category: 'Birthday', caption: 'Birthday Celebration' },
  { id: 4, category: 'Corporate', caption: 'Corporate Event' },
  { id: 5, category: 'Wedding', caption: 'Outdoor Wedding Setup' },
  { id: 6, category: 'Debut', caption: '18th Birthday Debut' },
  { id: 7, category: 'Corporate', caption: 'Team Building Activity' },
  { id: 8, category: 'Wedding', caption: 'Evening Reception' },
  { id: 9, category: 'Birthday', caption: 'Birthday Party' },
  { id: 10, category: 'Venue', caption: 'Garden Venue Overview' },
  { id: 11, category: 'Venue', caption: 'Event Space Interior' },
  { id: 12, category: 'Corporate', caption: 'Conference Setup' },
];

const categories = ['All', 'Wedding', 'Birthday', 'Debut', 'Corporate', 'Venue'];

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-sage/20 to-surface">
        <div className="container-custom text-center">
          <h1 className="text-sage-dark mb-6">Gallery</h1>
          <p className="text-xl text-bark/80 max-w-3xl mx-auto">
            Discover the beauty and elegance of Uptown Garden through our
            collection of memorable events and stunning venue spaces.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  category === 'All'
                    ? 'btn-primary'
                    : 'btn-secondary'
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer bg-gradient-to-br from-sage to-sage-dark"
              >
                <div className="absolute inset-0 bg-bark/40 group-hover:bg-bark/20 transition-all duration-300" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <span className="text-sm font-medium mb-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="font-serif text-xl text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sage to-earth transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-sage to-sage-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-6">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let us help you plan an unforgettable event that your guests will
            remember for years to come.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sage-dark px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:bg-surface hover:shadow-xl inline-block"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </>
  );
}
