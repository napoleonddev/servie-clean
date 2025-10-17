import Header from "@/components/ui/Header";
import Hero from "../components/ui/Hero";
import Service from "@/components/ui/Service";
import Experience from "@/components/ui/Experience";
import Booking from "@/components/ui/Booking";
import Featured from "@/components/ui/Featured";
import Team from "@/components/ui/Team";
import Testimonails from "@/components/ui/Testimonails";
import Footer from "@/components/ui/Footer";
import PriceSection from "@/components/ui/PrcieSection";
import StatisticsSection from "@/components/ui/StatisticsSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Service />
      <Experience />
      <PriceSection />
      <Booking />
      <StatisticsSection />
      <Team />
      <Testimonails />
      <Footer />
    </>
  );
}
