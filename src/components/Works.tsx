"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Deloitte Website Redesign",
    category: "UX/UI",
    image: "/assets/images/project-deloitte.png",
    link: "#",
  },
  {
    id: "2",
    title: "Grow Business Analytics Platform",
    category: "Branding",
    image: "/assets/images/project-grow.png",
    link: "#",
  },
  {
    id: "3",
    title: "Sebastian D'Amargo Mobile App",
    category: "Apps",
    image: "/assets/images/project-sebastian.png",
    link: "#",
  },
  {
    id: "4",
    title: "Bigger, Bolder and Better Campaign",
    category: "UX/UI",
    image: "/assets/images/project-bigger.png",
    link: "#",
  },
];

const categories = ["All", "UX/UI", "Branding", "Apps"];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-gradient-purple inline-block"
          >
            My Recent Works
          </motion.h2>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-2 p-1.5 bg-dark-card border border-accent-purple/10 rounded-full">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                    isActive ? "text-white" : "text-accent-light hover:text-white"
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent-purple rounded-full -z-10 shadow-[0_0_12px_rgba(135,80,247,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="group relative bg-dark-card border border-accent-purple/10 rounded-3xl overflow-hidden shadow-lg p-6 flex flex-col justify-between"
              >
                {/* Background purple glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                {/* Project Image Box */}
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden z-10 bg-[#160f26]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Image hover overlay */}
                  <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent-purple flex items-center justify-center text-white shadow-[0_0_15px_rgba(135,80,247,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <div className="relative z-10 mt-6 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-semibold text-accent-purple tracking-widest uppercase mb-1.5 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
