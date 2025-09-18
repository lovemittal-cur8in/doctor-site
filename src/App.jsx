import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import JoinTeam from "./components/JoinTeam";
import ChooseUs from "./components/ChooseUs";
import OurVision from "./components/OurVision";
import OurApproach from "./components/OurApproach";
import OurStory from "./components/OurStory";
import NavigateButtons from "./components/NavigateButtons";
import WhyUs from "./components/WhyUs";

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <AboutSection/>
        <NavigateButtons/>
        <OurStory/>
        <OurApproach />
        <OurVision/>
        <WhyUs/>
        <ChooseUs/>
        <JoinTeam/>
        <FAQSection/>
        <Footer/>
      </div>
    </>
  );
}

export default App