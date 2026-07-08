import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { formatPrice } from '@/app/(public)/shop/_lib/products';

interface ProductCardProps {
  href: string;
  image: string;
  name: string;
  price: number;
  categoryLabel: string;
  addToCartLabel: string;
}

export function ProductCard({
  href,
  image,
  name,
  price,
  categoryLabel,
  addToCartLabel,
}: ProductCardProps) {
  return (
    <article className="border-border group flex flex-col overflow-hidden rounded-xl border bg-white transition-shadow hover:shadow-lg">
      <Link href={href} className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {categoryLabel && (
          <span className="bg-primary absolute top-3 left-3 rounded-md px-2 py-1 text-[10px] font-semibold tracking-wide text-white uppercase">
            {categoryLabel}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
          <Link href={href} className="hover:text-primary">
            {name}
          </Link>
        </h3>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1">
          <span className="text-primary text-base font-bold">{formatPrice(price)}</span>
          <button
            type="button"
            aria-label={addToCartLabel}
            className="bg-primary hover:bg-primary/90 flex size-9 shrink-0 items-center justify-center rounded-lg text-white transition-colors"
          >
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
