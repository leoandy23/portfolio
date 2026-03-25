import React from "react";
import Navbar from "../components/sections/Navbar";
import HeroImage from "../components/sections/HeroImage";
import About from "../components/sections/About";
import Works from "../components/sections/Works";
import Services from "../components/sections/Services";
import TechStackSection from "../components/sections/TechStackSection";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <About></About>
      <Works></Works>
      <Services></Services>
      <TechStackSection></TechStackSection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
