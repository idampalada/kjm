import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import PartnerSection from "../components/sections/PartnerSection";
import TransportationServiceSection from "../components/sections/TransportationServiceSection";
import AboutSection from "../components/sections/AboutSection";
import ContactForm from "../components/sections/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnerSection />
      <TransportationServiceSection />
      <AboutSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
