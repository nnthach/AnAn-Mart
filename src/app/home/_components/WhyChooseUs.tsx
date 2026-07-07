import { BadgeCheck, CreditCard, Gift, Headset, ShoppingBag, Truck } from 'lucide-react';

const FEATURES = [
  { icon: Gift, title: 'Wide Selection', subtitle: 'Over 1000+ quality products' },
  { icon: BadgeCheck, title: 'Best Quality', subtitle: 'Carefully selected imported items' },
  { icon: Truck, title: 'Fast Delivery', subtitle: 'Quick delivery to your hotel or villa' },
  {
    icon: Headset,
    title: 'Support 24/7',
    subtitle: 'Friendly support customer service',
  },
  { icon: ShoppingBag, title: 'Gift Wrapping', subtitle: 'Beautiful wrapping for any occasion' },
  { icon: CreditCard, title: 'Secure Payment', subtitle: 'Cash, Card & Online payment available' },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="border-border rounded-2xl border bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
          <h2 className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Why Choose An An Mart?
          </h2>
          <span className="via-primary h-px w-10 bg-linear-to-r from-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {FEATURES.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <span className="border-primary text-primary mb-3 flex size-12 items-center justify-center rounded-full border-2">
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
                {title}
              </h3>
              <p className="mt-1 text-[11px] leading-snug text-gray-500">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
