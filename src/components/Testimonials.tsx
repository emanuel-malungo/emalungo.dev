"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Gerold is an exceptional developer. He took our complex product requirements and transformed them into a beautiful, performant web app. Our conversion rate increased by 40% after launch.",
    name: "Brandon Lewis",
    role: "CTO",
    company: "TechFlow Inc.",
    image: "/assets/images/client-avatar1.png",
  },
  {
    id: "test-2",
    quote:
      "Working with Gerold was a breeze. His design sensibilities combined with deep technical implementation details makes him a rare talent in the industry. Highly recommended!",
    name: "Emily Peterson",
    role: "Creative Director",
    company: "Design Studio",
    image: "/assets/images/client-avatar2.png",
  },
  {
    id: "test-3",
    quote:
      "The layout, performance, and interactive elements of our new portal exceeded expectations. Gerold delivered a highly refined site on time. Extremely satisfied with his work.",
    name: "Marcus Aurelius",
    role: "Product Owner",
    company: "Vercel Partner",
    image: "/assets/images/client-avatar1.png",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-dark-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-gradient-purple inline-block"
            >
              My Client's Stories
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

          {/* Nav Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-accent-purple/20 flex items-center justify-center text-white hover:bg-accent-purple hover:border-accent-purple hover:shadow-[0_0_15px_rgba(135,80,247,0.4)] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-accent-purple/20 flex items-center justify-center text-white hover:bg-accent-purple hover:border-accent-purple hover:shadow-[0_0_15px_rgba(135,80,247,0.4)] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1].map((offset) => {
            const index = (activeIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: offset === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: offset === 0 ? 30 : -30 }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-10 bg-dark-card border border-accent-purple/10 rounded-3xl relative flex flex-col justify-between hover:border-accent-purple/30 transition-all duration-300 shadow-xl"
              >
                {/* Quote Icon */}
                <Quote className="absolute right-8 top-8 w-16 h-16 text-accent-purple/10 pointer-events-none" />

                <p className="text-base sm:text-lg text-white leading-relaxed mb-8 relative z-10 font-medium italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent-purple/40">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-tight">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs text-accent-light">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-accent-purple w-6 shadow-[0_0_10px_rgba(135,80,247,0.5)]"
                  : "bg-accent-purple/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
