"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  // Style untuk link aktif - selalu merah
  const activeLinkStyle =
    "text-[#FF0000] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#7e072e]";

  // Style untuk link tidak aktif - berubah sesuai scroll
  const inactiveLinkStyle = scrolled
    ? "text-black hover:text-red-500"
    : "text-white hover:text-red-500";

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Diperbesar */}
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/images/kjmlogo.png"
                alt="PT Khazmans Jaya Mandiri"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation - Centered */}
          <nav className="flex items-center justify-center flex-grow">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className={`font-medium ${
                    isActive("/") ? activeLinkStyle : inactiveLinkStyle
                  } transition py-3 text-lg`}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`font-medium ${
                    isActive("/services") ? activeLinkStyle : inactiveLinkStyle
                  } transition py-3 text-lg`}
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`font-medium ${
                    isActive("/about-us") ? activeLinkStyle : inactiveLinkStyle
                  } transition py-3 text-lg`}
                >
                  {t("nav.aboutUs")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={`font-medium ${
                    isActive("/gallery") ? activeLinkStyle : inactiveLinkStyle
                  } transition py-3 text-lg`}
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className={`font-medium ${
                    isActive("/news") ? activeLinkStyle : inactiveLinkStyle
                  } transition py-3 text-lg`}
                >
                  {t("nav.news")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Language */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "bg-[#6a0625]"
                  : "bg-[#7e072e] hover:bg-[#6a0625]"
              } text-white font-medium px-5 py-3 rounded transition`}
            >
              {t("nav.contact")}
            </Link>
            <div className="cursor-pointer" onClick={toggleLanguage}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  scrolled ? "bg-gray-800 text-white" : "bg-white text-black"
                }`}
              >
                <span className="text-xs font-medium">
                  {language === "id" ? "ID" : "EN"}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={scrolled ? "text-black" : "text-white"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a1a1a] pt-16">
          <div className="container mx-auto px-4">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile Logo - Centered & Diperbesar */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/kjmlogo.png"
                alt="PT Khazmans Jaya Mandiri"
                width={180}
                height={65}
                className="h-14 w-auto"
              />
            </div>

            <nav className="flex flex-col space-y-4 py-8">
              <Link
                href="/"
                className={`font-medium ${
                  isActive("/")
                    ? "text-[#FF0000]"
                    : "text-white hover:text-red-500"
                } transition py-2 border-b border-gray-700 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/services"
                className={`font-medium ${
                  isActive("/services")
                    ? "text-[#FF0000]"
                    : "text-white hover:text-red-500"
                } transition py-2 border-b border-gray-700 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/about-us"
                className={`font-medium ${
                  isActive("/about-us")
                    ? "text-[#FF0000]"
                    : "text-white hover:text-red-500"
                } transition py-2 border-b border-gray-700 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.aboutUs")}
              </Link>
              <Link
                href="/gallery"
                className={`font-medium ${
                  isActive("/gallery")
                    ? "text-[#FF0000]"
                    : "text-white hover:text-red-500"
                } transition py-2 border-b border-gray-700 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="/news"
                className={`font-medium ${
                  isActive("/news")
                    ? "text-[#FF0000]"
                    : "text-white hover:text-red-500"
                } transition py-2 border-b border-gray-700 text-lg`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.news")}
              </Link>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <Link
                href="/contact"
                className={`${
                  isActive("/contact")
                    ? "bg-[#6a0625]"
                    : "bg-[#7e072e] hover:bg-[#6a0625]"
                } text-white px-5 py-3 font-medium rounded transition`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLanguage();
                }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black">
                  <span className="text-xs font-medium">
                    {language === "id" ? "ID" : "EN"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
