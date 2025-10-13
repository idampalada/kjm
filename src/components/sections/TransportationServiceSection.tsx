"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TransportationServiceSection() {
  // Menggunakan Language Context
  const { language } = useLanguage();

  // Terjemahan langsung tanpa menggunakan fungsi t()
  const translations = {
    id: {
      title: {
        first: "Layanan",
        second: "Logistik",
        third: "Kami",
      },
      description:
        "Menghubungkan Bisnis Anda dengan Solusi Transportasi Terdepan",
      viadarat: {
        title: "Via Darat",
        description: "Pengiriman cepat antar kota dan pulau",
        route: "Sumatera, Jawa & Bali",
      },
      vialaut: {
        title: "Via Laut",
        description: "Solusi efisien untuk muatan besar",
        route: "Domestik",
      },
      viaudara: {
        title: "Via Udara",
        description: "Prioritas cepat untuk kiriman mendesak",
        route: "Domestik",
      },
      learnMore: "Pelajari Lebih Lanjut",
    },
    en: {
      title: {
        first: "Our",
        second: "Logistics",
        third: "Services",
      },
      description:
        "Connecting Your Business with Advanced Transportation Solutions",
      viadarat: {
        title: "Land Route",
        description: "Fast delivery between cities and islands",
        route: "Sumatra, Java & Bali",
      },
      vialaut: {
        title: "Sea Route",
        description: "Efficient solutions for large cargo",
        route: "Domestic",
      },
      viaudara: {
        title: "Air Route",
        description: "Priority service for urgent shipments",
        route: "Domestic",
      },
      learnMore: "Learn More",
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  return (
    <section
      className="py-16 text-white relative"
      style={{
        backgroundColor: "#0e162e",
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      {/* Background pattern subtle */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
        linear-gradient(45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%),
        linear-gradient(-45deg, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%)
      `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontWeight: 700 }}
          >
            <span className="text-white">{text.title.first}</span>{" "}
            <span className="text-[#FF0000]">{text.title.second}</span>{" "}
            <span className="text-white">{text.title.third}</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontWeight: 400 }}
          >
            {text.description}
          </p>
        </div>

        {/* Service Cards - Layout Horizontal dengan Background Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Via Darat Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-end overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/viadarat.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10 pb-4">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {text.viadarat.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {text.viadarat.description}
              </p>
              {/* Route Info Box */}
              <div className="bg-slate-600/50 backdrop-blur-md px-6 py-3 rounded-lg border border-slate-400/60">
                <p className="text-white text-sm font-medium">
                  {text.viadarat.route}
                </p>
              </div>
            </div>
          </div>

          {/* Via Laut Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-end overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/vialaut.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10 pb-4">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {text.vialaut.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {text.vialaut.description}
              </p>
              {/* Route Info Box */}
              <div className="bg-slate-600/50 backdrop-blur-md px-6 py-3 rounded-lg border border-slate-400/60">
                <p className="text-white text-sm font-medium">
                  {text.vialaut.route}
                </p>
              </div>
            </div>
          </div>

          {/* Via Udara Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-end overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/viaudara.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10 pb-4">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {text.viaudara.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {text.viaudara.description}
              </p>
              {/* Route Info Box */}
              <div className="bg-slate-600/50 backdrop-blur-md px-6 py-3 rounded-lg border border-slate-400/60">
                <p className="text-white text-sm font-medium">
                  {text.viaudara.route}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-block bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold px-8 py-3 rounded-full transition"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontWeight: 700,
            }}
          >
            {text.learnMore}
          </a>
        </div>
      </div>
    </section>
  );
}
