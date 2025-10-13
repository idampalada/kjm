"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  submitContactForm,
  ContactFormData,
} from "../../services/contactService";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Terjemahan langsung
  const translations = {
    id: {
      pageTitle: "HUBUNGI KAMI",
      title: {
        first: "Dapatkan ",
        second: "Gratis",
        third: " Konsultasi!",
      },
      description:
        "Kami siap membantu Anda dengan kebutuhan logistik dan transportasi. Silakan isi formulir di bawah ini untuk konsultasi gratis.",
      successMessage: {
        title: "Terima Kasih!",
        message:
          "Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda untuk konsultasi lebih lanjut.",
        button: "Kirim pesan lain",
      },
      contactInfo: {
        title: "Informasi Kontak",
        description:
          "Silahkan hubungi kami melalui info di bawah ini atau isi form untuk diskusi kebutuhan logistik Anda.",
        address: {
          label: "Alamat",
          value: "Jakarta, Indonesia",
        },
        phone: {
          label: "Telepon",
          value: "021 38853160",
        },
        email: {
          label: "Email",
          value: "info@khazmansjayamandiri.com",
        },
        social: "Ikuti Kami",
      },
      form: {
        name: {
          label: "Nama",
          placeholder: "Masukkan nama lengkap",
          required: "Nama wajib diisi",
        },
        email: {
          label: "Email",
          placeholder: "email@contoh.com",
          required: "Email wajib diisi",
          invalid: "Email tidak valid",
        },
        phone: {
          label: "Nomor Telepon",
          placeholder: "0812 3456 7890",
        },
        business: {
          label: "Jenis Usaha",
          placeholder: "Contoh: Manufaktur, Retail, dll.",
        },
        message: {
          label: "Pesan Anda",
          placeholder: "Jelaskan kebutuhan logistik atau transportasi Anda",
          required: "Pesan wajib diisi",
        },
        submit: "Kirim Pesan",
        submitting: "Mengirim...",
      },
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },
    en: {
      pageTitle: "CONTACT US",
      title: {
        first: "Get A ",
        second: "Free",
        third: " Consultation!",
      },
      description:
        "We're ready to help you with your logistics and transportation needs. Please fill out the form below for a free consultation.",
      successMessage: {
        title: "Thank You!",
        message:
          "Your message has been sent. Our team will contact you soon for further consultation.",
        button: "Send another message",
      },
      contactInfo: {
        title: "Contact Information",
        description:
          "Please contact us through the information below or fill out the form to discuss your logistics needs.",
        address: {
          label: "Address",
          value: "Jakarta, Indonesia",
        },
        phone: {
          label: "Phone",
          value: "021 38853160",
        },
        email: {
          label: "Email",
          value: "info@khazmansjayamandiri.com",
        },
        social: "Follow Us",
      },
      form: {
        name: {
          label: "Name",
          placeholder: "Enter your full name",
          required: "Name is required",
        },
        email: {
          label: "Email",
          placeholder: "email@example.com",
          required: "Email is required",
          invalid: "Email is invalid",
        },
        phone: {
          label: "Phone Number",
          placeholder: "0812 3456 7890",
        },
        business: {
          label: "Business Type",
          placeholder: "Example: Manufacturing, Retail, etc.",
        },
        message: {
          label: "Your Message",
          placeholder: "Describe your logistics or transportation needs",
          required: "Message is required",
        },
        submit: "Send Message",
        submitting: "Sending...",
      },
      error: "An error occurred. Please try again.",
    },
  };

  // Memilih terjemahan berdasarkan bahasa saat ini
  const text = translations[language];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitContactForm(data);
      setSubmitSuccess(true);
      reset();
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || text.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Banner Section */}
      <section className="relative w-full h-[300px]">
        <Image
          src="/images/bannercontactus.jpg"
          alt="Contact Banner"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="inline-block text-4xl font-bold text-white px-10 py-4 border-2 border-white mb-4">
              {text.pageTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="py-16 relative"
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-white">{text.title.first}</span>
              <span className="text-[#FF0000]">{text.title.second}</span>
              <span className="text-white">{text.title.third}</span>
            </h2>
            <div className="h-1 w-64 bg-[#7e072e] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {text.description}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {submitSuccess ? (
              <div className="bg-[#0e162e] border border-[#7e072e] p-8 rounded-lg text-center shadow-lg">
                <div className="w-20 h-20 mx-auto bg-[#7e072e] rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {text.successMessage.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {text.successMessage.message}
                </p>
                <button
                  className="bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold px-8 py-3 rounded-md transition"
                  onClick={() => setSubmitSuccess(false)}
                >
                  {text.successMessage.button}
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - Contact info */}
                  <div className="md:w-2/5 bg-[#0e162e] p-8 text-white">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-4">
                        {text.contactInfo.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {text.contactInfo.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {text.contactInfo.address.label}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {text.contactInfo.address.value}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {text.contactInfo.phone.label}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {text.contactInfo.phone.value}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            {text.contactInfo.email.label}
                          </h4>
                          <p className="text-sm text-gray-300">
                            {text.contactInfo.email.value}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <h4 className="font-semibold mb-4">
                        {text.contactInfo.social}
                      </h4>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center text-white hover:bg-[#6a0625] transition"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center text-white hover:bg-[#6a0625] transition"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="w-10 h-10 rounded-full bg-[#7e072e] flex items-center justify-center text-white hover:bg-[#6a0625] transition"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Form */}
                  <div className="md:w-3/5 p-8">
                    {errorMessage && (
                      <div className="mb-6 bg-red-100 border border-red-400 p-4 rounded-lg text-red-700">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                          {errorMessage}
                        </div>
                      </div>
                    )}

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {text.form.name.label}
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e072e] focus:border-[#7e072e]"
                          placeholder={text.form.name.placeholder}
                          {...register("name", {
                            required: text.form.name.required,
                          })}
                        />
                        {errors.name && (
                          <p className="mt-1 text-[#7e072e] text-sm">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {text.form.email.label}
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e072e] focus:border-[#7e072e]"
                            placeholder={text.form.email.placeholder}
                            {...register("email", {
                              required: text.form.email.required,
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: text.form.email.invalid,
                              },
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-[#7e072e] text-sm">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            {text.form.phone.label}
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e072e] focus:border-[#7e072e]"
                            placeholder={text.form.phone.placeholder}
                            {...register("phone")}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="business"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {text.form.business.label}
                        </label>
                        <input
                          id="business"
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e072e] focus:border-[#7e072e]"
                          placeholder={text.form.business.placeholder}
                          {...register("business")}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {text.form.message.label}
                        </label>
                        <textarea
                          id="inquiry"
                          rows={4}
                          className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#7e072e] focus:border-[#7e072e]"
                          placeholder={text.form.message.placeholder}
                          {...register("inquiry", {
                            required: text.form.message.required,
                          })}
                        />
                        {errors.inquiry && (
                          <p className="mt-1 text-[#7e072e] text-sm">
                            {errors.inquiry.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#7e072e] hover:bg-[#6a0625] text-white font-bold p-4 rounded-md transition disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              {text.form.submitting}
                            </span>
                          ) : (
                            text.form.submit
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="h-[400px] relative">
        <iframe
          src="https://maps.google.com/maps?q=-6.2325222,106.9582556&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </div>
  );
}
