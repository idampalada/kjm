import type { Metadata } from "next";
import ContactPage from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak Kami",
  description:
    "Hubungi KJM Logistic (PT Khazmans Jaya Mandiri) untuk kebutuhan jasa transportasi dan logistik Anda. Alamat: Jl. Bintara XI No. 131, Bekasi Barat, Jawa Barat.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
