"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  // State untuk lightbox
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Gunakan context language dari aplikasi
  const { language } = useLanguage();

  // Terjemahan langsung
  const translations = {
    id: {
      pageTitle: "Galeri Kami",
      pageDescription:
        "Dokumentasi kegiatan dan armada transportasi PT Khazmans Jaya Mandiri",
    },
    en: {
      pageTitle: "Our Gallery",
      pageDescription:
        "Documentation of activities and transportation fleet of PT Khazmans Jaya Mandiri",
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  // Array gambar galeri dengan konten dwibahasa
  const galleryImages = {
    id: [
      {
        id: 1,
        title: "Armada Transportasi KJM",
        description: "Jasa angkutan darat dengan armada lengkap",
        image: "/images/dokumentasikjm1.jpg",
      },
      {
        id: 2,
        title: "Layanan Logistik",
        description: "Solusi transportasi terpadu",
        image: "/images/dokumentasikjm2.jpg",
      },
      {
        id: 3,
        title: "Armada Truk Container",
        description: "Pengiriman barang aman dan tepat waktu",
        image: "/images/dokumentasikjm3.jpg",
      },
      {
        id: 4,
        title: "Armada Siap Operasi",
        description: "Siap melayani kebutuhan logistik Anda",
        image: "/images/dokumentasikjm4.jpg",
      },
      {
        id: 5,
        title: "Truk Box Premium",
        description:
          "Solusi pengiriman barang yang memerlukan perlindungan khusus",
        image: "/images/dokumentasikjm5.jpg",
      },
      {
        id: 6,
        title: "Armada Box Terbaru",
        description: "Pengiriman barang dengan armada modern",
        image: "/images/dokumentasikjm6.jpg",
      },
      {
        id: 7,
        title: "Tim KJM Professional",
        description: "Didukung oleh tenaga profesional berpengalaman",
        image: "/images/dokumentasikjm7.jpg",
      },
      {
        id: 8,
        title: "Armada Container",
        description: "Solusi pengiriman container terpercaya",
        image: "/images/dokumentasikjm8.jpg",
      },
      {
        id: 9,
        title: "Armada Truk Modern",
        description: "Dukungan armada modern untuk kebutuhan logistik Anda",
        image: "/images/dokumentasikjm9.jpg",
      },
      {
        id: 10,
        title: "NPWP PT Khazmans Jaya Mandiri",
        description: "Nomor Pokok Wajib Pajak Perusahaan",
        image: "/images/dokumentasikjm10.jpg",
      },
      {
        id: 11,
        title: "Tanda Daftar Perusahaan PT KJM",
        description:
          "Dokumen legalitas dari Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
        image: "/images/dokumentasikjm11.jpg",
      },
    ],
    en: [
      {
        id: 1,
        title: "KJM Transportation Fleet",
        description: "Comprehensive land transportation services",
        image: "/images/dokumentasikjm1.jpg",
      },
      {
        id: 2,
        title: "Logistics Services",
        description: "Integrated transportation solutions",
        image: "/images/dokumentasikjm2.jpg",
      },
      {
        id: 3,
        title: "Container Truck Fleet",
        description: "Safe and timely delivery of goods",
        image: "/images/dokumentasikjm3.jpg",
      },
      {
        id: 4,
        title: "Operational Ready Fleet",
        description: "Ready to serve your logistics needs",
        image: "/images/dokumentasikjm4.jpg",
      },
      {
        id: 5,
        title: "Premium Box Trucks",
        description:
          "Shipping solutions for goods requiring special protection",
        image: "/images/dokumentasikjm5.jpg",
      },
      {
        id: 6,
        title: "Latest Box Fleet",
        description: "Goods delivery with modern fleet",
        image: "/images/dokumentasikjm6.jpg",
      },
      {
        id: 7,
        title: "Professional KJM Team",
        description: "Supported by experienced professionals",
        image: "/images/dokumentasikjm7.jpg",
      },
      {
        id: 8,
        title: "Container Fleet",
        description: "Trusted container shipping solutions",
        image: "/images/dokumentasikjm8.jpg",
      },
      {
        id: 9,
        title: "Modern Truck Fleet",
        description: "Modern fleet support for your logistics needs",
        image: "/images/dokumentasikjm9.jpg",
      },
      {
        id: 10,
        title: "PT Khazmans Jaya Mandiri Tax ID",
        description: "Company Tax Identification Number",
        image: "/images/dokumentasikjm10.jpg",
      },
      {
        id: 11,
        title: "PT KJM Company Registration Certificate",
        description:
          "Legal document from the Department of Investment and One-Stop Integrated Services",
        image: "/images/dokumentasikjm11.jpg",
      },
    ],
  };

  // Pilih gambar galeri berdasarkan bahasa saat ini
  const currentGalleryImages = galleryImages[language];

  // Fungsi untuk membuka lightbox
  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Fungsi untuk navigasi gambar dalam lightbox
  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    const currentIndex = currentGalleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % currentGalleryImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + currentGalleryImages.length) %
        currentGalleryImages.length;
    }

    setSelectedImage(currentGalleryImages[newIndex].id);
  };

  // Handler untuk keyboard events
  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (event.key === "ArrowLeft") {
      navigateImage("prev");
    } else if (event.key === "ArrowRight") {
      navigateImage("next");
    } else if (event.key === "Escape") {
      closeLightbox();
    }
  };

  // Tambahkan dan hapus keyboard event listener
  useEffect(() => {
    // Tambahkan event listener ketika lightbox terbuka
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup: hapus event listener ketika component unmount atau lightbox ditutup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]); // Ulangi effect setiap kali selectedImage berubah

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Gallery Hero dengan Background Image */}
      <section className="relative pt-24 text-white h-[400px] flex items-center justify-center">
        {/* Background dengan overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dokumentasikjm1.jpg"
            alt="Gallery Hero"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-[0.3]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">{text.pageTitle}</h1>
          <div className="w-24 h-1 bg-[#7e072e] mx-auto mb-6"></div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-6">{text.pageDescription}</p>
          </div>
        </div>
      </section>

      {/* Gallery Section with Masonry-like Layout */}
      <section className="py-16 bg-[#0e162e] text-white">
        <div className="container mx-auto px-4">
          {/* Featured image (larger) */}
          <div className="mb-8 overflow-hidden rounded-xl">
            <div
              className="relative h-[500px] w-full cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[0].id)}
            >
              <Image
                src={currentGalleryImages[0].image}
                alt={currentGalleryImages[0].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentGalleryImages[0].title}
                </h3>
                <p className="text-gray-200">
                  {currentGalleryImages[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Mix of different sized images in a visually interesting layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left column (wider) */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentGalleryImages[1].id)}
              >
                <Image
                  src={currentGalleryImages[1].image}
                  alt={currentGalleryImages[1].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {currentGalleryImages[1].title}
                  </h3>
                </div>
              </div>

              <div
                className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentGalleryImages[2].id)}
              >
                <Image
                  src={currentGalleryImages[2].image}
                  alt={currentGalleryImages[2].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {currentGalleryImages[2].title}
                  </h3>
                </div>
              </div>

              <div
                className="relative h-[300px] md:col-span-2 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentGalleryImages[3].id)}
              >
                <Image
                  src={currentGalleryImages[3].image}
                  alt={currentGalleryImages[3].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {currentGalleryImages[3].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Right column (narrower but taller images) */}
            <div className="md:col-span-4 grid grid-cols-1 gap-4">
              <div
                className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentGalleryImages[4].id)}
              >
                <Image
                  src={currentGalleryImages[4].image}
                  alt={currentGalleryImages[4].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {currentGalleryImages[4].title}
                  </h3>
                </div>
              </div>

              <div
                className="relative h-[300px] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(currentGalleryImages[5].id)}
              >
                <Image
                  src={currentGalleryImages[5].image}
                  alt={currentGalleryImages[5].title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <h3 className="text-lg font-bold text-white">
                    {currentGalleryImages[5].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row with 3 images and additional row for documents */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div
              className="relative h-[250px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[6].id)}
            >
              <Image
                src={currentGalleryImages[6].image}
                alt={currentGalleryImages[6].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white">
                  {currentGalleryImages[6].title}
                </h3>
              </div>
            </div>

            <div
              className="relative h-[250px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[7].id)}
            >
              <Image
                src={currentGalleryImages[7].image}
                alt={currentGalleryImages[7].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white">
                  {currentGalleryImages[7].title}
                </h3>
              </div>
            </div>

            <div
              className="relative h-[250px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[8].id)}
            >
              <Image
                src={currentGalleryImages[8].image}
                alt={currentGalleryImages[8].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white">
                  {currentGalleryImages[8].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Documents row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div
              className="relative h-[350px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[9].id)}
            >
              <Image
                src={currentGalleryImages[9].image}
                alt={currentGalleryImages[9].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white">
                  {currentGalleryImages[9].title}
                </h3>
              </div>
            </div>

            <div
              className="relative h-[350px] rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => openLightbox(currentGalleryImages[10].id)}
            >
              <Image
                src={currentGalleryImages[10].image}
                alt={currentGalleryImages[10].title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-lg font-bold text-white">
                  {currentGalleryImages[10].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox - Full screen approach */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="w-full h-full flex flex-col relative">
            {/* Top bar for navigation */}
            <div className="absolute inset-x-0 top-0 flex justify-between items-center p-2 z-50 bg-black bg-opacity-50">
              <div className="text-white text-lg">
                {selectedImage}/{currentGalleryImages.length}
              </div>

              {/* Close button */}
              <button
                className="text-white text-4xl hover:text-red-500 transition-colors p-2"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                &times;
              </button>
            </div>

            {/* Image display area */}
            <div className="flex-1 w-full h-full flex items-center justify-center">
              {currentGalleryImages.map((image) => {
                // Determine if this is a document or photo
                const isDocument = image.id >= 10;

                return (
                  <div
                    key={image.id}
                    className={`absolute inset-0 transition-opacity duration-300 flex items-center justify-center ${
                      image.id === selectedImage
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {/* Different rendering approach for documents vs photos */}
                    {isDocument ? (
                      // For documents - maximize visibility
                      <div className="w-full h-full px-4 pb-16 flex items-center justify-center">
                        <img
                          src={image.image}
                          alt={image.title}
                          className="max-w-full max-h-full object-contain"
                          style={{ transform: "scale(0.85)" }} // Scale down slightly to ensure full visibility
                        />
                      </div>
                    ) : (
                      // For regular photos
                      <div className="w-full h-full px-4 pb-16 flex items-center justify-center">
                        <Image
                          src={image.image}
                          alt={image.title}
                          width={1500}
                          height={1500}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Side navigation buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  className="bg-black bg-opacity-50 text-white text-4xl hover:text-red-500 transition-colors h-16 w-16 flex items-center justify-center rounded-r-lg"
                  onClick={() => navigateImage("prev")}
                  aria-label="Previous image"
                >
                  &#10094;
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  className="bg-black bg-opacity-50 text-white text-4xl hover:text-red-500 transition-colors h-16 w-16 flex items-center justify-center rounded-l-lg"
                  onClick={() => navigateImage("next")}
                  aria-label="Next image"
                >
                  &#10095;
                </button>
              </div>
            </div>

            {/* Caption bar */}
            <div className="absolute bottom-0 inset-x-0 bg-black bg-opacity-75 p-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedImage !== null &&
                  currentGalleryImages.find((img) => img.id === selectedImage)
                    ?.title}
              </h3>
              <p className="text-white text-sm">
                {selectedImage !== null &&
                  currentGalleryImages.find((img) => img.id === selectedImage)
                    ?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
