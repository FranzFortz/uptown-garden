import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Wedding ceremony setup', caption: 'Wedding' },
  { src: '/images/gallery-2.jpg', alt: 'Garden event space', caption: 'Garden Venue' },
  { src: '/images/gallery-3.jpg', alt: 'Birthday celebration', caption: 'Birthday' },
  { src: '/images/gallery-4.jpg', alt: 'Corporate event', caption: 'Corporate' },
];

export default function GallerySection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-sage-dark mb-4">Gallery</h2>
          <p className="text-lg text-bark/80 max-w-2xl mx-auto">
            Explore our beautiful venue and past events that showcase the magic
            we create for every celebration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-br from-sage to-sage-dark" />
              <div className="absolute inset-0 bg-bark/40 group-hover:bg-bark/20 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
