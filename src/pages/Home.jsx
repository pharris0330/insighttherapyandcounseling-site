import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import QuoteSection from "../components/home/QuoteSection";
import GetStartedSection from "../components/home/GetStartedSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <QuoteSection />
      <GetStartedSection />
      <CTASection />
      <Footer />
    </div>
  );
}