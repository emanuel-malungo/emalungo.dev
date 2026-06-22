"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

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
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="text-gradient-purple block">Emanuel Malungo</span>
            <span className="text-white block mt-2 text-xl sm:text-3xl lg:text-4xl">Desenvolvedor Full Stack</span>
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
              href="/assets/doc/emalungo_cv_resumo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full bg-linear-to-r from-accent-purple to-accent-dark text-white font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(135,80,247,0.3)] hover:shadow-[0_0_25px_rgba(135,80,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Descarregar CV <Download className="w-4 h-4" />
            </a>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  name: "github",
                  icon: <SiGithub className="w-5 h-5" />,
                  url: "https://github.com/emanuel-malungo",
                },
                {
                  name: "linkedin",
                  icon: <FaLinkedin className="w-5 h-5" />,
                  url: "https://www.linkedin.com/in/emanuel-malungo-51b490298/",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-accent-purple/30 flex items-center justify-center text-accent-purple hover:text-white hover:bg-accent-purple hover:border-accent-purple transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
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
          <div className="relative w-[250px] h-[250px] min-[360px]:w-[280px] min-[360px]:h-[280px] sm:w-[380px] sm:h-[380px] group">
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
                src="/assets/images/avatar.png"
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
            { value: "15+", label: "Tecnologias Dominadas" },
            { value: "Top 6", label: "GitHub em Angola" },
            { value: "42", label: "Estudante 42 Luanda" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center md:items-start lg:items-center gap-4 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-accent-light max-w-[120px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
