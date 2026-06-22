"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  duration: string;
  title: string;
  subtitle: string;
}

const experienceItems: TimelineItem[] = [
  {
    id: "exp-1",
    duration: "2022 - Present",
    title: "Lead Developer",
    subtitle: "Blockdots, London",
  },
  {
    id: "exp-2",
    duration: "2021 - 2022",
    title: "Full Stack Web Developer",
    subtitle: "Parsons, The New School",
  },
  {
    id: "exp-3",
    duration: "2020 - 2021",
    title: "UI Designer",
    subtitle: "House of Life, Leeds",
  },
  {
    id: "exp-4",
    duration: "2018 - 2020",
    title: "Junior Graphics Designer",
    subtitle: "Theme Junction, Russia",
  },
];

const educationItems: TimelineItem[] = [
  {
    id: "edu-1",
    duration: "2020 - 2023",
    title: "Programming Course",
    subtitle: "Harvard University",
  },
  {
    id: "edu-2",
    duration: "2016 - 2020",
    title: "Graphic Design Course",
    subtitle: "University of Art",
  },
  {
    id: "edu-3",
    duration: "2012 - 2015",
    title: "Web Design Course",
    subtitle: "University of California",
  },
  {
    id: "edu-4",
    duration: "2010 - 2011",
    title: "Design & Technology",
    subtitle: "Parsons, The New School",
  },
];

export default function Resume() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="resume" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple shadow-[0_0_15px_rgba(135,80,247,0.15)]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                My Experience
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {experienceItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-dark-card border border-accent-purple/10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:border-accent-purple/30 hover:shadow-[0_0_20px_rgba(135,80,247,0.08)]"
                >
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-purple/40 group-hover:bg-accent-purple transition-colors duration-300" />
                  <span className="text-sm font-bold text-accent-purple tracking-wider mb-2 block">
                    {item.duration}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent-light">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple shadow-[0_0_15px_rgba(135,80,247,0.15)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                My Education
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {educationItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-dark-card border border-accent-purple/10 rounded-2xl relative overflow-hidden group transition-all duration-300 hover:border-accent-purple/30 hover:shadow-[0_0_20px_rgba(135,80,247,0.08)]"
                >
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-accent-purple/40 group-hover:bg-accent-purple transition-colors duration-300" />
                  <span className="text-sm font-bold text-accent-purple tracking-wider mb-2 block">
                    {item.duration}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-accent-light">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
