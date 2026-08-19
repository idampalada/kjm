import type { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Layanan transportasi dan logistik KJM Logistic (PT Khazmans Jaya Mandiri): pengiriman via darat, laut, dan udara ke seluruh wilayah Indonesia.",
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
