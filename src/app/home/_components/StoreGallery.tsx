import { MapPin } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

const GALLERY_IMAGES = [
  '/images/ourstore/our-store-one.jpg',
  '/images/ourstore/our-store-two.jpg',
  '/images/ourstore/our-store-three.jpg',
  '/images/ourstore/our-store-four.jpg',
];

export function StoreGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
        <div>
          <h2 className="text-primary font-heading text-2xl font-bold">Our Store</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Visit our store in the heart of Hoi An and explore our wide range of products.
          </p>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-accent mt-5 gap-1.5 rounded-full px-5"
          >
            <MapPin className="size-4" />
            Visit Us Today
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={image} className="relative aspect-3/2 overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={`An An Mart store photo ${index + 1}`}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
