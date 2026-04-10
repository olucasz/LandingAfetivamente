import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Professionals from "../components/Professionals/Professionals";
import OnlineCare from "../components/OnlineCare/OnlineCare";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Professionals />
      <OnlineCare />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
