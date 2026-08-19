import type { Metadata } from "next";
import AboutUsPage from "./AboutUsClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "KJM Logistic (PT Khazmans Jaya Mandiri) telah melayani jasa transportasi dan logistik di Indonesia sejak 2006, terpercaya oleh berbagai industri untuk pengiriman darat, laut, dan udara.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function Page() {
  return <AboutUsPage />;
}
