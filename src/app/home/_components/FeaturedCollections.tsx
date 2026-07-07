import Image from 'next/image';

import { Button } from '@/components/ui/button';

const COLLECTIONS = [
  {
    title: 'Wine',
    description: 'Curated selection of premium imported wines',
    image: '/images/feature/wine.jpg',
  },
  {
    title: 'Whisky',
    description: 'World-famous labels for true connoisseurs',
    image: '/images/feature/whisky.jpg',
  },
  {
    title: 'Gourmet Snacks',
    description: 'Delicious treats from around the world',
    image: '/images/feature/snack.jpg',
  },
  {
    title: 'Coffee',
    description: 'Quality coffee to start your day right',
    image: '/images/feature/coffee.jpg',
  },
];

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          Featured Collections
        </h2>
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COLLECTIONS.map(({ title, description, image }) => (
          <div
            key={title}
            className="relative flex aspect-3/2 items-end overflow-hidden rounded-2xl"
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/40 to-transparent" />

            <div className="relative p-5">
              <h3 className="font-heading text-xl font-bold tracking-wide text-white uppercase">
                {title}
              </h3>
              <p className="mt-1 max-w-[18ch] text-xs text-white/75">{description}</p>
              <Button size="sm" className="mt-4 w-fit rounded-full px-4">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
