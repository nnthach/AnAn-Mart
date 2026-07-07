import { Beer, Candy, Coffee, CupSoda, Gift, GlassWater, ShoppingBag, Wine } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = [
  {
    icon: Wine,
    title: 'Premium Wines',
    subtitle: 'Red, White, Rosé, Sparkling & More',
    image: '/images/one-stop/premium-wine.jpg',
  },
  {
    icon: GlassWater,
    title: 'Whisky',
    subtitle: 'Scotch, Single Malt, Bourbon & More',
    image: '/images/one-stop/whisky.jpg',
  },
  {
    icon: Beer,
    title: 'Craft Beer',
    subtitle: 'Local & Imported Craft Beer',
    image: '/images/one-stop/beer.jpg',
  },
  {
    icon: Coffee,
    title: 'Coffee',
    subtitle: 'Ground Coffee, Beans & More',
    image: '/images/one-stop/coffee.jpg',
  },
  {
    icon: Candy,
    title: 'Snacks',
    subtitle: 'Chips, Nuts, Cookies & More',
    image: '/images/one-stop/snack.jpg',
  },
  {
    icon: CupSoda,
    title: 'Drinks',
    subtitle: 'Soft Drinks, Juice, Energy Drinks',
    image: '/images/one-stop/drink.jpg',
  },
  {
    icon: Gift,
    title: 'Souvenirs',
    subtitle: 'Vietnam Gifts, Handicrafts & Local Products',
    image: '/images/one-stop/sourvenir.jpg',
  },
  {
    icon: ShoppingBag,
    title: 'Travel Essentials',
    subtitle: 'Sun Care, Personal Care, Daily Essentials',
    image: '/images/one-stop/travel.jpg',
  },
];

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 md:px-8">
      <div className="mb-10 flex items-center justify-center gap-4">
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          Everything You Need in One Stop
        </h2>
        <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {CATEGORIES.map(({ icon: Icon, title, subtitle, image }) => (
          <div
            key={title}
            className="border-border group overflow-hidden rounded-2xl border bg-white text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="relative px-3 pt-7 pb-4">
              <span className="absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md">
                <Icon className="text-primary size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
