"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { language } = useLanguage();

  // Terjemahan langsung
  const translations = {
    id: {
      pageTitle: "Layanan Kami",
      pageDescription:
        "PT Khazmans Jaya Mandiri menyediakan layanan transportasi dan logistik komprehensif untuk memenuhi semua kebutuhan pengiriman Anda di seluruh Indonesia.",
      portfolioTitle: "Portofolio Layanan Kami",
      contactTitle: "Butuh Solusi Transportasi Khusus?",
      contactDescription:
        "Hubungi kami hari ini untuk mendiskusikan bagaimana kami dapat membantu kebutuhan logistik spesifik Anda.",
      contactButton: "Hubungi Kami",
    },
    en: {
      pageTitle: "Our Services",
      pageDescription:
        "PT Khazmans Jaya Mandiri provides comprehensive transportation and logistics services to meet all your shipping needs across Indonesia.",
      portfolioTitle: "Our Service Portfolio",
      contactTitle: "Need a Custom Transportation Solution?",
      contactDescription:
        "Contact us today to discuss how we can help with your specific logistics requirements.",
      contactButton: "Contact Us",
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  // Array layanan dengan gambar dan deskripsi
  const services = {
    id: [
      {
        id: 1,
        title: "Charter Inland Transportasi",
        description:
          "Jasa angkutan darat sewa untuk Sumatera, Jawa, Bali, dan NTB",
        image: "/images/banner1.jpg",
      },
      {
        id: 2,
        title: "Transportasi Laut",
        description:
          "Jasa pengangkutan laut mencakup Sumatera dan Indonesia bagian Timur",
        image: "/images/banner2.jpg",
      },
      {
        id: 3,
        title: "Layanan Trailer & Lowbed",
        description:
          "Jasa truk yang menggunakan bak tertutup untuk barang Sumatera, Jawa and Bali",
        image: "/images/banner3.jpg",
      },
      {
        id: 4,
        title: "Penanganan Impor & Ekspor",
        description: "Menangani impor dan ekspor barang secara langsung",
        image: "/images/banner4.jpg",
      },
      {
        id: 5,
        title: "Layanan Truk Box",
        description: "Jasa truk yang menggunakan bak tertutup untuk barang",
        image: "/images/banner5.jpg",
      },
      {
        id: 6,
        title: "Layanan Loss Bak",
        description: "Layanan angkutan bantang menggunakan truk losa bak",
        image: "/images/banner6.jpg",
      },
      {
        id: 7,
        title: "Layanan Nominasi & Agensi",
        description: "Layanan nominasi dan agensi pada proyek pengiriman",
        image: "/images/banner7.jpg",
      },
      {
        id: 8,
        title: "Sewa & Penanganan Alat Berat",
        description: "Sewa dan penanganan peralatan berat untuk proyek",
        image: "/images/banner8.jpg",
      },
      {
        id: 9,
        title: "Layanan Konsolidasi",
        description:
          "Layanan konsolidasi untuk truk darat, Sumatera, Jawa, Bali, dan Kalimantan",
        image: "/images/banner9.jpg",
      },
      {
        id: 10,
        title: "Konsolidasi untuk Pengiriman Laut",
        description: "Konsolidasi untuk pengiriman laut, LCL, dan Breakbulk",
        image: "/images/banner10.jpg",
      },
      {
        id: 11,
        title: "Parkir dan Re-Parkir",
        description: "Layanan parkir dan re-parkir kendaraan",
        image: "/images/banner11.jpg",
      },
      {
        id: 12,
        title: "Jasa Pindahan",
        description: "Jasa pemindahan barang dan pindah rumah",
        image: "/images/banner12.jpg",
      },
      {
        id: 13,
        title: "Kargo Proyek",
        description: "Kargo proyek pemerintah dan non-pemerintah",
        image: "/images/banner13.jpg",
      },
      {
        id: 14,
        title: "Layanan Perantara",
        description: "Perantara LCT, Tug Board dan Kapal Kargo",
        image: "/images/banner14.jpg",
      },
    ],
    en: [
      {
        id: 1,
        title: "Charter Inland Transportation",
        description:
          "Rental land transportation services for Sumatra, Java, Bali, and NTB",
        image: "/images/banner1.jpg",
      },
      {
        id: 2,
        title: "Sea Transportation",
        description:
          "Sea transportation services covering Sumatra and Eastern Indonesia",
        image: "/images/banner2.jpg",
      },
      {
        id: 3,
        title: "Trailer & Lowbed Service",
        description:
          "Truck services using covered containers for goods in Sumatra, Java and Bali",
        image: "/images/banner3.jpg",
      },
      {
        id: 4,
        title: "Handling Import & Export",
        description: "Directly handling import and export of goods",
        image: "/images/banner4.jpg",
      },
      {
        id: 5,
        title: "Truck Boxes Service",
        description: "Truck services using covered containers for goods",
        image: "/images/banner5.jpg",
      },
      {
        id: 6,
        title: "Loss Bak Service",
        description: "Freight transport services using open bed trucks",
        image: "/images/banner6.jpg",
      },
      {
        id: 7,
        title: "Nomination & Agency Service",
        description: "Nomination and agency services for shipping projects",
        image: "/images/banner7.jpg",
      },
      {
        id: 8,
        title: "Rent & Handling Heavy Equipment",
        description: "Rental and handling of heavy equipment for projects",
        image: "/images/banner8.jpg",
      },
      {
        id: 9,
        title: "Consolidation Service",
        description:
          "Consolidation Service for Inland Trucking, Sumatra, Java, Bali, and Kalimantan",
        image: "/images/banner9.jpg",
      },
      {
        id: 10,
        title: "Consolidation for Sea Freight",
        description: "Consolidation for Sea Freight, LCL, and Breakbulk",
        image: "/images/banner10.jpg",
      },
      {
        id: 11,
        title: "Parking and Re-Parking",
        description: "Vehicle parking and re-parking services",
        image: "/images/banner11.jpg",
      },
      {
        id: 12,
        title: "Moving Service",
        description: "Goods relocation and house moving services",
        image: "/images/banner12.jpg",
      },
      {
        id: 13,
        title: "Project Cargo",
        description: "Project Cargo for Government and Non-Government",
        image: "/images/banner13.jpg",
      },
      {
        id: 14,
        title: "Brokerage Service",
        description: "Brokerage for LCT, Tug Board and Cargo Vessel",
        image: "/images/banner14.jpg",
      },
    ],
  };

  // Pilih layanan berdasarkan bahasa saat ini
  const currentServices = services[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Services Hero */}
      <section className="pt-16 bg-[#0e162e] text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {text.pageTitle}
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6">{text.pageDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section className="py-16 bg-[#0e162e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            {text.portfolioTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="relative overflow-hidden rounded-lg"
                style={{ height: "250px" }}
              >
                {/* Service Image */}
                <div className="absolute inset-0 bg-black">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="opacity-70"
                  />
                </div>

                {/* Service Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Services */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{text.contactTitle}</h2>
          <p className="text-xl mb-8">{text.contactDescription}</p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition"
          >
            {text.contactButton}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
