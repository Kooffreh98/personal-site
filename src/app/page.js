"use client"
import "./global.css";
import Navbar from "./components/Navbar";
import Homecontainer from "./components/Homecontainer";
import About from "./components/about component/About";
import Footer from "./components/Footer";
import Skills from "./components/skill component/Skills";
import Services from "./components/Services comp/Services";
import ContactUs from "./components/contact comp/ContactUs";
import Portfolio from "./components/portfolio comp/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />

      <Homecontainer />

      <About />

      <Skills />

      <Services />

      <Portfolio />

      <ContactUs />

      <Footer />

    </>
  );
}
