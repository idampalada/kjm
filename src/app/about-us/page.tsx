"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("history");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0e162e]">
      <Header />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white relative"
        style={{
          backgroundImage: 'url("/images/bg1.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0e162e] opacity-90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("about.page.title")}
            </h1>
            <p className="text-xl text-gray-300">{t("about.subtitle")}</p>
          </div>
        </div>
      </section>

      {/* Content Section with Tabs */}
      <section className="py-20 bg-gradient-to-b from-[#0e162e] to-[#1a1a2e]">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <button
                onClick={() => setActiveTab("history")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "history"
                    ? "bg-[#FF0000] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t("about.tab.history")}
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-[#FF0000] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t("about.tab.vision")}
              </button>
              <button
                onClick={() => setActiveTab("commitment")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === "commitment"
                    ? "bg-[#FF0000] text-white shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {t("about.tab.commitment")}
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* History Tab */}
            {activeTab === "history" && (
              <div className="content-section animate-fadeIn">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {t("about.tab.history")}
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">{t("about.history.p1")}</p>
                  <p className="text-lg">{t("about.history.p2")}</p>
                  <p className="text-lg">{t("about.history.p3")}</p>
                </div>
              </div>
            )}

            {/* Vision & Mission Tab */}
            {activeTab === "vision" && (
              <div className="content-section animate-fadeIn">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {t("about.tab.vision")}
                </h2>

                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {t("about.vision.title")}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {t("about.vision.text")}
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      {t("about.mission.title")}
                    </h3>
                    <ul className="text-gray-300 space-y-3 leading-relaxed text-lg">
                      <li>{t("about.mission.1")}</li>
                      <li>{t("about.mission.2")}</li>
                      <li>{t("about.mission.3")}</li>
                      <li>{t("about.mission.4")}</li>
                      <li>{t("about.mission.5")}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Commitment Tab */}
            {activeTab === "commitment" && (
              <div className="content-section animate-fadeIn">
                <h2 className="text-4xl font-bold mb-8 text-[#FF0000] italic">
                  {t("about.tab.commitment")}
                </h2>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {t("about.commitment.text")}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
