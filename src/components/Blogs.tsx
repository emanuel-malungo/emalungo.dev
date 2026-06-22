"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

const blogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Rise of Technology in Modern Web Systems",
    category: "Technology",
    date: "Jun 22, 2026",
    image: "/assets/images/blog1.png",
    link: "#",
  },
  {
    id: "blog-2",
    title: "Top Services Practices for Design Systems in 2026",
    category: "Design",
    date: "Jun 15, 2026",
    image: "/assets/images/blog2.png",
    link: "#",
  },
  {
    id: "blog-3",
    title: "Digital Products That Connect Billions of People",
    category: "Marketing",
    date: "Jun 02, 2026",
    image: "/assets/images/blog3.png",
    link: "#",
  },
];

export default function Blogs() {
  const containerVariants = {
    hidden: {},
    visible: {
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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="blogs" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 text-gradient-purple inline-block"
          >
            Recent Blogs
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

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={itemVariants}
              className="group cursor-pointer bg-dark-card border border-accent-purple/10 rounded-3xl overflow-hidden hover:border-accent-purple/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              {/* Image Header */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#160f26]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-accent-purple/80 backdrop-blur-md rounded-full shadow-[0_0_10px_rgba(135,80,247,0.3)]">
                  {blog.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-accent-light mb-2 block">
                    {blog.date}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-accent-purple transition-colors duration-300 leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-accent-purple mt-4 group-hover:text-white transition-colors duration-300">
                  Read Article <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
