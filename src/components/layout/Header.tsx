"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <nav className="flex items-center justify-center flex-grow">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="font-medium text-white hover:text-red-500 transition py-3 text-lg"
                >
                  News
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact & Language */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-[#7e072e] hover:bg-[#6a0625] text-white font-medium px-5 py-3 rounded"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-1">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black">
                <span className="text-xs font-medium">EN</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
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

            {/* Mobile Logo - Centered */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/kjmlogo.png"
                alt="PT Khazmans Jaya Mandiri"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            <nav className="flex flex-col space-y-4 py-8">
              <Link
                href="/"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about-us"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/gallery"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/news"
                className="font-medium text-white hover:text-red-500 transition py-2 border-b border-gray-700 text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
            </nav>

            <div className="mt-6 flex flex-col space-y-4">
              <Link
                href="/contact"
                className="bg-[#7e072e] hover:bg-[#6a0625] text-white px-5 py-3 font-medium rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-black">
                  <span className="text-xs font-medium">EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
