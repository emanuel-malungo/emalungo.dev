"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  percentage: string;
  svg: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "React.js",
    percentage: "92%",
    svg: (
      <svg className="w-10 h-10 animate-spin" style={{ animationDuration: '20s' }} viewBox="0 0 100 100" fill="none">
        <path d="M50 42C54.4 42 58 38.4 58 34C58 29.6 54.4 26 50 26C45.6 26 42 29.6 42 34C42 38.4 45.6 42 50 42Z" fill="#61DAFB" />
        <path d="M50 15C73 15 91.5 22.4 91.5 31.5C91.5 40.6 73 48 50 48C27 48 8.5 40.6 8.5 31.5C8.5 22.4 27 15 50 15ZM50 21C32.3 21 18.5 25.7 18.5 31.5C18.5 37.3 32.3 42 50 42C67.7 42 81.5 37.3 81.5 31.5C81.5 25.7 67.7 21 50 21Z" fill="#61DAFB" />
        <path d="M19.8 32.4C31.3 12.5 50.6 1.8 63 8.8C75.3 15.8 76.1 38 64.6 57.8C53.1 77.7 33.8 88.4 21.4 81.4C9.1 74.4 8.3 52.2 19.8 32.4ZM25 35.4C16.2 50.7 17.5 67.4 25 71.7C32.5 76 45.3 66.2 54.1 50.9C62.9 35.6 61.6 18.9 54.1 14.6C46.6 10.3 33.8 20.1 25 35.4Z" fill="#61DAFB" />
        <path d="M80.2 32.4C68.7 12.5 49.4 1.8 37 8.8C24.7 15.8 23.9 38 35.4 57.8C46.9 77.7 66.2 88.4 78.6 81.4C90.9 74.4 91.7 52.2 80.2 32.4ZM75 35.4C66.2 20.1 53.4 10.3 45.9 14.6C38.4 18.9 37.1 35.6 45.9 50.9C54.7 66.2 67.5 76 75 71.7C82.5 67.4 83.8 50.7 75 35.4Z" fill="#61DAFB" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    percentage: "90%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="47" stroke="white" strokeWidth="6" />
        <path d="M75 70L42.5 30H35V70H41V40.5L70.5 76.5C72 74.5 73.5 72.5 75 70Z" fill="white" />
        <rect x="63" y="30" width="6" height="40" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    percentage: "88%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M50 10L15 30.2V70.8L50 91L85 70.8V30.2L50 10ZM75.5 65.3L50 80L24.5 65.3V35.7L50 21L75.5 35.7V65.3Z" fill="#339933" />
        <path d="M50 31L35 39.7V57.3L50 66L65 57.3V39.7L50 31ZM59.5 54.2L50 59.7L40.5 54.2V45.8L50 40.3L59.5 45.8V54.2Z" fill="#339933" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    percentage: "90%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#3178C6" />
        <path d="M70 54.5C70 51.5 68 50.5 65.2 50.5C62.4 50.5 61 51.5 61 53.5C61 55.5 62.5 56.5 65.5 57.5C69.5 58.8 72.5 60.5 72.5 65C72.5 69.5 69 72.5 63.5 72.5C58 72.5 55 69.5 55 65H60.5C60.5 67 61.5 67.5 63.5 67.5C65.5 67.5 66.5 66.5 66.5 65.5C66.5 64.5 65.5 64 63.5 63.2C59.5 61.8 56.5 60 56.5 55.5C56.5 51.5 59.5 48.5 65 48.5C70.5 48.5 73.5 51.5 73.5 55.5H68V54.5H70ZM38 72.5V36H24V30H60V36H46V72.5H38Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    percentage: "85%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M50 8C26.8 8 8 26.8 8 50C8 73.2 26.8 92 50 92C73.2 92 92 73.2 92 50C92 26.8 73.2 8 50 8ZM73.5 51.5C73.5 61.2 66.8 68.5 58 68.5H48V54H41V47H48V40H58C66.8 40 73.5 47.2 73.5 57V51.5Z" fill="#336791" />
      </svg>
    ),
  },
  {
    name: "Docker",
    percentage: "80%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M92 48C92 38.6 85.3 32 77 32C76 32 75.1 32.1 74.2 32.4C71.3 26.2 64.8 22 57.5 22C51.5 22 46.1 24.8 42.7 29.5C40.6 28.5 38.3 28 35.8 28C28.2 28 22 34.2 22 41.8C22 42.6 22.1 43.4 22.2 44.1C13.2 45.4 6 53.2 6 62.7C6 72.8 14.2 81 24.3 81H78.7C86 81 92 75 92 67.7V48ZM30 52H38V60H30V52ZM42 52H50V60H42V52ZM54 52H62V60H54V52ZM66 52H74V60H66V52ZM30 40H38V48H30V40ZM42 40H50V48H42V40ZM54 40H62V48H54V40ZM30 28H38V36H30V28Z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "React Native",
    percentage: "85%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#000020" />
        <path d="M50 20L80 37.3V72L50 89.3L20 72V37.3L50 20ZM50 27.5L28.7 39.8V64.5L50 76.8L71.3 64.5V39.8L50 27.5Z" fill="#FFFFFF" />
        <path d="M50 37L63.5 44.8V60.5L50 68.3L36.5 60.5V44.8L50 37Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Figma",
    percentage: "82%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M37.5 75C44.4 75 50 69.4 50 62.5V50H37.5C30.6 50 25 55.6 25 62.5C25 69.4 30.6 75 37.5 75Z" fill="#0ACF83" />
        <path d="M25 37.5C25 30.6 30.6 25 37.5 25H50V50H37.5C30.6 50 25 44.4 25 37.5Z" fill="#F24E1E" />
        <path d="M50 25H62.5C69.4 25 75 30.6 75 37.5C75 44.4 69.4 50 62.5 50H50V25Z" fill="#FF7262" />
        <path d="M75 62.5C75 69.4 69.4 75 62.5 75C55.6 75 50 69.4 50 62.5V50H62.5C69.4 50 75 55.6 75 62.5Z" fill="#1ABCFE" />
        <path d="M50 50V62.5C50 69.4 44.4 75 37.5 75C30.6 75 25 69.4 25 62.5V50H50Z" fill="#A259FF" />
      </svg>
    ),
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="skills" className="py-24 bg-dark-bg/50 relative">
      {/* Background Decorative Blob */}
      <div className="absolute top-[30%] left-[5%] w-[300px] h-[300px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-gradient-purple inline-block"
          >
            Minhas Competências
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-light"
          >
            Trabalho com as melhores tecnologias do mercado para entregar soluções robustas, escaláveis e de alta qualidade técnica.
          </motion.p>
        </div>

        {/* Skill Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="p-6 bg-dark-card border border-accent-purple/10 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 hover:border-accent-purple/40 hover:shadow-[0_0_20px_rgba(135,80,247,0.12)]"
            >
              {/* Skill SVG Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-dark-bg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.svg}
              </div>

              {/* Skill Percentage */}
              <span className="text-xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">
                {skill.percentage}
              </span>

              {/* Skill Name */}
              <span className="text-xs font-semibold text-accent-light tracking-wide uppercase">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
