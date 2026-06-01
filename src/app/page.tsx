"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/layout/About";
import SkillsSection from "@/components/layout/Skills";
import StackSection from "@/components/layout/Stack";
import PortfolioSection from "@/components/layout/Portfolio";
import AuroraGlow from "@/components/ui/AuroraGlow";
import { HeroScene } from "@/components/common/QuantumScene";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden bg-[#FFFBF5]">
      <Header />

      {/* Full-width Hero fold with the premium dark neon background and glowing dome */}
      <section id="about" className="relative w-full min-h-screen flex items-center justify-center bg-[#07070A] overflow-hidden pt-16 pb-12">
        {/* Custom high-fidelity Aurora Glow arc effect */}
        <AuroraGlow />

        {/* Subtle 3D constellation overlay */}
        <div className="absolute inset-0 z-[1] opacity-60 pointer-events-none">
          <HeroScene />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center">
          <AboutSection />
        </div>
      </section>

      {/* Main container for the rest of the sections */}
      <main className="flex-1 mx-auto w-full lg:max-w-7xl lg:border-x lg:border-gray-300 relative flex flex-col px-4 sm:px-4 md:px-6 pt-8 md:pt-10 bg-[#FFFBF5]">
        {/* Sections rendered sequentially */}
        <div className="w-full flex flex-col items-center">
          <section id="skills" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-300">
            <SkillsSection />
          </section>

          <section id="stack" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-300">
            <StackSection />
          </section>

          <section id="portfolio" className="w-full py-16 sm:py-24 lg:py-32">
            <PortfolioSection />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
