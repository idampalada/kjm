"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effect
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

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/images/kjmlogo.png"
                alt="PT Khazmans Jaya Mandiri"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-grow">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  {t("nav.news")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Phone & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-white text-black px-5 py-3 font-medium">
              021 38853160
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Switch Language"
            >
              <span className="text-sm font-bold">
                {language.toUpperCase()}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
              aria-label="Toggle Menu"
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
        <div className="md:hidden bg-[#1a1a1a] border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/services"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/about-us"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/gallery"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.gallery")}
              </Link>
              <Link
                href="/news"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.news")}
              </Link>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <div className="bg-white text-black px-5 py-3 font-medium w-max">
                021 38853160
              </div>

              {/* Mobile Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-white hover:bg-gray-100 text-black px-4 py-3 rounded-lg font-medium transition-all duration-300 w-max"
              >
                <span className="text-sm font-bold">
                  {language.toUpperCase()}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
