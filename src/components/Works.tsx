"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Website Grupo Inácios",
    subtitle: "Web Design / Branding",
    description: "Site informativo que apresenta o Grupo Inácios e suas 6 empresas especializadas em fotografia, produção audiovisual, marketing digital, eventos, formação e tecnologia. Facilita o conhecimento do grupo e contato com clientes.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "/assets/images/project-grow.png",
    link: "https://github.com/emanuel-malungo",
  },
  {
    id: "2",
    title: "VIA - Orientação Vocacional",
    subtitle: "Education / AI",
    description: "Aplicativo inteligente que ajuda estudantes a descobrir o curso ideal através de questionário personalizado e análise por IA usando Google Gemini.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    image: "/assets/images/project-deloitte.png",
    link: "https://github.com/emanuel-malungo",
  },
  {
    id: "3",
    title: "Mukanda",
    subtitle: "Serviços / Sustentabilidade",
    description: "Plataforma inovadora que conecta clientes a profissionais de serviços domésticos com foco em sustentabilidade ecológica. Sistema de agendamento inteligente, avaliações e eco-práticas.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    category: "Web",
    image: "/assets/images/project-bigger.png",
    link: "https://github.com/emanuel-malungo",
  },
  {
    id: "4",
    title: "Kintwadi",
    subtitle: "Mobile / Social",
    description: "Aplicativo mobile de relacionamentos e amizades desenvolvido para valorizar a cultura angolana, promovendo conexões reais entre pessoas que compartilham tradições e interesses. 🚧 Em desenvolvimento.",
    tags: ["React Native", "Firebase"],
    category: "Mobile",
    image: "/assets/images/project-sebastian.png",
    link: "https://github.com/emanuel-malungo",
  },
  {
    id: "5",
    title: "JoMorais Backend",
    subtitle: "Backend / API",
    description: "API RESTful de gestão escolar com autenticação segura, gestão de alunos, pagamentos, notas e avaliações. Docker e Prisma para desenvolvimento otimizado.",
    tags: ["Node.js", "Express", "Prisma"],
    category: "Backend",
    image: "/assets/images/blog1.png",
    link: "https://github.com/emanuel-malungo",
  },
  {
    id: "6",
    title: "Higienix",
    subtitle: "Mobile / App",
    description: "Aplicação mobile para gerenciar serviços de higiene e limpeza. Painéis para clientes agendarem serviços e funcionários gerenciarem perfis e agendamentos.",
    tags: ["React Native", "TypeScript", "Expo"],
    category: "Mobile",
    image: "/assets/images/blog2.png",
    link: "https://github.com/emanuel-malungo",
  },
];

const categories = ["Todos", "Web", "Mobile", "Backend"];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
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
            Projectos & Portfolio
          </motion.h2>
          <p className="text-accent-light text-sm sm:text-base mt-2">
            Explore alguns dos meus trabalhos e projetos recentes.
          </p>
        </div>

        {/* Categories Tab Filter */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-1 sm:gap-2 p-1.5 bg-dark-card border border-accent-purple/10 rounded-full">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors duration-300 ${
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
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                key={project.id}
                className="group relative bg-dark-card border border-accent-purple/10 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between block hover:border-accent-purple/30 hover:shadow-[0_0_20px_rgba(135,80,247,0.1)] transition-all duration-300"
              >
                {/* Background purple glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                {/* Info Text */}
                <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-semibold text-accent-purple tracking-wider uppercase">
                        {project.subtitle}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent-purple transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2.5 py-1 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer GitHub CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-3">
          <a
            href="https://github.com/emanuel-malungo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full bg-linear-to-r from-accent-purple to-accent-dark text-white font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(135,80,247,0.3)] hover:shadow-[0_0_25px_rgba(135,80,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            Ver todos projectos 
            <SiGithub className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
          <span className="text-sm font-medium text-accent-light text-center">
            Explore mais no meu GitHub
          </span>
        </div>
      </div>
    </section>
  );
}
