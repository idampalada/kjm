"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="pt-16 text-white relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/bg1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      {/* Overlay untuk memastikan teks terlihat jelas */}
      <div className="absolute inset-0 bg-[#0e162e] opacity-80"></div>

      <div className="container mx-auto px-4 py-28 md:py-40 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="mb-10" style={{ fontWeight: 700 }}>
            <span
              className="block text-white text-5xl mb-2"
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 700,
                fontSize: "72px",
                lineHeight: "72px",
              }}
            >
              {t("hero.title.first")}
            </span>

            <span
              className="block text-[#FF0000] text-7xl font-semibold"
              style={{
                fontFamily:
                  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                fontWeight: 700,
              }}
            >
              {t("hero.title.second")}
            </span>
          </h1>

          <p
            className="text-lg mb-10 text-white max-w-lg mx-auto"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontWeight: 400,
            }}
          >
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#7e072e] hover:bg-[#6a0625] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105"
            >
              {t("contact.button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
