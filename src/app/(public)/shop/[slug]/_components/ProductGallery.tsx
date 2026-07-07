'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  previousLabel: string;
  nextLabel: string;
}

export function ProductGallery({
  images,
  productName,
  previousLabel,
  nextLabel,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0] ?? '';

  const showPrevious = () => setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  const showNext = () => setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          key={activeIndex}
          src={activeImage}
          alt={`${productName} — ${activeIndex + 1}/${images.length}`}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={previousLabel}
              className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition-colors hover:bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={nextLabel}
              className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md transition-colors hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              aria-label={`${productName} ${index + 1}`}
              className={cn(
                'relative aspect-square overflow-hidden rounded-lg border-2 transition-colors',
                index === activeIndex ? 'border-primary' : 'border-transparent hover:border-gray-300',
              )}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
