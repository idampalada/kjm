"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/images/banneraboutus.jpg"
          alt="About Us Banner"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              Learn about PT KHAZMANS JAYA MANDIRI's journey and commitment to
              excellence
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="bg-[#0e162e] text-white">
        <div className="container mx-auto px-4 py-16">
          {/* Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-4 gap-4 w-full max-w-4xl">
              <button
                className={`py-4 px-6 text-center font-medium relative ${
                  activeTab === "about" ? "text-[#FF0000]" : "text-gray-300"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
                {activeTab === "about" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7e072e]"></div>
                )}
              </button>
              <button
                className={`py-4 px-6 text-center font-medium relative ${
                  activeTab === "philosophy"
                    ? "text-[#FF0000]"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveTab("philosophy")}
              >
                Philosophy
                {activeTab === "philosophy" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7e072e]"></div>
                )}
              </button>
              <button
                className={`py-4 px-6 text-center font-medium relative ${
                  activeTab === "vision" ? "text-[#FF0000]" : "text-gray-300"
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Vision & Mission
                {activeTab === "vision" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7e072e]"></div>
                )}
              </button>
              <button
                className={`py-4 px-6 text-center font-medium relative ${
                  activeTab === "commitment"
                    ? "text-[#FF0000]"
                    : "text-gray-300"
                }`}
                onClick={() => setActiveTab("commitment")}
              >
                Commitment
                {activeTab === "commitment" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#7e072e]"></div>
                )}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto px-6">
            {/* About Tab */}
            {activeTab === "about" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  About Us
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  PT KHAZMANS JAYA MANDIRI adalah salah satu perusahaan yang
                  bergerak di bidang jasa Transportasi khususnya tujuan
                  domestik. Perusahaan kami dulu telah eksis pada awal tahun
                  2006, akan tetapi pada waktu itu belum di legalisasi karena
                  memfokuskan diri sebagai agen transportasi lokal (Trucking)
                  dari berbagai daerah seperti Sumatera dan Jawa, yang
                  berdomisili di Pulogadung (EJIP).
                </p>
              </div>
            )}

            {/* Philosophy Tab */}
            {activeTab === "philosophy" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  Philosophy
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  PT. KHAZMANS JAYA MANDIRI di legalisasi pada bulan November
                  2010. Perusahaan kami menawarkan jasa pengiriman barang baik
                  Domestik maupun Internasional. Akan tetapi, mengingat
                  kebutuhan belakangan ini lebih cenderung melayani jasa
                  pengiriman khususnya Domestik karena kebutuhan pasar yang
                  cukup di banggakan. Bukan berarti kami tidak melayani jasa
                  pengiriman Internasional, Kami senantiasa membuka tangan
                  apapun yang dikehendaki oleh Vendor, Eksportir maupun
                  Importir, Kami siap melayani sepanjang tidak menyalahi
                  undang-undang jasa pengiriman yang telah ditetapkan
                  pemerintah.
                </p>
              </div>
            )}

            {/* Vision & Mission Tab */}
            {activeTab === "vision" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  Vision & Mission
                </h2>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Menjadi perusahaan transportasi dan logistik terkemuka di
                    Indonesia yang menyediakan layanan terpadu dengan standar
                    kualitas tertinggi, efisiensi operasional yang unggul, dan
                    berkomitmen pada kepuasan pelanggan.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    Our Mission
                  </h3>
                  <ul className="text-gray-300 space-y-2 leading-relaxed">
                    <li>
                      • Menyediakan solusi transportasi dan logistik yang
                      komprehensif dan terpercaya
                    </li>
                    <li>
                      • Mengembangkan jaringan distribusi yang luas dan efisien
                      di seluruh Indonesia
                    </li>
                    <li>
                      • Mengadopsi teknologi dan praktik terbaik untuk
                      meningkatkan kualitas layanan
                    </li>
                    <li>
                      • Membangun hubungan jangka panjang dengan pelanggan
                      berdasarkan kepercayaan dan kehandalan
                    </li>
                    <li>
                      • Berkontribusi pada pembangunan ekonomi nasional melalui
                      layanan logistik yang andal
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Commitment Tab */}
            {activeTab === "commitment" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  Commitment
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  PT. KHAZMANS JAYA MANDIRI juga mempunyai kerjasama dengan
                  pihak yang menunjang kegiatan jasa pengiriman, antara lain:
                  Kapal Laut, Trucking, Lowbed, Trailer baik dari Jakarta maupun
                  dari daerah lain. Hal ini kami lakukan demi meningkatkan
                  kualitas pengiriman dan menunjang aktivitas transportasi.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
