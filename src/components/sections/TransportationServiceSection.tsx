"use client";

import { useState } from "react";

export default function TransportationServiceSection() {
  return (
    // Bagian awal kode, ganti ini:
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
            <span className="text-white">Layanan</span>{" "}
            <span className="text-[#FF0000]">Logistik</span>{" "}
            <span className="text-white">Kami</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ fontWeight: 400 }}
          >
            Menghubungkan Bisnis Anda dengan Solusi Transportasi Terdepan
          </p>
        </div>

        {/* Service Cards - Layout Horizontal dengan Background Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Via Darat Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-center overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/viadarat.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Via Darat
              </h3>
              <p className="text-gray-300 text-lg">
                Pengiriman cepat antar kota dan pulau
              </p>
            </div>
          </div>

          {/* Via Laut Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-center overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/vialaut.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Via Laut
              </h3>
              <p className="text-gray-300 text-lg">
                Solusi efisien untuk muatan besar
              </p>
            </div>
          </div>

          {/* Via Udara Card */}
          <div
            className="relative rounded-xl p-8 text-center hover:transform hover:-translate-y-2 transition-all duration-300 min-h-[400px] flex flex-col justify-center overflow-hidden group"
            style={{
              backgroundImage: 'url("/images/viaudara.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Via Udara
              </h3>
              <p className="text-gray-300 text-lg">
                Prioritas cepat untuk kiriman mendesak
              </p>
            </div>
          </div>
        </div>

        {/* Jangkauan Rute Section */}
        <div>
          <div className="flex flex-col items-center mb-12">
            <h3
              className="text-3xl font-bold text-center mb-2"
              style={{ fontWeight: 700 }}
            >
              <span className="text-white">Jangkauan</span>{" "}
              <span className="text-[#FF0000]">Rute</span>{" "}
              <span className="text-white">Pengiriman</span>
            </h3>
            <div className="h-1 w-60 bg-[#FF0000] rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Via Darat Routes */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mr-4 text-[#FF0000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V6.618a1 1 0 01.553-.894L9 3m0 17l6-3m-6 3V3m6 14.382v-3.764a1 1 0 01.553-.894l5.447-2.724M15 17l6-3M9 3l6 3m-6 0v11.382a1 1 0 00.553.894l5.447 2.724M20.553 10.553L15 7l-6 3-6-3l-.553.276a1 1 0 00-.447.894v6.764a1 1 0 00.447.894L9 17l6 3 6-3 0-6.764a1 1 00-.447-.894z"
                  />
                </svg>
                Via Darat
              </h4>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-gray-300 text-lg">
                  <span className="font-semibold text-[#FF0000]">
                    Rute Utama:
                  </span>{" "}
                  Sumatera, Jawa & Bali
                </p>
              </div>
            </div>

            {/* Via Laut & Udara Routes */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-white">
                Via Laut & Udara
              </h4>
              <div className="space-y-4">
                <div className="flex items-center bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="mr-4 text-[#FF0000] font-bold text-lg">
                    •
                  </span>
                  <p className="text-gray-300 text-lg">Rute Laut: Domestik</p>
                </div>
                <div className="flex items-center bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="mr-4 text-[#FF0000] font-bold text-lg">
                    •
                  </span>
                  <p className="text-gray-300 text-lg">Rute Udara: Domestik</p>
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
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
