"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-dark-bg min-h-screen text-white relative overflow-x-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Services />
        <Works />
        <Resume />
        <Skills />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
