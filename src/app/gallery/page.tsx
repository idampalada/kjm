import type { Metadata } from "next";
import GalleryPage from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Dokumentasi kegiatan dan armada KJM Logistic (PT Khazmans Jaya Mandiri) dalam melayani jasa transportasi dan logistik di Indonesia.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function Page() {
  return <GalleryPage />;
}
