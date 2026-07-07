export type Locale = 'en' | 'vi';

interface TitleSubtitle {
  title: string;
  subtitle: string;
}

interface TitleDescription {
  title: string;
  description: string;
}

interface Translation {
  header: {
    nav: {
      home: string;
      shop: string;
      aboutUs: string;
      delivery: string;
      blog: string;
      contact: string;
    };
    signIn: string;
    menu: {
      open: string;
      close: string;
    };
  };
  footer: {
    tagline: string;
    contactTitle: string;
    quickLinksTitle: string;
    popularCategoriesTitle: string;
    openDaily: string;
    quickLinks: {
      shop: string;
      aboutUs: string;
      delivery: string;
      blog: string;
      contact: string;
      terms: string;
    };
    popularCategories: {
      wine: string;
      whisky: string;
      craftBeer: string;
      snacks: string;
      coffee: string;
      souvenirs: string;
      travelEssentials: string;
    };
    copyright: string;
  };
  homepage: {
    hero: {
      eyebrow: string;
      titleHighlight: string;
      subtitle: string;
      description: string;
      shopNow: string;
      visitStore: string;
      trustBadges: {
        fastDelivery: TitleSubtitle;
        importedProducts: TitleSubtitle;
        support: TitleSubtitle;
      };
    };
    categoryGrid: {
      heading: string;
      categories: {
        premiumWines: TitleSubtitle;
        whisky: TitleSubtitle;
        craftBeer: TitleSubtitle;
        coffee: TitleSubtitle;
        snacks: TitleSubtitle;
        drinks: TitleSubtitle;
        souvenirs: TitleSubtitle;
        travelEssentials: TitleSubtitle;
      };
    };
    featuredCollections: {
      heading: string;
      shopNow: string;
      collections: {
        wine: TitleDescription;
        whisky: TitleDescription;
        gourmetSnacks: TitleDescription;
        coffee: TitleDescription;
      };
    };
    giftBanner: {
      title: string;
      description: string;
      cta: string;
    };
    whyChooseUs: {
      heading: string;
      features: {
        wideSelection: TitleSubtitle;
        bestQuality: TitleSubtitle;
        fastDelivery: TitleSubtitle;
        support: TitleSubtitle;
        giftWrapping: TitleSubtitle;
        securePayment: TitleSubtitle;
      };
    };
    storeGallery: {
      visitOurStore: string;
      openDaily: string;
      viewLargerMap: string;
      missingMapToken: string;
    };
  };
  shopPage: {
    title: string;
    description: string;
    searchPlaceholder: string;
    filtersAll: string;
    resultsSuffix: string;
    addToCart: string;
    empty: string;
    sortBy: {
      featured: string;
      nameAsc: string;
      priceAsc: string;
      priceDesc: string;
    };
    perPageSuffix: string;
    pagination: {
      previous: string;
      next: string;
    };
    relatedProducts: string;
  };
}

export const translations: Record<Locale, Translation> = {
  en: {
    header: {
      nav: {
        home: 'Home',
        shop: 'Shop',
        aboutUs: 'About Us',
        delivery: 'Delivery',
        blog: 'Blog',
        contact: 'Contact',
      },
      signIn: 'Sign In',
      menu: {
        open: 'Open menu',
        close: 'Close menu',
      },
    },
    footer: {
      tagline:
        'Your trusted local shop in Hoi An for premium wines, spirits, groceries, snacks, and daily essentials.',
      contactTitle: 'Contact Us',
      quickLinksTitle: 'Quick Links',
      popularCategoriesTitle: 'Popular Categories',
      openDaily: 'Open Daily 8:00 AM - 12:30 AM',
      quickLinks: {
        shop: 'Shop',
        aboutUs: 'About Us',
        delivery: 'Delivery',
        blog: 'Blog',
        contact: 'Contact',
        terms: 'Terms & Conditions',
      },
      popularCategories: {
        wine: 'Wine',
        whisky: 'Whisky',
        craftBeer: 'Craft Beer',
        snacks: 'Snacks',
        coffee: 'Coffee',
        souvenirs: 'Souvenirs',
        travelEssentials: 'Travel Essentials',
      },
      copyright: 'An An Mart - Hoi An Alcohol Shop. All Rights Reserved.',
    },
    homepage: {
      hero: {
        eyebrow: 'Your Premium',
        titleHighlight: 'Grocery & Wine',
        subtitle: 'Destination in Hoi An',
        description:
          'Discover imported wines, premium spirits, gourmet snacks, coffee, souvenirs, and daily essentials — all in one trusted local store.',
        shopNow: 'Shop Now',
        visitStore: 'Visit Our Store',
        trustBadges: {
          fastDelivery: { title: 'Fast Delivery', subtitle: 'In Hoi An Area' },
          importedProducts: { title: 'Imported Products', subtitle: '100% Genuine' },
          support: { title: 'Support 24/7', subtitle: 'Support Any Time' },
        },
      },
      categoryGrid: {
        heading: 'Everything You Need in One Stop',
        categories: {
          premiumWines: { title: 'Premium Wines', subtitle: 'Red, White, Rosé, Sparkling & More' },
          whisky: { title: 'Whisky', subtitle: 'Scotch, Single Malt, Bourbon & More' },
          craftBeer: { title: 'Craft Beer', subtitle: 'Local & Imported Craft Beer' },
          coffee: { title: 'Coffee', subtitle: 'Ground Coffee, Beans & More' },
          snacks: { title: 'Snacks', subtitle: 'Chips, Nuts, Cookies & More' },
          drinks: { title: 'Drinks', subtitle: 'Soft Drinks, Juice, Energy Drinks' },
          souvenirs: {
            title: 'Souvenirs',
            subtitle: 'Vietnam Gifts, Handicrafts & Local Products',
          },
          travelEssentials: {
            title: 'Travel Essentials',
            subtitle: 'Sun Care, Personal Care, Daily Essentials',
          },
        },
      },
      featuredCollections: {
        heading: 'Featured Collections',
        shopNow: 'Shop Now',
        collections: {
          wine: { title: 'Wine', description: 'Curated selection of premium imported wines' },
          whisky: { title: 'Whisky', description: 'World-famous labels for true connoisseurs' },
          gourmetSnacks: {
            title: 'Gourmet Snacks',
            description: 'Delicious treats from around the world',
          },
          coffee: { title: 'Coffee', description: 'Quality coffee to start your day right' },
        },
      },
      giftBanner: {
        title: 'Looking for the Perfect Gift?',
        description:
          'We offer beautiful gift wrapping and premium gift sets for any occasion.',
        cta: 'Explore Gift Sets',
      },
      whyChooseUs: {
        heading: 'Why Choose An An Mart?',
        features: {
          wideSelection: { title: 'Wide Selection', subtitle: 'Over 1000+ quality products' },
          bestQuality: {
            title: 'Best Quality',
            subtitle: 'Carefully selected imported items',
          },
          fastDelivery: {
            title: 'Fast Delivery',
            subtitle: 'Quick delivery to your hotel or villa',
          },
          support: { title: 'Support 24/7', subtitle: 'Friendly support customer service' },
          giftWrapping: {
            title: 'Gift Wrapping',
            subtitle: 'Beautiful wrapping for any occasion',
          },
          securePayment: {
            title: 'Secure Payment',
            subtitle: 'Cash, Card & Online payment available',
          },
        },
      },
      storeGallery: {
        visitOurStore: 'Visit Our Store',
        openDaily: 'Open Daily',
        viewLargerMap: 'View larger map',
        missingMapToken: 'Missing NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN — unable to display the map.',
      },
    },
    shopPage: {
      title: 'Shop All Products',
      description:
        'Browse our full range of imported wines, spirits, and everyday essentials.',
      searchPlaceholder: 'Search products...',
      filtersAll: 'All Products',
      resultsSuffix: 'products',
      addToCart: 'Add to Cart',
      empty: 'No products match your search.',
      sortBy: {
        featured: 'Featured',
        nameAsc: 'Name: A-Z',
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
      },
      perPageSuffix: '/ page',
      pagination: {
        previous: 'Previous page',
        next: 'Next page',
      },
      relatedProducts: 'You May Also Like',
    },
  },
  vi: {
    header: {
      nav: {
        home: 'Trang Chủ',
        shop: 'Cửa Hàng',
        aboutUs: 'Về Chúng Tôi',
        delivery: 'Giao Hàng',
        blog: 'Blog',
        contact: 'Liên Hệ',
      },
      signIn: 'Đăng Nhập',
      menu: {
        open: 'Mở menu',
        close: 'Đóng menu',
      },
    },
    footer: {
      tagline:
        'Cửa hàng địa phương đáng tin cậy tại Hội An chuyên rượu vang, rượu mạnh cao cấp, tạp hóa, đồ ăn vặt và nhu yếu phẩm hàng ngày.',
      contactTitle: 'Liên Hệ',
      quickLinksTitle: 'Liên Kết Nhanh',
      popularCategoriesTitle: 'Danh Mục Phổ Biến',
      openDaily: 'Mở cửa hằng ngày 8:00 - 0:30',
      quickLinks: {
        shop: 'Cửa Hàng',
        aboutUs: 'Về Chúng Tôi',
        delivery: 'Giao Hàng',
        blog: 'Blog',
        contact: 'Liên Hệ',
        terms: 'Điều Khoản & Điều Kiện',
      },
      popularCategories: {
        wine: 'Rượu Vang',
        whisky: 'Rượu Whisky',
        craftBeer: 'Bia Thủ Công',
        snacks: 'Đồ Ăn Vặt',
        coffee: 'Cà Phê',
        souvenirs: 'Quà Lưu Niệm',
        travelEssentials: 'Đồ Dùng Du Lịch',
      },
      copyright: 'An An Mart - Cửa Hàng Rượu Hội An. Bảo Lưu Mọi Quyền.',
    },
    homepage: {
      hero: {
        eyebrow: 'Điểm Đến Cao Cấp Về',
        titleHighlight: 'Tạp Hóa & Rượu Vang',
        subtitle: 'Tại Hội An',
        description:
          'Khám phá rượu vang nhập khẩu, rượu mạnh cao cấp, đồ ăn vặt cao cấp, cà phê, quà lưu niệm và các nhu yếu phẩm hàng ngày — tất cả trong một cửa hàng địa phương đáng tin cậy.',
        shopNow: 'Mua Ngay',
        visitStore: 'Ghé Thăm Cửa Hàng',
        trustBadges: {
          fastDelivery: { title: 'Giao Hàng Nhanh', subtitle: 'Trong Khu Vực Hội An' },
          importedProducts: { title: 'Hàng Nhập Khẩu', subtitle: '100% Chính Hãng' },
          support: { title: 'Hỗ Trợ 24/7', subtitle: 'Hỗ Trợ Mọi Lúc' },
        },
      },
      categoryGrid: {
        heading: 'Mọi Thứ Bạn Cần Chỉ Trong Một Nơi',
        categories: {
          premiumWines: {
            title: 'Rượu Vang Cao Cấp',
            subtitle: 'Đỏ, Trắng, Hồng, Sủi Bọt & Hơn Thế',
          },
          whisky: { title: 'Rượu Whisky', subtitle: 'Scotch, Single Malt, Bourbon & Hơn Thế' },
          craftBeer: { title: 'Bia Thủ Công', subtitle: 'Bia Thủ Công Nội Địa & Nhập Khẩu' },
          coffee: { title: 'Cà Phê', subtitle: 'Cà Phê Xay, Hạt Cà Phê & Hơn Thế' },
          snacks: { title: 'Đồ Ăn Vặt', subtitle: 'Snack, Hạt, Bánh Quy & Hơn Thế' },
          drinks: { title: 'Đồ Uống', subtitle: 'Nước Ngọt, Nước Ép, Nước Tăng Lực' },
          souvenirs: {
            title: 'Quà Lưu Niệm',
            subtitle: 'Quà Tặng Việt Nam, Đồ Thủ Công & Sản Phẩm Địa Phương',
          },
          travelEssentials: {
            title: 'Đồ Dùng Du Lịch',
            subtitle: 'Chống Nắng, Chăm Sóc Cá Nhân, Nhu Yếu Phẩm',
          },
        },
      },
      featuredCollections: {
        heading: 'Bộ Sưu Tập Nổi Bật',
        shopNow: 'Mua Ngay',
        collections: {
          wine: {
            title: 'Rượu Vang',
            description: 'Bộ sưu tập rượu vang nhập khẩu cao cấp được tuyển chọn',
          },
          whisky: {
            title: 'Rượu Whisky',
            description: 'Thương hiệu nổi tiếng thế giới dành cho người sành rượu',
          },
          gourmetSnacks: {
            title: 'Đồ Ăn Vặt Cao Cấp',
            description: 'Món ngon từ khắp nơi trên thế giới',
          },
          coffee: { title: 'Cà Phê', description: 'Cà phê chất lượng để khởi đầu ngày mới' },
        },
      },
      giftBanner: {
        title: 'Đang Tìm Món Quà Hoàn Hảo?',
        description:
          'Chúng tôi cung cấp dịch vụ gói quà đẹp mắt và bộ quà tặng cao cấp cho mọi dịp.',
        cta: 'Khám Phá Bộ Quà Tặng',
      },
      whyChooseUs: {
        heading: 'Vì Sao Chọn An An Mart?',
        features: {
          wideSelection: { title: 'Đa Dạng Sản Phẩm', subtitle: 'Hơn 1000+ sản phẩm chất lượng' },
          bestQuality: {
            title: 'Chất Lượng Tốt Nhất',
            subtitle: 'Hàng nhập khẩu được tuyển chọn kỹ càng',
          },
          fastDelivery: {
            title: 'Giao Hàng Nhanh',
            subtitle: 'Giao hàng nhanh đến khách sạn hoặc villa của bạn',
          },
          support: { title: 'Hỗ Trợ 24/7', subtitle: 'Dịch vụ chăm sóc khách hàng thân thiện' },
          giftWrapping: { title: 'Gói Quà', subtitle: 'Gói quà đẹp mắt cho mọi dịp' },
          securePayment: {
            title: 'Thanh Toán An Toàn',
            subtitle: 'Hỗ trợ tiền mặt, thẻ & thanh toán trực tuyến',
          },
        },
      },
      storeGallery: {
        visitOurStore: 'Ghé Thăm Cửa Hàng',
        openDaily: 'Mở Cửa Hằng Ngày',
        viewLargerMap: 'Xem bản đồ lớn hơn',
        missingMapToken: 'Thiếu NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN — không thể hiển thị bản đồ.',
      },
    },
    shopPage: {
      title: 'Tất Cả Sản Phẩm',
      description: 'Khám phá toàn bộ rượu vang, rượu mạnh nhập khẩu và nhu yếu phẩm hàng ngày.',
      searchPlaceholder: 'Tìm kiếm sản phẩm...',
      filtersAll: 'Tất Cả Sản Phẩm',
      resultsSuffix: 'sản phẩm',
      addToCart: 'Thêm Vào Giỏ',
      empty: 'Không tìm thấy sản phẩm phù hợp.',
      sortBy: {
        featured: 'Nổi Bật',
        nameAsc: 'Tên: A-Z',
        priceAsc: 'Giá: Thấp Đến Cao',
        priceDesc: 'Giá: Cao Đến Thấp',
      },
      perPageSuffix: '/ trang',
      pagination: {
        previous: 'Trang trước',
        next: 'Trang sau',
      },
      relatedProducts: 'Có Thể Bạn Cũng Thích',
    },
  },
};
