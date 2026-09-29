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
    link: "https://igrupowebsite.vercel.app/",
  },
  {
    id: "2",
    title: "EXPRESSME - Plataforma de Gestão",
    subtitle: "Web / Full Stack",
    description: "Aplicação completa para gestão de tarefas, utilizadores, notificações e preferências com API REST em Node.js/TypeScript, frontend em Next.js e app móvel Expo React Native.",
    tags: ["Node.js", "TypeScript", "Prisma", "Next.js", "Tailwind", "React Native"],
    category: "Web",
    image: "",
    link: "https://expressmef.vercel.app/login",
  },
  {
    id: "3",
    title: "Mukanda",
    subtitle: "Serviços / Sustentabilidade",
    description: "Plataforma inovadora que conecta clientes a profissionais de serviços domésticos com foco em sustentabilidade ecológica. Sistema de agendamento inteligente, avaliações e eco-práticas.",
    tags: ["Next.js", "TypeScript", "Firebase"],
    category: "Web",
    image: "/assets/images/project-bigger.png",
    link: "https://mukanda-one.vercel.app/",
  },
  {
    id: "4",
    title: "Inception — Infraestrutura Docker",
    subtitle: "DevOps / Infraestrutura",
    description: "Infraestrutura de administração de sistemas em Docker Compose da 42. Orquestração de containers isolados (NGINX TLS 1.2/1.3, WordPress + PHP-FPM, MariaDB) com redes privadas e volumes de dados persistentes.",
    tags: ["Docker", "Docker Compose", "NGINX", "PHP-FPM", "MariaDB", "Linux"],
    category: "Backend",
    image: "",
    link: "https://github.com/emanuel-malungo/Inception",
  },
  {
    id: "5",
    title: "Twice Line — E-commerce",
    subtitle: "Frontend / Web",
    description: "Plataforma de e-commerce moderna para o mercado angolano. Desenvolvimento de interfaces responsivas, catálogo interativo de produtos, sistema de busca e galeria com Blade, Tailwind CSS e Alpine.js.",
    tags: ["Frontend", "Tailwind CSS", "Alpine.js", "Blade", "Laravel"],
    category: "Web",
    image: "",
    link: "https://github.com/AntonioSebastiaoPedro/twice-line",
  },
  {
    id: "6",
    title: "SGETI — Gestão Escolar (INFQE)",
    subtitle: "Backend / Full Stack",
    description: "Sistema empresarial completo de gestão escolar para instituições do II Ciclo em Angola. Controlo de matrículas, pautas, exames, turmas, emissão de certificados em PDF (DomPDF) e licenças.",
    tags: ["Laravel", "PHP", "MySQL", "DomPDF", "Blade"],
    category: "Backend",
    image: "",
    link: "https://prod.escola.shopall.ao/admin",
  },
];


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

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="group relative bg-dark-card border border-accent-purple/10 rounded-md overflow-hidden shadow-lg flex flex-col justify-between block hover:border-accent-purple/30 hover:shadow-[0_0_20px_rgba(135,80,247,0.1)] transition-all duration-300"
              >
                {/* Background purple glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                {/* Info Text */}
                <div className="relative z-10 p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-semibold text-accent-purple tracking-wider uppercase">
                        {project.subtitle}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-accent-light leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Tech Tags */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-[11px] px-2 py-0.5 bg-accent-purple/10 border border-accent-purple/20 text-accent-purple rounded-md font-medium"
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
