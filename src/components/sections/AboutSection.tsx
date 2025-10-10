"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="py-16 relative"
      style={{
        backgroundColor: "#fff",
        fontFamily:
          'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header - Centered title with red accent */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            <span className="text-[#0e162e]">Why Choose </span>
            <span className="text-[#FF0000]">Khazmans Jaya Mandiri</span>
            <span className="text-[#0e162e]">?</span>
          </h2>
          <div className="h-1 w-64 bg-[#FF0000] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Left Side - Logo, company description and features */}
          <div className="md:w-7/12">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/kjmlogo.png"
                alt="Khazmans Jaya Mandiri"
                width={400}
                height={150}
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-gray-700 mb-6">
              PT KHAZMANS JAYA MANDIRI adalah salah satu perusahaan yang
              bergerak di bidang jasa Transportasi khususnya tujuan domestik.
              Perusahaan kami dulu telah eksis pada awal tahun 2006, akan tetapi
              pada waktu itu belum di legalisasi karena memfokuskan diri sebagai
              agen transportasi lokal (Trucking) dari berbagai daerah seperti
              Sumatera dan Jawa, yang berdomisili di Pulogadung (EJIP).
            </p>

            <p className="text-gray-700 mb-8">
              PT. KHAZMANS JAYA MANDIRI di legalisasi pada bulan November 2010.
              Perusahaan kami menawarkan jasa pengiriman barang baik Domestik
              maupun Internasional. Akan tetapi, mengingat kebutuhan belakangan
              ini lebih cenderung melayani jasa pengiriman khususnya Domestik
              karena kebutuhan pasar yang cukup di banggakan.
            </p>

            {/* Features list */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#0e162e] flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0e162e]">
                    Industry Expertise
                  </h4>
                  <p className="text-sm text-gray-600">
                    Over 15 years of experience in sea freight and logistics
                    solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0e162e]">
                    24/7 Customer Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    Round-the-clock support to ensure your shipments are
                    monitored and tracked.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0e162e]">
                    Global Network
                  </h4>
                  <p className="text-sm text-gray-600">
                    Extensive network of partners worldwide for seamless
                    international shipping.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0e162e]">
                    Secure & Reliable
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced tracking systems and insurance options to protect
                    your cargo.
                  </p>
                </div>
              </div>
            </div>

            {/* "Pelajari Lebih Lanjut" button with maroon color - positioned to the center */}
            <div className="flex justify-center mt-6">
              <Link
                href="/about-us"
                className="inline-block bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold px-8 py-3 rounded-md transition"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Right Side - Image and counter badges */}
          <div className="md:w-5/12 relative">
            {/* Main image */}
            <div className="relative w-full h-[750px] rounded-lg overflow-hidden">
              <Image
                src="/images/sectionabout.jpg"
                alt="About Khazmans Jaya Mandiri"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>

            {/* Experience Badge - outside the image in the corner */}
            <div className="absolute -top-4 -right-4 bg-[#7e072e] text-white rounded-md p-4 shadow-lg z-10">
              <div className="text-3xl font-bold text-center">19+</div>
              <div className="text-sm">Years Experience</div>
            </div>

            {/* Shipments Badge - outside the image in the corner */}
            <div className="absolute -bottom-4 -left-4 bg-[#0e162e] text-white rounded-md p-4 shadow-lg z-10">
              <div className="text-3xl font-bold text-center">500+</div>
              <div className="text-sm">Successful Shipments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
