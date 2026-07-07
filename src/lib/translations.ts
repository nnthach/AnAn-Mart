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
    };
  };
  locationMap: {
    viewLargerMap: string;
    missingMapToken: string;
  };
  aboutPage: {
    title: string;
    tagline: string;
    storyHeading: string;
    storyParagraph: string;
    stats: {
      years: string;
      products: string;
      customers: string;
    };
    ctaTitle: string;
    ctaButton: string;
  };
  contactPage: {
    title: string;
    tagline: string;
    infoHeading: string;
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
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
  admin: {
    brand: {
      name: string;
      tagline: string;
    };
    sidebar: {
      groups: {
        management: string;
        storeManagement: string;
        products: string;
      };
      nav: {
        dashboard: string;
        staffs: string;
        orders: string;
        reviews: string;
        customers: string;
        stores: string;
        storeInventories: string;
        products: string;
        categories: string;
        ingredients: string;
      };
      user: {
        profile: string;
        account: string;
        signOut: string;
      };
    };
    header: {
      notifications: string;
      account: string;
    };
    headerBreadcrumb: {
      dashboard: string;
      staffs: string;
      orders: string;
      reviews: string;
      customers: string;
      stores: string;
      storeInventories: string;
      products: string;
      categories: string;
      ingredients: string;
      settings: string;
    };
    headerDropdown: {
      profile: string;
      signOut: string;
    };
    dashboard: {
      title: string;
      welcome: string;
      stats: {
        revenue: string;
        orders: string;
        customers: string;
        products: string;
      };
    };
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
      },
    },
    locationMap: {
      viewLargerMap: 'View larger map',
      missingMapToken: 'Missing NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN — unable to display the map.',
    },
    aboutPage: {
      title: 'About An An Mart',
      tagline: 'A trusted local shop in the heart of Hoi An since day one.',
      storyHeading: 'Our Story',
      storyParagraph:
        "An An Mart started as a small family shop on Lý Thường Kiệt street, serving the Hoi An community with quality wines, spirits, and everyday essentials. Today we're proud to welcome both locals and travelers looking for a curated selection and honest service.",
      stats: {
        years: 'Years Serving Hoi An',
        products: 'Products In Store',
        customers: 'Happy Customers',
      },
      ctaTitle: 'Come Say Hello',
      ctaButton: 'Get Directions',
    },
    contactPage: {
      title: 'Contact Us',
      tagline: "Questions, orders, or just want to say hi — we'd love to hear from you.",
      infoHeading: 'Get In Touch',
      formHeading: 'Send Us a Message',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can we help?',
      submitButton: 'Send Message',
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
    admin: {
      brand: {
        name: 'An An Mart',
        tagline: 'Admin CMS',
      },
      sidebar: {
        groups: {
          management: 'Management',
          storeManagement: 'Store Management',
          products: 'Products',
        },
        nav: {
          dashboard: 'Dashboard',
          staffs: 'Staff',
          orders: 'Orders',
          reviews: 'Reviews',
          customers: 'Customers',
          stores: 'Stores',
          storeInventories: 'Store Inventory',
          products: 'Products',
          categories: 'Categories',
          ingredients: 'Ingredients',
        },
        user: {
          profile: 'Profile',
          account: 'Account',
          signOut: 'Sign Out',
        },
      },
      header: {
        notifications: 'Notifications',
        account: 'Account',
      },
      headerBreadcrumb: {
        dashboard: 'Dashboard',
        staffs: 'Staff',
        orders: 'Orders',
        reviews: 'Reviews',
        customers: 'Customers',
        stores: 'Stores',
        storeInventories: 'Store Inventory',
        products: 'Products',
        categories: 'Categories',
        ingredients: 'Ingredients',
        settings: 'Settings',
      },
      headerDropdown: {
        profile: 'Profile',
        signOut: 'Sign Out',
      },
      dashboard: {
        title: 'Dashboard',
        welcome: "Here's what's happening with your store today.",
        stats: {
          revenue: 'Total Revenue',
          orders: 'Orders',
          customers: 'Customers',
          products: 'Products',
        },
      },
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
      },
    },
    locationMap: {
      viewLargerMap: 'Xem bản đồ lớn hơn',
      missingMapToken: 'Thiếu NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN — không thể hiển thị bản đồ.',
    },
    aboutPage: {
      title: 'Về An An Mart',
      tagline: 'Cửa hàng địa phương đáng tin cậy giữa lòng Hội An.',
      storyHeading: 'Câu Chuyện Của Chúng Tôi',
      storyParagraph:
        'An An Mart bắt đầu là một cửa hàng gia đình nhỏ trên đường Lý Thường Kiệt, phục vụ cộng đồng Hội An với rượu vang, rượu mạnh và các nhu yếu phẩm chất lượng. Ngày nay, chúng tôi tự hào chào đón cả người dân địa phương và du khách tìm kiếm sản phẩm được tuyển chọn kỹ càng cùng dịch vụ tận tâm.',
      stats: {
        years: 'Năm Phục Vụ Hội An',
        products: 'Sản Phẩm Trong Cửa Hàng',
        customers: 'Khách Hàng Hài Lòng',
      },
      ctaTitle: 'Ghé Thăm Chúng Tôi',
      ctaButton: 'Chỉ Đường',
    },
    contactPage: {
      title: 'Liên Hệ',
      tagline: 'Có câu hỏi, muốn đặt hàng, hay chỉ đơn giản là muốn chào hỏi — chúng tôi luôn sẵn lòng lắng nghe.',
      infoHeading: 'Thông Tin Liên Hệ',
      formHeading: 'Gửi Tin Nhắn Cho Chúng Tôi',
      nameLabel: 'Họ Tên',
      namePlaceholder: 'Họ tên của bạn',
      emailLabel: 'Email',
      emailPlaceholder: 'ban@example.com',
      messageLabel: 'Lời Nhắn',
      messagePlaceholder: 'Chúng tôi có thể giúp gì cho bạn?',
      submitButton: 'Gửi Tin Nhắn',
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
    admin: {
      brand: {
        name: 'An An Mart',
        tagline: 'Quản Trị CMS',
      },
      sidebar: {
        groups: {
          management: 'Quản Lý',
          storeManagement: 'Quản Lý Cửa Hàng',
          products: 'Sản Phẩm',
        },
        nav: {
          dashboard: 'Tổng Quan',
          staffs: 'Nhân Viên',
          orders: 'Đơn Hàng',
          reviews: 'Đánh Giá',
          customers: 'Khách Hàng',
          stores: 'Cửa Hàng',
          storeInventories: 'Kho Hàng',
          products: 'Sản Phẩm',
          categories: 'Danh Mục',
          ingredients: 'Nguyên Liệu',
        },
        user: {
          profile: 'Hồ Sơ',
          account: 'Tài Khoản',
          signOut: 'Đăng Xuất',
        },
      },
      header: {
        notifications: 'Thông Báo',
        account: 'Tài Khoản',
      },
      headerBreadcrumb: {
        dashboard: 'Tổng Quan',
        staffs: 'Nhân Viên',
        orders: 'Đơn Hàng',
        reviews: 'Đánh Giá',
        customers: 'Khách Hàng',
        stores: 'Cửa Hàng',
        storeInventories: 'Kho Hàng',
        products: 'Sản Phẩm',
        categories: 'Danh Mục',
        ingredients: 'Nguyên Liệu',
        settings: 'Cài Đặt',
      },
      headerDropdown: {
        profile: 'Hồ Sơ',
        signOut: 'Đăng Xuất',
      },
      dashboard: {
        title: 'Tổng Quan',
        welcome: 'Đây là tình hình cửa hàng của bạn hôm nay.',
        stats: {
          revenue: 'Tổng Doanh Thu',
          orders: 'Đơn Hàng',
          customers: 'Khách Hàng',
          products: 'Sản Phẩm',
        },
      },
    },
  },
};
