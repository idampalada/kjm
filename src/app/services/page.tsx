"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  // Array layanan dengan gambar
  const services = [
    {
      id: 1,
      image: "/images/banner1.jpg",
    },
    {
      id: 2,
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      image: "/images/banner3.jpg",
    },
    {
      id: 4,
      image: "/images/banner4.jpg",
    },
    {
      id: 5,
      image: "/images/banner5.jpg",
    },
    {
      id: 6,
      image: "/images/banner6.jpg",
    },
    {
      id: 7,
      image: "/images/banner7.jpg",
    },
    {
      id: 8,
      image: "/images/banner8.jpg",
    },
    {
      id: 9,
      image: "/images/banner9.jpg",
    },
    {
      id: 10,
      image: "/images/banner10.jpg",
    },
    {
      id: 11,
      image: "/images/banner11.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e162e]">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white relative"
        style={{
          backgroundImage: 'url("/images/bg1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0e162e] opacity-90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("services.title")}
            </h1>
            <p className="text-xl text-gray-300">{t("services.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={t(`services.${service.id}.title`)}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {t(`services.${service.id}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`services.${service.id}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7e072e] to-[#FF0000]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("contact.subtitle")}
          </h2>
          <a
            href="/#contact"
            className="inline-block bg-white text-[#7e072e] font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("contact.title")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
