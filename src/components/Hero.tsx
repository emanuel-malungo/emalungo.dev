"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center md:text-left order-2 md:order-1"
        >
          <motion.h4
            variants={itemVariants}
            className="text-lg md:text-xl font-semibold text-white mb-2"
          >
            Olá, eu sou o
          </motion.h4>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="text-gradient-purple block">Emanuel Malungo</span>
            <span className="text-white block mt-2 text-2xl sm:text-3xl lg:text-4xl">Desenvolvedor Full Stack</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-accent-light max-w-xl mb-8 leading-relaxed"
          >
            Desenvolvedor de Software com mais de 3 anos de experiência no desenvolvimento de aplicações web, mobile e sistemas empresariais. Estudante de Engenharia de Software na 42 Luanda.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start"
          >
            <a
              href="#"
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-accent-purple to-accent-dark text-white font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(135,80,247,0.3)] hover:shadow-[0_0_25px_rgba(135,80,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Descarregar CV <Download className="w-4 h-4" />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  name: "facebook",
                  svg: (
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  ),
                  url: "#",
                },
                {
                  name: "twitter",
                  svg: (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  ),
                  url: "#",
                },
                {
                  name: "linkedin",
                  svg: (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                  ),
                  url: "#",
                },
                {
                  name: "behance",
                  svg: (
                    <path d="M22 7h-7v1.5h7v-1.5zm-1.5 5.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-5.5-2.25c0-.966-.784-1.75-1.75-1.75h-3.25v3.5h3.25c.966 0 1.75-.784 1.75-1.75zm-1.75 4.75c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75h-3.25v3.5h3.25zm10.75-3.5c-.966 0-1.75.784-1.75 1.75v3.25c0 .966.784 1.75 1.75 1.75s1.75-.784 1.75-1.75v-3.25c0-.966-.784-1.75-1.75-1.75zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 15.5c0 1.933-1.567 3.5-3.5 3.5h-5.5v-10h5.5c1.933 0 3.5 1.567 3.5 3.5v3zm7 0c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5v-3.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v3.5z" />
                  ),
                  url: "#",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-11 h-11 rounded-full border border-accent-purple/30 flex items-center justify-center text-accent-purple hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    {social.svg}
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center order-1 md:order-2"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] group">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent-purple/20 rounded-[40px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glowing Border Frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-accent-purple to-accent-dark opacity-80"
            />

            {/* Image Wrapper */}
            <div className="absolute inset-[3px] bg-dark-bg rounded-[37px] overflow-hidden">
              <Image
                src="/assets/images/hero-portrait.png"
                alt="Emanuel Malungo Portrait"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto px-6 w-full mt-16 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-accent-purple/10"
        >
          {[
            { value: "3+", label: "Anos de Experiência" },
            { value: "10+", label: "Projetos Concluídos" },
            { value: "Top 6", label: "GitHub em Angola" },
            { value: "42", label: "Estudante 42 Luanda" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center md:items-start lg:items-center gap-4 text-center sm:text-left">
              <span className="text-4xl sm:text-5xl font-extrabold text-white leading-none">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-accent-light max-w-[120px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
