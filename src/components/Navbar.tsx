"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Especialidades", href: "#services" },
  { label: "Projetos", href: "#works" },
  { label: "Currículo", href: "#resume" },
  { label: "Competências", href: "#skills" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for link highlighting
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(navItems[i].href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-dark-bg/80 backdrop-blur-md border-b border-accent-purple/10 py-3 lg:py-4"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo and Contact Email */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-linear-to-r from-accent-purple to-accent-dark flex items-center justify-center font-bold text-xl text-white shadow-[0_0_15px_rgba(135,80,247,0.3)] transition-transform group-hover:scale-105">
                E
              </div>
              <span className="text-sm font-medium text-accent-light group-hover:text-white transition-colors hidden sm:inline-block lg:hidden xl:inline-block">
                emalungo.dev
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-purple relative py-1 ${
                  activeSection === item.href ? "text-accent-purple" : "text-white"
                }`}
              >
                {item.label}
                {activeSection === item.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-purple rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Contact CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-accent-purple text-sm font-semibold text-white hover:bg-accent-purple transition-all duration-300 hover:shadow-[0_0_15px_rgba(135,80,247,0.4)]"
            >
              Fale Comigo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg lg:hidden text-white hover:text-accent-purple focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-[64px] h-[calc(100vh-64px)] z-40 bg-dark-bg/95 backdrop-blur-lg border-t border-accent-purple/10 lg:hidden overflow-y-auto"
          >
            <motion.nav
              initial="closed"
              animate="open"
              variants={{
                open: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="flex flex-col items-center justify-center min-h-full gap-6 p-6 pb-12"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-semibold transition-colors hover:text-accent-purple ${
                      activeSection === item.href ? "text-accent-purple" : "text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full flex justify-center mt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-8 py-3 rounded-full bg-linear-to-r from-accent-purple to-accent-dark text-white font-semibold shadow-[0_0_15px_rgba(135,80,247,0.3)] hover:shadow-[0_0_20px_rgba(135,80,247,0.5)] transition-all duration-300 w-full text-center max-w-[250px]"
                >
                  Fale Comigo
                </a>
              </motion.div>
              <motion.span
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm text-accent-light mt-8"
              >
                contato@emalungo.dev
              </motion.span>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

