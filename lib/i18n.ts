export type Locale = 'en' | 'fr' | 'zh';

export const locales: Locale[] = ['en', 'fr', 'zh'];

export const defaultLocale: Locale = 'zh';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
};

export type Translations = {
  nav: {
    buy: string;
    rent: string;
    about: string;
    contact: string;
    locale: string;
  };
  hero: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    buyButton: string;
    rentButton: string;
  };
  search: {
    brand: string;
    model: string;
    priceRange: string;
    year: string;
    fuelType: string;
    location: string;
    search: string;
    filters: string;
  };
  common: {
    viewDetails: string;
    bookNow: string;
    contactSeller: string;
    perDay: string;
    perMonth: string;
    available: string;
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      buy: 'Buy',
      rent: 'Rent',
      about: 'About',
      contact: 'Contact',
      locale: 'Language',
    },
    hero: {
      title: 'Find Your Perfect Vehicle',
      subtitle: 'Buy or rent premium vehicles with confidence',
      searchPlaceholder: 'Search by brand, model, or location...',
      buyButton: 'Buy a Car',
      rentButton: 'Rent a Car',
    },
    search: {
      brand: 'Brand',
      model: 'Model',
      priceRange: 'Price Range',
      year: 'Year',
      fuelType: 'Fuel Type',
      location: 'Location',
      search: 'Search',
      filters: 'Filters',
    },
    common: {
      viewDetails: 'View Details',
      bookNow: 'Book Now',
      contactSeller: 'Contact Seller',
      perDay: '/day',
      perMonth: '/month',
      available: 'Available',
    },
  },
  fr: {
    nav: {
      buy: 'Acheter',
      rent: 'Louer',
      about: 'À Propos',
      contact: 'Contact',
      locale: 'Langue',
    },
    hero: {
      title: 'Trouvez Votre Véhicule Parfait',
      subtitle: 'Achetez, louez ou vendez des véhicules premium en toute confiance',
      searchPlaceholder: 'Rechercher par marque, modèle ou lieu...',
      buyButton: 'Acheter une Voiture',
      rentButton: 'Louer une Voiture',
    },
    search: {
      brand: 'Marque',
      model: 'Modèle',
      priceRange: 'Fourchette de Prix',
      year: 'Année',
      fuelType: 'Type de Carburant',
      location: 'Lieu',
      search: 'Rechercher',
      filters: 'Filtres',
    },
    common: {
      viewDetails: 'Voir Détails',
      bookNow: 'Réserver',
      contactSeller: 'Contacter le Vendeur',
      perDay: '/jour',
      perMonth: '/mois',
      available: 'Disponible',
    },
  },
  zh: {
    nav: {
      buy: '购买',
      rent: '租赁',
      about: '关于',
      contact: '联系',
      locale: '语言',
    },
    hero: {
      title: '找到您的完美车辆',
      subtitle: '放心购买、租赁或出售优质车辆',
      searchPlaceholder: '按品牌、型号或地点搜索...',
      buyButton: '购买汽车',
      rentButton: '租赁汽车',
    },
    search: {
      brand: '品牌',
      model: '型号',
      priceRange: '价格范围',
      year: '年份',
      fuelType: '燃料类型',
      location: '地点',
      search: '搜索',
      filters: '筛选',
    },
    common: {
      viewDetails: '查看详情',
      bookNow: '立即预订',
      contactSeller: '联系卖家',
      perDay: '/天',
      perMonth: '/月',
      available: '可用',
    },
  },
};
