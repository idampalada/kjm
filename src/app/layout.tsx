import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kjmlogistic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KJM Logistic - PT Khazmans Jaya Mandiri | Jasa Transportasi & Logistik Indonesia",
    template: "%s | KJM Logistic",
  },
  description:
    "KJM Logistic (PT Khazmans Jaya Mandiri) adalah perusahaan jasa transportasi dan logistik terpercaya di Indonesia sejak 2006, melayani pengiriman via darat, laut, dan udara ke seluruh domestik.",
  keywords: [
    "KJM Logistic",
    "KJM Logistics",
    "Khazmans Jaya Mandiri",
    "jasa transportasi Indonesia",
    "jasa logistik Indonesia",
    "pengiriman barang domestik",
    "trucking Indonesia",
    "ekspedisi Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "KJM Logistic",
    title: "KJM Logistic - PT Khazmans Jaya Mandiri | Jasa Transportasi & Logistik Indonesia",
    description:
      "Perusahaan jasa transportasi dan logistik terpercaya di Indonesia sejak 2006, melayani pengiriman via darat, laut, dan udara.",
    images: [
      {
        url: "/images/kjmlogo.png",
        width: 800,
        height: 400,
        alt: "KJM Logistic - PT Khazmans Jaya Mandiri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KJM Logistic - PT Khazmans Jaya Mandiri",
    description:
      "Perusahaan jasa transportasi dan logistik terpercaya di Indonesia sejak 2006.",
    images: ["/images/kjmlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "gcrfgesQtqP6kgnXMgLLHODyRwksjMJ8E-kw7-X9FX8",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KJM Logistic",
  legalName: "PT Khazmans Jaya Mandiri",
  alternateName: "Khazmans Jaya Mandiri",
  url: siteUrl,
  logo: `${siteUrl}/images/kjmlogo.png`,
  foundingDate: "2010-11",
  description:
    "Perusahaan jasa transportasi dan logistik di Indonesia, melayani pengiriman via darat, laut, dan udara sejak 2006.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Bintara XI No. 131 RT. 02 RW. 05",
    addressLocality: "Bekasi Barat",
    addressRegion: "Jawa Barat",
    postalCode: "17134",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-21-89465873",
    contactType: "customer service",
    email: "khazmansjayamandiri@gmail.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
