"use client";

import Header from "@/components/ui/Header";
import Hero from "../components/ui/Screens/HomeScreen/Hero";
import Service from "@/components/ui/Screens/HomeScreen/Service";
import Experience from "@/components/ui/Screens/HomeScreen/Experience";
import Booking from "@/components/ui/Screens/HomeScreen/Booking";
import Team from "@/components/ui/Team";
import Testimonails from "@/components/ui/Screens/HomeScreen/Testimonails";
import Footer from "@/components/ui/Footer";
import PriceSection from "@/components/ui/Screens/HomeScreen/PrcieSection";
import StatisticsSection from "@/components/ui/StatisticsSection";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  

  const bookingRef = useRef(null);
  const router = useRouter();

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToBooking = () => {
    router.push('/booking');
  };

  useEffect(() => {
    if (window.location.hash === "#booking" && bookingRef.current) {
      setTimeout(() => {
        bookingRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  const homeStats = [
    { id: 1, label: "Happy Clients", value: 157, color: "#98b278" },
    { id: 2, label: "Expert Workers", value: 63, color: "#98b278" },
    { id: 3, label: "Projects Done", value: 189, color: "#98b278" },
    { id: 4, label: "Years Of Experience", value: 7, color: "#98b278" },
  ];

  return (
    <>
      <Header />
      <Hero onGetStarted={goToBooking} />
      {/* <div ref={serviceRef}> */}
      <Service onGetStarted={goToBooking} />
      {/* </div> */}
      <Experience />
      {/* <div ref={bookingRef} id="booking-section">
        <PriceSection />
      </div> */}
      {/* <Booking /> */}
      <StatisticsSection statsData={homeStats} bg="#f8f9fa" textColor="#000" />
      {/* <Team /> */}
      <Testimonails />
      <Footer />
    </>
  );
}
