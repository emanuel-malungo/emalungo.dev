"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/layout/About";
import SkillsSection from "@/components/layout/Skills";
import StackSection from "@/components/layout/Stack";
import PortfolioSection from "@/components/layout/Portfolio";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex-1 mx-auto w-full lg:max-w-7xl lg:border-x lg:border-black/5 relative flex flex-col px-2 sm:px-4 md:px-6 pt-8 md:pt-10">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-gray-300/20 rounded-full blur-3xl"></div>
        </div>

        {/* Sections rendered sequentially */}
        <div className="w-full flex flex-col items-center">
            <section id="about" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <AboutSection />
            </section>

            <section id="skills" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-100">
                <SkillsSection />
            </section>

            <section id="stack" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-100">
                <StackSection />
            </section>

            <section id="portfolio" className="w-full py-16 sm:py-24 lg:py-32 border-b border-gray-100">
                <PortfolioSection />
            </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
