"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnerSection() {
  const { language } = useLanguage();

  // Terjemahan langsung
  const translations = {
    id: {
      title: "Mitra Kami",
      since: "Sejak",
      mainSector: "Sektor Utama",
      collaborationField: "Bidang Kerjasama:",
    },
    en: {
      title: "Our Partners",
      since: "Since",
      mainSector: "Main Sector",
      collaborationField: "Collaboration Field:",
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  // Data partner dengan informasi lengkap
  const partners = [
    {
      name: "PT. KOBEXINDO TRACTORS",
      sector: "Alat-Alat Berat, Forklift",
      since: "2006",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M22 8h-5l-2 3" />
          <path d="M17 11V6" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M10 18h4" />
        </svg>
      ),
    },
    {
      name: "PT. BINDER INDONESIA",
      sector: "Engineering",
      since: "2006",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="7" />
          <path d="M12 9v3l1.5 1.5" />
          <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
        </svg>
      ),
    },
    {
      name: "PT. HUTAMA KARYA",
      sector: "Civil Contractor",
      since: "2006",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="8" width="20" height="14" rx="2" />
          <path d="M6 8v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <path d="M6 15h12" />
        </svg>
      ),
    },
    {
      name: "PT. ULE BALANG",
      sector: "Contractor",
      since: "2006",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M7 7h.01" />
          <path d="M17 7h.01" />
          <path d="M22 19h-6" />
          <path d="M2 19h6" />
          <path d="M12 3v18" />
          <path d="M12 21v-4" />
        </svg>
      ),
    },
    {
      name: "PT. MULTI TERMINAL IND",
      sector: "Freight Forwarding",
      since: "2007",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </svg>
      ),
    },
    {
      name: "PT. HUWACO TUNGGAL",
      sector: "Trading, Engineering",
      since: "2008",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
          <path d="M1 7h3" />
          <path d="M1 11h9" />
        </svg>
      ),
    },
    {
      name: "PT. EKA KARYA",
      sector: "Engineering, Contractor",
      since: "2009",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      name: "PT. KRYOGENIA UTAMA",
      sector: "Gas & Liquid",
      since: "2009",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.5 4.5A3.5 3.5 0 0 0 11 8v10c0 1.55.96 2.93 2.4 3.48A3.5 3.5 0 0 0 18 18v-1.5" />
          <path d="M4 19.5h4m0 0v-8h4v8m-4 0h4" />
        </svg>
      ),
    },
    {
      name: "PT. INFARFORCE EQUIPMENT",
      sector: "Sparepart Alat-Alat Berat",
      since: "2009",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      name: "PT. SUCACO Tbk",
      sector: "Kabel PLN",
      since: "2009",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 16.5l3 2.5" />
          <path d="M18 11l.8-10.2c.1-1.3-1.2-2.2-2.3-1.6L5 6" />
          <path d="M6 8v9a3 5 0 0 0 6 0v-2" />
          <path d="M18 17v2a3 4 0 0 1-6 0v-2" />
        </svg>
      ),
    },
    {
      name: "PT. AJE INDONESIA",
      sector: "Minuman",
      since: "2010",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 2h8" />
          <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 5.211V2" />
          <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
        </svg>
      ),
    },
    {
      name: "PT. BRANTAS",
      sector: "Baja / Infrastruktur",
      since: "2011",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <path d="M3 9h18" />
          <path d="M9 3v18" />
        </svg>
      ),
    },
    {
      name: "PT. SATYA MITRA",
      sector: "Industri Baja",
      since: "2011",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="9" width="18" height="12" rx="1" />
          <path d="M7 9V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
          <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      ),
    },
    {
      name: "PT. SUPREME CABEL",
      sector: "Cabel",
      since: "2011",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 12a4 4 0 0 1 0 8H6" />
          <path d="M10 6a4 4 0 0 1 0 8h8" />
          <line x1="6" y1="6" x2="6" y2="6.01" />
          <line x1="18" y1="18" x2="18" y2="18.01" />
        </svg>
      ),
    },
    {
      name: "PT. UNICHARM INDONESIA",
      sector: "Pampers / Logistik",
      since: "2011",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      ),
    },
    {
      name: "PT. BERDIRI MATAHARI LOGISTIK",
      sector: "Logistik",
      since: "2011 s/d Sekarang",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  // Menghitung jumlah total slide
  const partnersPerSlide = 4;

  // State untuk carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fungsi navigasi slide
  const nextSlide = () => {
    const maxSlideIndex = Math.ceil(partners.length / partnersPerSlide) - 1;
    setCurrentSlide((prevSlide) =>
      prevSlide >= maxSlideIndex ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    const maxSlideIndex = Math.ceil(partners.length / partnersPerSlide) - 1;
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? maxSlideIndex : prevSlide - 1
    );
  };

  // Pergeseran slide otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      const maxSlideIndex = Math.ceil(partners.length / partnersPerSlide) - 1;
      setCurrentSlide((prevSlide) =>
        prevSlide >= maxSlideIndex ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mendapatkan partner untuk slide saat ini
  const getCurrentSlidePartners = () => {
    const startIndex = currentSlide * partnersPerSlide;
    // Hanya mengambil partner yang tersedia (tidak melebihi jumlah total)
    return partners.slice(
      startIndex,
      Math.min(startIndex + partnersPerSlide, partners.length)
    );
  };

  return (
    <section
      className="py-16 relative"
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/bgpartnerssection.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay untuk memastikan teks terlihat jelas */}
      <div className="absolute inset-0 bg-[#0e162e] opacity-80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2
            className="text-3xl font-bold text-center text-white mb-2"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontWeight: 700,
            }}
          >
            {text.title}
          </h2>
          <div className="h-1 w-60 bg-[#E71E25] rounded"></div>
        </div>

        {/* Partner Carousel */}
        <div className="relative">
          {/* Slides Container */}
          <div className="overflow-hidden" ref={sliderRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {getCurrentSlidePartners().map((partner, index) => (
                <div key={index} className="h-full">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] group">
                    <div className="relative p-6">
                      {/* Accent color bar on top */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7e072e] to-blue-600"></div>

                      <h3
                        className="text-xl font-bold text-gray-800 mb-6 text-center"
                        style={{
                          fontFamily:
                            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                          fontWeight: 700,
                        }}
                      >
                        {partner.name}
                      </h3>

                      <div className="flex items-center justify-center mb-8 bg-gray-50 p-4 rounded-xl group-hover:bg-gray-100 transition-colors duration-300">
                        <div className="flex justify-center items-center">
                          {partner.icon}
                        </div>
                      </div>

                      <div className="flex justify-center items-center mb-6 border-t border-gray-100 pt-5">
                        <div className="text-center px-4">
                          <p
                            className="text-gray-600 text-sm mb-1"
                            style={{
                              fontFamily:
                                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            }}
                          >
                            {text.since}
                          </p>
                          <p
                            className="font-normal text-gray-800"
                            style={{
                              fontFamily:
                                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                              fontWeight: 400,
                            }}
                          >
                            {partner.since}
                          </p>
                        </div>

                        <div className="h-12 w-px bg-gray-200 mx-4"></div>

                        <div className="text-center px-4">
                          <p
                            className="text-gray-600 text-sm mb-1"
                            style={{
                              fontFamily:
                                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            }}
                          >
                            {text.mainSector}
                          </p>
                          <p
                            className="font-normal text-gray-800"
                            style={{
                              fontFamily:
                                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                              fontWeight: 400,
                            }}
                          >
                            {partner.sector.split(",")[0]}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-5 bg-gray-50 -mx-6 px-6 pb-4 rounded-b-2xl">
                        <p
                          className="text-gray-600 text-sm mb-1"
                          style={{
                            fontFamily:
                              'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                          }}
                        >
                          {text.collaborationField}
                        </p>
                        <p
                          className="font-normal text-gray-800"
                          style={{
                            fontFamily:
                              'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            fontWeight: 400,
                          }}
                        >
                          {partner.sector}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {/* Hanya tampilkan dots untuk slide yang berisi data */}
          {Array.from({
            length: Math.ceil(partners.length / partnersPerSlide),
          }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-[#7e072e]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Pergi ke slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
