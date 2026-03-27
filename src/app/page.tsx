"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavItem from "@/components/common/NavItem";
import AboutSection from "@/components/layout/About";
import SkillsSection from "@/components/layout/Skills";
import StackSection from "@/components/layout/Stack";
import PortfolioSection from "@/components/layout/Portfolio";
import CreativeSection from "@/components/layout/Creative";
import { FaCode, FaPalette, FaUser, FaBrain, FaFolderOpen } from "react-icons/fa";

const SECTIONS = {
  about: <AboutSection />,
  skills: <SkillsSection />,
  stack: <StackSection />,
  portfolio: <PortfolioSection />,
  creative: <CreativeSection />,
};

type SectionId = keyof typeof SECTIONS;

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [isScrolling, setIsScrolling] = useState(false);

  const sectionIds: SectionId[] = ["about", "skills", "stack", "portfolio", "creative"];

  const handleWheel = (e: React.WheelEvent | WheelEvent) => {
    if (isScrolling) return;

    const currentIndex = sectionIds.indexOf(activeSection);
    if (e.deltaY > 50 && currentIndex < sectionIds.length - 1) {
      // Scroll Down
      setIsScrolling(true);
      setActiveSection(sectionIds[currentIndex + 1]);
      setTimeout(() => setIsScrolling(false), 1000);
    } else if (e.deltaY < -50 && currentIndex > 0) {
      // Scroll Up
      setIsScrolling(true);
      setActiveSection(sectionIds[currentIndex - 1]);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  return (
    <div
      className="flex flex-col h-screen w-screen bg-linear-to-br from-primary via-cream to-gray-100 overflow-hidden"
      onWheel={handleWheel}
    >
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 mx-auto w-full md:max-w-7xl md:border-x md:border-black/5 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"></div>
        </div>

        {/* Global Sidebar Navigation */}
        <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-center p-2 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-sm z-50">
          <nav className="flex flex-col gap-4">
            <NavItem
              icon={<FaUser />}
              label="Sobre"
              active={activeSection === "about"}
              onClick={() => setActiveSection("about")}
            />
            <NavItem
              icon={<FaBrain />}
              label="Skills"
              active={activeSection === "skills"}
              onClick={() => setActiveSection("skills")}
            />
            <NavItem
              icon={<FaCode />}
              label="Stack"
              active={activeSection === "stack"}
              onClick={() => setActiveSection("stack")}
            />
            <NavItem
              icon={<FaFolderOpen />}
              label="Portfolio"
              active={activeSection === "portfolio"}
              onClick={() => setActiveSection("portfolio")}
            />
            <div className="w-6 h-px bg-gray-200 mx-auto my-1"></div>
            <NavItem
              icon={<FaPalette />}
              label="Creative"
              active={activeSection === "creative"}
              onClick={() => setActiveSection("creative")}
            />
          </nav>
        </aside>

        {/* Section Container with Transition */}
        <div className="w-full h-full flex flex-col items-center justify-center transition-all duration-500 ease-in-out px-4 md:px-0">
          <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-700 w-full h-full flex items-center justify-center">
            {SECTIONS[activeSection]}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

