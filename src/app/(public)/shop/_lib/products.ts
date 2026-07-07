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
  description: string;
  image: string;
  images: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'chateau-margaux-bordeaux-2018',
    category: 'premiumWines',
    name: 'Château Margaux Bordeaux 2018',
    price: 2850000,
    description:
      'A structured Bordeaux blend from a celebrated vintage, layered with dark cherry, cedar, and soft tannins that soften beautifully over a long finish.',
    image: '/images/one-stop/premium-wine.jpg',
    images: [
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
    ],
  },
  {
    id: 'barossa-valley-shiraz-reserve',
    category: 'premiumWines',
    name: 'Barossa Valley Shiraz Reserve',
    price: 890000,
    description:
      'Bold and full-bodied, this Barossa Shiraz delivers ripe blackberry and pepper spice with a smooth, oak-aged finish.',
    image: '/images/one-stop/premium-wine.jpg',
    images: [
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
    ],
  },
  {
    id: 'prosecco-rose-sparkling',
    category: 'premiumWines',
    name: 'Prosecco Rosé Sparkling',
    price: 650000,
    description:
      'A light, fruit-forward sparkling rosé with notes of strawberry and citrus zest — perfect for warm Hoi An evenings.',
    image: '/images/one-stop/premium-wine.jpg',
    images: [
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
      '/images/one-stop/premium-wine.jpg',
    ],
  },
  {
    id: 'macallan-12-double-cask',
    category: 'whisky',
    name: 'Macallan 12 Year Double Cask',
    price: 3200000,
    description:
      'Matured in a combination of American and European oak sherry casks, delivering rich vanilla, citrus, and ginger notes.',
    image: '/images/one-stop/whisky.jpg',
    images: [
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
    ],
  },
  {
    id: 'johnnie-walker-black-label',
    category: 'whisky',
    name: 'Johnnie Walker Black Label',
    price: 980000,
    description:
      'A classic 12-year-old blend combining smoky, sweet, and fruity single malts for a rich, deep flavor.',
    image: '/images/one-stop/whisky.jpg',
    images: [
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
    ],
  },
  {
    id: 'bulleit-bourbon-frontier',
    category: 'whisky',
    name: 'Bulleit Bourbon Frontier',
    price: 1150000,
    description:
      'A high-rye bourbon with bold spice and a smooth finish, well suited for classic cocktails or sipping neat.',
    image: '/images/one-stop/whisky.jpg',
    images: [
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
      '/images/one-stop/whisky.jpg',
    ],
  },
  {
    id: 'pasteur-street-jasmine-ipa',
    category: 'craftBeer',
    name: 'Pasteur Street Jasmine IPA',
    price: 65000,
    description:
      'A Saigon-brewed IPA infused with jasmine flowers, balancing floral aroma with a crisp hoppy bitterness.',
    image: '/images/one-stop/beer.jpg',
    images: ['/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg'],
  },
  {
    id: 'heineken-silver-6-pack',
    category: 'craftBeer',
    name: 'Heineken Silver 6-Pack',
    price: 180000,
    description:
      'A lighter, smoother lager with a crisp, refreshing taste — a lower-calorie alternative to the original.',
    image: '/images/one-stop/beer.jpg',
    images: ['/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg'],
  },
  {
    id: 'biacraft-saigon-lager',
    category: 'craftBeer',
    name: 'BiaCraft Saigon Lager',
    price: 55000,
    description:
      'A clean, easy-drinking craft lager brewed locally, with a light malt sweetness and gentle carbonation.',
    image: '/images/one-stop/beer.jpg',
    images: ['/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg', '/images/one-stop/beer.jpg'],
  },
  {
    id: 'trung-nguyen-legend-premium',
    category: 'coffee',
    name: 'Trung Nguyên Legend Premium',
    price: 145000,
    description:
      'A signature Vietnamese blend of Robusta and Arabica beans, roasted for a bold, full-bodied cup.',
    image: '/images/one-stop/coffee.jpg',
    images: [
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
    ],
  },
  {
    id: 'highlands-coffee-original-blend',
    category: 'coffee',
    name: 'Highlands Coffee Original Blend',
    price: 120000,
    description:
      'A smooth, well-balanced Vietnamese roast, equally good brewed hot or over ice with condensed milk.',
    image: '/images/one-stop/coffee.jpg',
    images: [
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
    ],
  },
  {
    id: 'hoi-an-roastery-robusta-dark',
    category: 'coffee',
    name: 'Hoi An Roastery Robusta Dark',
    price: 95000,
    description:
      'A dark-roasted single-origin Robusta from the Central Highlands, rich with chocolate and toasted-nut notes.',
    image: '/images/one-stop/coffee.jpg',
    images: [
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
      '/images/one-stop/coffee.jpg',
    ],
  },
  {
    id: 'hoi-an-cao-lau-dry-mix',
    category: 'snacks',
    name: 'Hội An Cao Lầu Dry Mix',
    price: 45000,
    description:
      'A ready-to-cook mix for Hoi An\'s signature noodle dish, packaged with authentic local seasoning.',
    image: '/images/one-stop/snack.jpg',
    images: [
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
    ],
  },
  {
    id: 'banh-dau-xanh-mung-bean-cake',
    category: 'snacks',
    name: 'Bánh Đậu Xanh Mung Bean Cake',
    price: 38000,
    description:
      'A traditional Vietnamese sweet made from mung bean paste — light, delicate, and mildly sweet.',
    image: '/images/one-stop/snack.jpg',
    images: [
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
    ],
  },
  {
    id: 'imported-mixed-nuts-tin',
    category: 'snacks',
    name: 'Imported Mixed Nuts Tin',
    price: 210000,
    description:
      'A generous tin of roasted almonds, cashews, and pistachios — a satisfying snack or gift.',
    image: '/images/one-stop/snack.jpg',
    images: [
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
      '/images/one-stop/snack.jpg',
    ],
  },
  {
    id: 'la-vie-mineral-water-6-pack',
    category: 'drinks',
    name: 'La Vie Mineral Water 6-Pack',
    price: 60000,
    description: 'Naturally sourced mineral water, bottled for everyday hydration.',
    image: '/images/one-stop/drink.jpg',
    images: [
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
    ],
  },
  {
    id: 'red-bull-energy-4-pack',
    category: 'drinks',
    name: 'Red Bull Energy 4-Pack',
    price: 88000,
    description: 'The classic energy drink to keep you going through a long day of sightseeing.',
    image: '/images/one-stop/drink.jpg',
    images: [
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
    ],
  },
  {
    id: 'fresh-coconut-juice-can',
    category: 'drinks',
    name: 'Fresh Coconut Juice Can',
    price: 25000,
    description: 'Lightly sweet coconut water, canned for a refreshing tropical drink on the go.',
    image: '/images/one-stop/drink.jpg',
    images: [
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
      '/images/one-stop/drink.jpg',
    ],
  },
  {
    id: 'hoi-an-silk-lantern',
    category: 'souvenirs',
    name: 'Hội An Silk Lantern',
    price: 150000,
    description:
      'A handmade silk lantern in the traditional Hoi An style — foldable for easy travel.',
    image: '/images/one-stop/sourvenir.jpg',
    images: [
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
    ],
  },
  {
    id: 'hand-painted-ceramic-vase',
    category: 'souvenirs',
    name: 'Hand-Painted Ceramic Vase',
    price: 320000,
    description:
      'A locally crafted ceramic vase, hand-painted with traditional motifs by Hoi An artisans.',
    image: '/images/one-stop/sourvenir.jpg',
    images: [
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
    ],
  },
  {
    id: 'conical-hat-keychain-set',
    category: 'souvenirs',
    name: 'Conical Hat Keychain Set',
    price: 60000,
    description: 'A set of miniature conical hat keychains — a charming, lightweight gift.',
    image: '/images/one-stop/sourvenir.jpg',
    images: [
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
      '/images/one-stop/sourvenir.jpg',
    ],
  },
  {
    id: 'reef-safe-sunscreen-spf50',
    category: 'travelEssentials',
    name: 'Reef-Safe Sunscreen SPF50',
    price: 175000,
    description:
      'A reef-safe, high-SPF sunscreen formulated without oxybenzone — gentle on skin and the ocean.',
    image: '/images/one-stop/travel.jpg',
    images: [
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
    ],
  },
  {
    id: 'travel-size-toiletry-kit',
    category: 'travelEssentials',
    name: 'Travel-Size Toiletry Kit',
    price: 95000,
    description:
      'A compact kit of travel-size essentials, perfect for topping up mid-trip.',
    image: '/images/one-stop/travel.jpg',
    images: [
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
    ],
  },
  {
    id: 'mosquito-repellent-spray',
    category: 'travelEssentials',
    name: 'Mosquito Repellent Spray',
    price: 55000,
    description: 'A fast-absorbing repellent spray for evening walks through the Ancient Town.',
    image: '/images/one-stop/travel.jpg',
    images: [
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
      '/images/one-stop/travel.jpg',
    ],
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

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}
