import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Featured from "@/components/ui/Screens/HomeScreen/Featured";
import Hero from "@/components/ui/Screens/ServiceScreen/Hero";

export default function Service() {
  return (
    <>
      <Header />
      <Hero />
      <Featured toDisp={"no"} />
      <Footer />
    </>
  )
}