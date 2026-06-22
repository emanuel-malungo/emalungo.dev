"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  percentage: string;
  svg: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: "Figma",
    percentage: "92%",
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
  {
    name: "Sketch",
    percentage: "80%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M50 85L85 45L75 15H25L15 45L50 85Z" fill="#FDD231" />
        <path d="M50 85L15 45L25 15H50V85Z" fill="#FDB32A" />
        <path d="M50 15H25L15 45L50 45V15Z" fill="#FCA326" />
        <path d="M50 15H75L85 45L50 45V15Z" fill="#FDAD2E" />
        <path d="M50 85L85 45L75 15H50V85Z" fill="#F3C12C" />
      </svg>
    ),
  },
  {
    name: "Adobe XD",
    percentage: "85%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#470137" />
        <path d="M32 30H46C52.6 30 57 34.4 57 41C57 47.6 52.6 52 46 52H40V70H32V30ZM40 45H46C48.8 45 50 43.8 50 41C50 38.2 48.8 37 46 37H40V45Z" fill="#FF61F6" />
        <path d="M60 45C60 36 65 30 73 30C81 30 86 36 86 45V55C86 64 81 70 73 70C65 70 60 64 60 55V45ZM67.5 55C67.5 61 69.5 64 73 64C76.5 64 78.5 61 78.5 55V45C78.5 39 76.5 36 73 36C69.5 36 67.5 39 67.5 45V55Z" fill="#FF61F6" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    percentage: "90%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <path d="M50 95C25.1 95 5 74.9 5 50C5 25.1 25.1 5 50 5C74.9 5 95 25.1 95 50C95 74.9 74.9 95 50 95ZM50 8.5C27.1 8.5 8.5 27.1 8.5 50C8.5 59.3 11.6 68 16.7 75L30.5 37.1H37.8L28.1 63.8L38.4 91.5C42.1 92.5 46 93 50 93C54 93 57.9 92.5 61.6 91.5L71.9 63.8L62.2 37.1H69.5L83.3 75C88.4 68 91.5 59.3 91.5 50C91.5 27.1 72.9 8.5 50 8.5ZM50 20.3C44.7 20.3 40.3 24.3 40.3 29C40.3 32.5 42 35.1 44.5 37.1L37.1 57.3L29.7 37.1C32.2 35.1 33.9 32.5 33.9 29C33.9 24.3 29.5 20.3 24.2 20.3C22 20.3 20 21.1 18.5 22.4C26.5 13.8 37.7 8.5 50 8.5C62.3 8.5 73.5 13.8 81.5 22.4C80 21.1 78 20.3 75.8 20.3C70.5 20.3 66.1 24.3 66.1 29C66.1 32.5 67.8 35.1 70.3 37.1L62.9 57.3L55.5 37.1C58 35.1 59.7 32.5 59.7 29C59.7 24.3 55.3 20.3 50 20.3Z" fill="#21759B" />
      </svg>
    ),
  },
  {
    name: "React",
    percentage: "89%",
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
    name: "JavaScript",
    percentage: "93%",
    svg: (
      <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="16" fill="#F7DF1E" />
        <path d="M68 62C68 53.8 74.2 52 79.2 52C84.2 52 86 54.4 86 58V62H79V58.5C79 57.5 78.2 56.8 77.2 56.8C76.2 56.8 75.5 57.5 75.5 58.5V64C75.5 67.3 78.2 70 81.5 70C84.8 70 87.5 67.3 87.5 64V46H81V50.5C79.5 48 77 46.5 73.5 46.5C65.5 46.5 61 52.5 61 62C61 71.5 65.5 77.5 73.5 77.5C77 77.5 79.5 76 81 73.5V78H87.5V73.5C87.5 76 90 77.5 93 77.5C96.5 77.5 99 75 99 71.5V62H92.5V71C92.5 72 91.8 72.8 90.8 72.8C89.8 72.8 89 72 89 71V62H68Z" fill="#000000" className="hidden" />
        <path d="M50 70C53 70 56 68.8 57.8 66L62.8 69.2C59.8 74.2 55.4 76.5 50 76.5C41 76.5 35 70.5 35 61C35 51.5 41 45.5 50 45.5C55.4 45.5 59.8 47.8 62.8 52.8L57.8 56C56 53.2 53 52 50 52C45.2 52 42.2 55.5 42.2 61C42.2 66.5 45.2 70 50 70ZM72 65C72 70 68 73 63.8 73C59.6 73 57.5 71 57.5 67H63.5C63.5 68 64.5 68.5 65.8 68.5C67 68.5 67.8 68 67.8 66.8C67.8 65 62 65.5 62 60.5C62 57.5 64.5 55 69 55C73.5 55 75.8 57.5 75.8 61.5H69.8C69.8 60.5 69 60 67.8 60C66.6 60 65.8 60.5 65.8 61.5C65.8 63 72 62.2 72 65.5V65Z" fill="#000000" />
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
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
            My Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-light"
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        {/* Skill Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
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
