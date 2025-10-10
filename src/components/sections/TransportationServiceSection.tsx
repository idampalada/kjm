// TransportationServiceSection.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TransportationServiceSection() {
  const { t } = useLanguage();

  return (
    <section
      className="py-20 text-white relative"
      style={{
        backgroundImage: 'url("/images/bg2.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0e162e] opacity-90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-white">
            {t("transport.title")}
          </h2>
          <p className="text-xl text-gray-300">{t("transport.subtitle")}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Via Darat */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-[#FF0000]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                {t("transport.land")}
              </h4>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <p className="text-gray-300 text-lg">
                  <span className="font-semibold text-[#FF0000]">
                    {t("transport.land.route")}
                  </span>{" "}
                  {t("transport.land.area")}
                </p>
              </div>
            </div>

            {/* Via Laut & Udara */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8">
              <h4 className="text-xl font-semibold mb-6 text-white">
                {t("transport.sea.air")}
              </h4>
              <div className="space-y-4">
                <div className="flex items-center bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="mr-4 text-[#FF0000] font-bold text-lg">
                    •
                  </span>
                  <p className="text-gray-300 text-lg">
                    {t("transport.sea.route")}
                  </p>
                </div>
                <div className="flex items-center bg-white/5 rounded-lg p-4 border border-white/10">
                  <span className="mr-4 text-[#FF0000] font-bold text-lg">
                    •
                  </span>
                  <p className="text-gray-300 text-lg">
                    {t("transport.air.route")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold px-8 py-3 rounded-full transition"
            >
              {t("transport.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ContactForm.tsx
("use client");

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    inquiry: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        business: "",
        inquiry: "",
      });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-gray-600">{t("contact.subtitle")}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t("contact.name")} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t("contact.email")} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t("contact.business")}
                </label>
                <input
                  type="text"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                {t("contact.inquiry")} *
              </label>
              <textarea
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF0000] transition resize-none"
              ></textarea>
            </div>

            {status === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {t("contact.success")}
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {t("contact.error")}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t("contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
