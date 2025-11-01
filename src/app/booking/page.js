"use client";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";

const Booking = dynamic(() => import("@/components/ui/Screens/BookingScreen/Booking"), {
  ssr: false,
});

export default function BookingPage() {

  return (
    <>
      <Header />
      <Booking />
      <Footer />
    </>
  );
}
