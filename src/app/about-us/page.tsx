"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState("about");

  // Terjemahan langsung
  const translations = {
    id: {
      pageTitle: "Tentang Kami",
      pageDescription:
        "Pelajari tentang perjalanan PT KHAZMANS JAYA MANDIRI dan komitmen kami terhadap keunggulan",
      tabs: {
        about: "Tentang",
        philosophy: "Filosofi",
        vision: "Visi & Misi",
        commitment: "Komitmen",
      },
      content: {
        about: {
          title: "Tentang Kami",
          description:
            "PT KHAZMANS JAYA MANDIRI adalah salah satu perusahaan yang bergerak di bidang jasa Transportasi khususnya tujuan domestik. Perusahaan kami dulu telah eksis pada awal tahun 2006, akan tetapi pada waktu itu belum di legalisasi karena memfokuskan diri sebagai agen transportasi lokal (Trucking) dari berbagai daerah seperti Sumatera dan Jawa, yang berdomisili di Pulogadung (EJIP).",
        },
        philosophy: {
          title: "Filosofi",
          description:
            "PT. KHAZMANS JAYA MANDIRI di legalisasi pada bulan November 2010. Perusahaan kami menawarkan jasa pengiriman barang baik Domestik maupun Internasional. Akan tetapi, mengingat kebutuhan belakangan ini lebih cenderung melayani jasa pengiriman khususnya Domestik karena kebutuhan pasar yang cukup di banggakan. Bukan berarti kami tidak melayani jasa pengiriman Internasional, Kami senantiasa membuka tangan apapun yang dikehendaki oleh Vendor, Eksportir maupun Importir, Kami siap melayani sepanjang tidak menyalahi undang-undang jasa pengiriman yang telah ditetapkan pemerintah.",
        },
        vision: {
          title: "Visi & Misi",
          visionTitle: "Visi Kami",
          visionText:
            "Menjadi perusahaan transportasi dan logistik terkemuka di Indonesia yang menyediakan layanan terpadu dengan standar kualitas tertinggi, efisiensi operasional yang unggul, dan berkomitmen pada kepuasan pelanggan.",
          missionTitle: "Misi Kami",
          missionItems: [
            "• Menyediakan solusi transportasi dan logistik yang komprehensif dan terpercaya",
            "• Mengembangkan jaringan distribusi yang luas dan efisien di seluruh Indonesia",
            "• Mengadopsi teknologi dan praktik terbaik untuk meningkatkan kualitas layanan",
            "• Membangun hubungan jangka panjang dengan pelanggan berdasarkan kepercayaan dan kehandalan",
            "• Berkontribusi pada pembangunan ekonomi nasional melalui layanan logistik yang andal",
          ],
        },
        commitment: {
          title: "Komitmen",
          description:
            "PT. KHAZMANS JAYA MANDIRI juga mempunyai kerjasama dengan pihak yang menunjang kegiatan jasa pengiriman, antara lain: Kapal Laut, Trucking, Lowbed, Trailer baik dari Jakarta maupun dari daerah lain. Hal ini kami lakukan demi meningkatkan kualitas pengiriman dan menunjang aktivitas transportasi.",
        },
      },
    },
    en: {
      pageTitle: "About Us",
      pageDescription:
        "Learn about PT KHAZMANS JAYA MANDIRI's journey and commitment to excellence",
      tabs: {
        about: "About",
        philosophy: "Philosophy",
        vision: "Vision & Mission",
        commitment: "Commitment",
      },
      content: {
        about: {
          title: "About Us",
          description:
            "PT KHAZMANS JAYA MANDIRI is one of the companies engaged in Transportation services, especially for domestic destinations. Our company has existed since early 2006, but at that time it had not been legalized because it focused on being a local transportation agent (Trucking) from various regions such as Sumatra and Java, based in Pulogadung (EJIP).",
        },
        philosophy: {
          title: "Philosophy",
          description:
            "PT. KHAZMANS JAYA MANDIRI was legalized in November 2010. Our company offers goods delivery services both Domestic and International. However, considering the recent needs, we tend to serve shipping services, especially Domestic, due to the significant market demand. This doesn't mean we don't serve International shipping services. We are always open to whatever is desired by Vendors, Exporters and Importers. We are ready to serve as long as it does not violate the shipping service laws established by the government.",
        },
        vision: {
          title: "Vision & Mission",
          visionTitle: "Our Vision",
          visionText:
            "To become a leading transportation and logistics company in Indonesia that provides integrated services with the highest quality standards, superior operational efficiency, and is committed to customer satisfaction.",
          missionTitle: "Our Mission",
          missionItems: [
            "• Provide comprehensive and reliable transportation and logistics solutions",
            "• Develop an extensive and efficient distribution network throughout Indonesia",
            "• Adopt technology and best practices to improve service quality",
            "• Build long-term relationships with customers based on trust and reliability",
            "• Contribute to national economic development through reliable logistics services",
          ],
        },
        commitment: {
          title: "Commitment",
          description:
            "PT. KHAZMANS JAYA MANDIRI also collaborates with parties that support shipping service activities, including: Sea Ships, Trucking, Lowbed, Trailers both from Jakarta and from other regions. We do this to improve the quality of shipments and support transportation activities.",
        },
      },
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

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
        />
        {/* Overlay transparan gelap */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4">{text.pageTitle}</h1>
            <p className="text-xl max-w-3xl mx-auto px-4">
              {text.pageDescription}
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
                {text.tabs.about}
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
                {text.tabs.philosophy}
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
                {text.tabs.vision}
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
                {text.tabs.commitment}
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
                  {text.content.about.title}
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {text.content.about.description}
                </p>
              </div>
            )}

            {/* Philosophy Tab */}
            {activeTab === "philosophy" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {text.content.philosophy.title}
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {text.content.philosophy.description}
                </p>
              </div>
            )}

            {/* Vision & Mission Tab */}
            {activeTab === "vision" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {text.content.vision.title}
                </h2>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {text.content.vision.visionTitle}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {text.content.vision.visionText}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {text.content.vision.missionTitle}
                  </h3>
                  <ul className="text-gray-300 space-y-2 leading-relaxed">
                    {text.content.vision.missionItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Commitment Tab */}
            {activeTab === "commitment" && (
              <div className="content-section">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {text.content.commitment.title}
                </h2>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  {text.content.commitment.description}
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
