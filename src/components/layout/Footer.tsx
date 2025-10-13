"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  // Terjemahan langsung
  const translations = {
    id: {
      description:
        "PT. KHAZMANS JAYA MANDIRI adalah salah satu perusahaan yang bergerak di bidang jasa Transportasi khususnya tujuan domestik.",
      contact: "Kontak Kami",
      address: {
        line1: "Jl. Bintara XI No. 131 RT. 02 RW. 05",
        line2: "Kel. Bintara, Kec. Bekasi Barat 17134",
        line3: "West Java",
      },
      social: "Media Sosial",
      copyright: `© ${new Date().getFullYear()} PT Khazmans Jaya Mandiri. Hak cipta dilindungi undang-undang.`,
    },
    en: {
      description:
        "PT. KHAZMANS JAYA MANDIRI is a company engaged in Transportation services especially for domestic destinations.",
      contact: "Contact Us",
      address: {
        line1: "Jl. Bintara XI No. 131 RT. 02 RW. 05",
        line2: "Kel. Bintara, Kec. Bekasi Barat 17134",
        line3: "West Java",
      },
      social: "Social Media",
      copyright: `© ${new Date().getFullYear()} PT Khazmans Jaya Mandiri. All rights reserved.`,
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  return (
    <footer
      className="py-12 text-white relative"
      style={{
        backgroundColor: "#000000",
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
        {/* Top section */}
        <div className="flex justify-center mb-12">
          <div className="w-24 h-1 bg-[#7e072e]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {/* Kolom 1: Logo dan Deskripsi */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/kjmlogo.png"
                alt="PT Khazmans Jaya Mandiri"
                width={200}
                height={80}
                className="h-auto w-auto"
              />
            </Link>

            <p className="mb-6 text-gray-300">{text.description}</p>
          </div>

          {/* Kolom 2: Informasi Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative">
              <span className="relative z-10">{text.contact}</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#7e072e]"></span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <MapPin size={16} className="text-[#7e072e]" />
                </div>
                <div className="text-gray-300">
                  {text.address.line1}
                  <br />
                  {text.address.line2}
                  <br />
                  {text.address.line3}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#7e072e]" />
                </div>
                <span className="text-gray-300">021 89465873</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-[#7e072e]" />
                </div>
                <span className="text-gray-300">
                  khazmansjayamandiri@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Kolom 3: Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative">
              <span className="relative z-10">{text.social}</span>
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-[#7e072e]"></span>
            </h3>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/idam.palada/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group"
              >
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center mr-3 group-hover:bg-[#7e072e] transition-colors duration-300">
                  <Instagram
                    size={16}
                    className="text-[#7e072e] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  @KhazmansJayaMandiri
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group"
              >
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center mr-3 group-hover:bg-[#7e072e] transition-colors duration-300">
                  <Facebook
                    size={16}
                    className="text-[#7e072e] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  PT Khazmans Jaya Mandiri
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="flex items-center group"
              >
                <div className="w-8 h-8 rounded-full bg-[#7e072e]/20 flex items-center justify-center mr-3 group-hover:bg-[#7e072e] transition-colors duration-300">
                  <Twitter
                    size={16}
                    className="text-[#7e072e] group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  @khazmansjm
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">{text.copyright}</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send?phone=6285771689665&utm_source=WAwebsite&utm_medium=WebsiteKD&utm_campaign=WebsiteKD&utm_id=WAwebsite"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-40 flex items-center justify-center"
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M11.989 19.892a7.93 7.93 0 01-4.023-1.092l-.944 3.248-3.178-.835 3.179-.835a1 1 0 11.507 1.936l.944-3.248a7.958 7.958 0 004.451 1.328h.017a8.007 8.007 0 008-8 8.007 8.007 0 00-8-8 8.007 8.007 0 00-8 8c0 1.334.324 2.618.949 3.769l.297-.818a6.935 6.935 0 01-.835-3.301 7.016 7.016 0 014.332-6.48 7.007 7.007 0 012.751-.52 7.007 7.007 0 014.953 2.047 7.007 7.007 0 012.047 4.953 7.007 7.007 0 01-2.047 4.953 7.007 7.007 0 01-4.953 2.047 6.93 6.93 0 01-.447.015z" />
        </svg>
      </a>
    </footer>
  );
}
