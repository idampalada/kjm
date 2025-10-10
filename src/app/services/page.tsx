// src/app/services/page.tsx
"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function ServicesPage() {
  // Array layanan dengan gambar dan deskripsi
  const services = [
    {
      id: 1,
      title: "Charter Inland Transportasi",
      description:
        "Jasa angkutan darat sewa untuk Sumatera, Jawa, Bali, dan NTB",
      image: "/images/banner1.jpg",
    },
    {
      id: 2,
      title: "Sea Transportation",
      description:
        "Jasa pengangkutan laut mencakup Sumatera dan Indonesia bagian Timur",
      image: "/images/banner2.jpg",
    },
    {
      id: 3,
      title: "Trailer & Lowbed Service",
      description:
        "Jasa truk yang menggunakan bak tertutup untuk barang Sumatera, Jawa and Bali",
      image: "/images/banner3.jpg",
    },
    {
      id: 4,
      title: "Handling Import & Export",
      description: "Menangani impor dan ekspor barang secara langsung",
      image: "/images/banner4.jpg",
    },
    {
      id: 5,
      title: "Truck Boxes Service",
      description: "Jasa truk yang menggunakan bkak tertutup untuk barang",
      image: "/images/banner5.jpg",
    },
    {
      id: 6,
      title: "Loss Bak Service",
      description: "Layanan angkutan bantang menggunakan truk losa bak",
      image: "/images/banner6.jpg",
    },
    {
      id: 7,
      title: "Nomination & Agency Service",
      description: "Layanan nomihasi dan agenxi pada proyek penginman",
      image: "/images/banner7.jpg",
    },
    {
      id: 8,
      title: "Rent & Handling Heavy Equipment",
      description: "Sews dan penanganan peralatan berat untuk proyek",
      image: "/images/banner8.jpg",
    },
    {
      id: 9,
      title: "Consolidation Service",
      description:
        "Consolidation Service for Inland Trucking, Sumatera, Jawa, Bali, dan Kalimantan",
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
      description: "Layanan parkir dan re-parkir kendaraan",
      image: "/images/banner11.jpg",
    },
    {
      id: 12,
      title: "Moving Service",
      description: "Jasa pemindahan barang dan pindah rumah",
      image: "/images/banner12.jpg",
    },
    {
      id: 13,
      title: "Project Cargo",
      description: "Project Cargo Government and Non-Government",
      image: "/images/banner13.jpg",
    },
    {
      id: 14,
      title: "Brokerage Service",
      description: "Brokerage LCT, Tug Board and Cargo Vessel",
      image: "/images/banner14.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Services Hero */}
      <section className="pt-16 bg-[#0e162e] text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6">
              PT Khazmans Jaya Mandiri provides comprehensive transportation and
              logistics services to meet all your shipping needs across
              Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Service Portfolio Section */}
      <section className="py-16 bg-[#0e162e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Our Service Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
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
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Transportation Solution?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how we can help with your specific
            logistics requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
