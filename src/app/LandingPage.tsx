import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}