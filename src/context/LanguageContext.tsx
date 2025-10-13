"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define supported languages
export type Language = "id" | "en";

// Define language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "id", // Default language is Indonesian
  setLanguage: () => {},
  t: () => "",
});

// Translations dictionary
const translations: Record<Language, Record<string, string>> = {
  id: {
    // Header Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.aboutUs": "Tentang Kami",
    "nav.gallery": "Galeri",
    "nav.news": "Berita",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.title.first": "MENJADI BISNIS",
    "hero.title.second": "DAN RELASI YANG BAIK",
    "hero.description":
      "Kami tidak hanya mengirim barang — kami mengantarkan kepercayaan dan membangun hubungan jangka panjang.",

    // Partner Section
    "partner.title.first": "Mitra",
    "partner.title.second": "Kami",
    "partner.description":
      "Membangun hubungan yang kuat dengan mitra bisnis untuk menyediakan layanan logistik terbaik",
    "partner.since": "Sejak",
    "partner.mainSector": "Sektor Utama",

    // Transportation Service Section
    "transportation.title.first": "Layanan",
    "transportation.title.second": "Logistik",
    "transportation.title.third": "Kami",
    "transportation.description":
      "Menghubungkan Bisnis Anda dengan Solusi Transportasi Terdepan",
    "transportation.landRoute": "Via Darat",
    "transportation.landRouteMain": "Rute Utama: Sumatera, Jawa & Bali",
    "transportation.seaRoute": "Via Laut & Udara",
    "transportation.seaRouteDomestic": "Rute Laut: Domestik",
    "transportation.airRouteDomestic": "Rute Udara: Domestik",
    "transportation.learnMore": "Pelajari Lebih Lanjut",

    // About Section
    "about.title.first": "Tentang",
    "about.title.second": "Kami",
    "about.description":
      "PT Khazmans Jaya Mandiri adalah mitra transportasi dan logistik terpercaya yang telah melayani berbagai industri di Indonesia.",
    "about.readMore": "Baca Selengkapnya",

    // Contact Section
    "contact.title.first": "Hubungi",
    "contact.title.second": "Kami",
    "contact.description": "Dapatkan penawaran untuk kebutuhan logistik Anda",
    "contact.button": "Hubungi Kami",
  },
  en: {
    // Header Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.aboutUs": "About Us",
    "nav.gallery": "Gallery",
    "nav.news": "News",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title.first": "BE A GOOD BUSINESS",
    "hero.title.second": "AND RELATIONSHIP",
    "hero.description":
      "We don't just ship goods — we deliver trust and build long-term relationships.",

    // Partner Section
    "partner.title.first": "Our",
    "partner.title.second": "Partners",
    "partner.description":
      "Building strong relationships with business partners to provide the best logistics services",
    "partner.since": "Since",
    "partner.mainSector": "Main Sector",

    // Transportation Service Section
    "transportation.title.first": "Our",
    "transportation.title.second": "Logistics",
    "transportation.title.third": "Services",
    "transportation.description":
      "Connecting Your Business with Advanced Transportation Solutions",
    "transportation.landRoute": "Land Route",
    "transportation.landRouteMain": "Main Routes: Sumatra, Java & Bali",
    "transportation.seaRoute": "Sea & Air Route",
    "transportation.seaRouteDomestic": "Sea Route: Domestic",
    "transportation.airRouteDomestic": "Air Route: Domestic",
    "transportation.learnMore": "Learn More",

    // About Section
    "about.title.first": "About",
    "about.title.second": "Us",
    "about.description":
      "PT Khazmans Jaya Mandiri is a trusted transportation and logistics partner that has served various industries in Indonesia.",
    "about.readMore": "Read More",

    // Contact Section
    "contact.title.first": "Contact",
    "contact.title.second": "Us",
    "contact.description": "Get a quote for your logistics needs",
    "contact.button": "Contact Us",
  },
};

// Language Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Try to get language from localStorage if available, otherwise default to Indonesian
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      return savedLanguage && ["id", "en"].includes(savedLanguage)
        ? savedLanguage
        : "id";
    }
    return "id";
  });

  // Update localStorage when language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    // Jika terjemahan tidak ditemukan, kembalikan key atau teks default
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
