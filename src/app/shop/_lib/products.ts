export type ProductCategory =
  | 'premiumWines'
  | 'whisky'
  | 'craftBeer'
  | 'coffee'
  | 'snacks'
  | 'drinks'
  | 'souvenirs'
  | 'travelEssentials';

export interface Product {
  id: string;
  category: ProductCategory;
  name: string;
  price: number;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'chateau-margaux-bordeaux-2018',
    category: 'premiumWines',
    name: 'Château Margaux Bordeaux 2018',
    price: 2850000,
    image: '/images/one-stop/premium-wine.jpg',
  },
  {
    id: 'barossa-valley-shiraz-reserve',
    category: 'premiumWines',
    name: 'Barossa Valley Shiraz Reserve',
    price: 890000,
    image: '/images/one-stop/premium-wine.jpg',
  },
  {
    id: 'prosecco-rose-sparkling',
    category: 'premiumWines',
    name: 'Prosecco Rosé Sparkling',
    price: 650000,
    image: '/images/one-stop/premium-wine.jpg',
  },
  {
    id: 'macallan-12-double-cask',
    category: 'whisky',
    name: 'Macallan 12 Year Double Cask',
    price: 3200000,
    image: '/images/one-stop/whisky.jpg',
  },
  {
    id: 'johnnie-walker-black-label',
    category: 'whisky',
    name: 'Johnnie Walker Black Label',
    price: 980000,
    image: '/images/one-stop/whisky.jpg',
  },
  {
    id: 'bulleit-bourbon-frontier',
    category: 'whisky',
    name: 'Bulleit Bourbon Frontier',
    price: 1150000,
    image: '/images/one-stop/whisky.jpg',
  },
  {
    id: 'pasteur-street-jasmine-ipa',
    category: 'craftBeer',
    name: 'Pasteur Street Jasmine IPA',
    price: 65000,
    image: '/images/one-stop/beer.jpg',
  },
  {
    id: 'heineken-silver-6-pack',
    category: 'craftBeer',
    name: 'Heineken Silver 6-Pack',
    price: 180000,
    image: '/images/one-stop/beer.jpg',
  },
  {
    id: 'biacraft-saigon-lager',
    category: 'craftBeer',
    name: 'BiaCraft Saigon Lager',
    price: 55000,
    image: '/images/one-stop/beer.jpg',
  },
  {
    id: 'trung-nguyen-legend-premium',
    category: 'coffee',
    name: 'Trung Nguyên Legend Premium',
    price: 145000,
    image: '/images/one-stop/coffee.jpg',
  },
  {
    id: 'highlands-coffee-original-blend',
    category: 'coffee',
    name: 'Highlands Coffee Original Blend',
    price: 120000,
    image: '/images/one-stop/coffee.jpg',
  },
  {
    id: 'hoi-an-roastery-robusta-dark',
    category: 'coffee',
    name: 'Hoi An Roastery Robusta Dark',
    price: 95000,
    image: '/images/one-stop/coffee.jpg',
  },
  {
    id: 'hoi-an-cao-lau-dry-mix',
    category: 'snacks',
    name: 'Hội An Cao Lầu Dry Mix',
    price: 45000,
    image: '/images/one-stop/snack.jpg',
  },
  {
    id: 'banh-dau-xanh-mung-bean-cake',
    category: 'snacks',
    name: 'Bánh Đậu Xanh Mung Bean Cake',
    price: 38000,
    image: '/images/one-stop/snack.jpg',
  },
  {
    id: 'imported-mixed-nuts-tin',
    category: 'snacks',
    name: 'Imported Mixed Nuts Tin',
    price: 210000,
    image: '/images/one-stop/snack.jpg',
  },
  {
    id: 'la-vie-mineral-water-6-pack',
    category: 'drinks',
    name: 'La Vie Mineral Water 6-Pack',
    price: 60000,
    image: '/images/one-stop/drink.jpg',
  },
  {
    id: 'red-bull-energy-4-pack',
    category: 'drinks',
    name: 'Red Bull Energy 4-Pack',
    price: 88000,
    image: '/images/one-stop/drink.jpg',
  },
  {
    id: 'fresh-coconut-juice-can',
    category: 'drinks',
    name: 'Fresh Coconut Juice Can',
    price: 25000,
    image: '/images/one-stop/drink.jpg',
  },
  {
    id: 'hoi-an-silk-lantern',
    category: 'souvenirs',
    name: 'Hội An Silk Lantern',
    price: 150000,
    image: '/images/one-stop/sourvenir.jpg',
  },
  {
    id: 'hand-painted-ceramic-vase',
    category: 'souvenirs',
    name: 'Hand-Painted Ceramic Vase',
    price: 320000,
    image: '/images/one-stop/sourvenir.jpg',
  },
  {
    id: 'conical-hat-keychain-set',
    category: 'souvenirs',
    name: 'Conical Hat Keychain Set',
    price: 60000,
    image: '/images/one-stop/sourvenir.jpg',
  },
  {
    id: 'reef-safe-sunscreen-spf50',
    category: 'travelEssentials',
    name: 'Reef-Safe Sunscreen SPF50',
    price: 175000,
    image: '/images/one-stop/travel.jpg',
  },
  {
    id: 'travel-size-toiletry-kit',
    category: 'travelEssentials',
    name: 'Travel-Size Toiletry Kit',
    price: 95000,
    image: '/images/one-stop/travel.jpg',
  },
  {
    id: 'mosquito-repellent-spray',
    category: 'travelEssentials',
    name: 'Mosquito Repellent Spray',
    price: 55000,
    image: '/images/one-stop/travel.jpg',
  },
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'premiumWines',
  'whisky',
  'craftBeer',
  'coffee',
  'snacks',
  'drinks',
  'souvenirs',
  'travelEssentials',
];

export function formatPrice(price: number): string {
  return `${price.toLocaleString('vi-VN')}₫`;
}
