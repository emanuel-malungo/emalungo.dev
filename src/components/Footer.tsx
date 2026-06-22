"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 bg-dark-bg border-t border-accent-purple/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
        {/* Centered Logo */}
        <div className="w-12 h-12 rounded-full bg-linear-to-r from-accent-purple to-accent-dark flex items-center justify-center font-bold text-2xl text-white shadow-[0_0_15px_rgba(135,80,247,0.3)]">
          E
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-semibold text-accent-light">
          {[
            { label: "Especialidades", href: "#services" },
            { label: "Projetos", href: "#works" },
            { label: "Currículo", href: "#resume" },
            { label: "Competências", href: "#skills" },
            { label: "Depoimentos", href: "#testimonials" },
            { label: "Contacto", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-accent-light/60 text-center">
          © {new Date().getFullYear()} All Rights Reserved. Designed & Developed by{" "}
          <span className="text-accent-purple font-semibold">Emanuel Malungo</span>.
        </p>
      </div>
    </footer>
  );
}
