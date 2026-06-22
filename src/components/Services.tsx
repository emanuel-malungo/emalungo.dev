"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "01",
    title: "Branding Design",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.",
  },
  {
    id: "03",
    title: "Web Design",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.",
  },
  {
    id: "04",
    title: "App Design",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-dark-bg/30 relative">
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
            My Quality Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-accent-light"
          >
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and your customers.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="flex flex-col border-t border-accent-purple/20">
          {servicesList.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-8 md:py-10 border-b border-accent-purple/20 cursor-pointer overflow-hidden transition-colors duration-300"
              >
                {/* Background Hover Gradient Transition */}
                <motion.div
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? "0%" : "-100%",
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-dark/30 z-0 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-8">
                  {/* Number & Title */}
                  <div className="flex items-center gap-6 md:gap-12 md:w-1/3">
                    <span
                      className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                        isHovered ? "text-white" : "text-accent-purple"
                      }`}
                    >
                      {service.id}
                    </span>
                    <h3
                      className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                        isHovered ? "text-white animate-pulse" : "text-white"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm md:text-base md:w-1/2 leading-relaxed transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-accent-light"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="md:w-1/12 flex md:justify-end">
                    <motion.div
                      animate={{
                        rotate: isHovered ? 45 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${
                        isHovered
                          ? "bg-white border-white text-accent-purple"
                          : "border-accent-purple/40 text-accent-purple"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
