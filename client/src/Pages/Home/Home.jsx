/** @format */

import React from "react";
import HeroSection from "../../Components/HeroSection";
import Cards from "../../Components/Cards";
import Feature from "../../Components/Feature";
import FAQ from "../../Components/FAQ";
import Community from "../../Components/Community";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Feature />
      <FAQ />
      <Community />
    </div>
  );
}
