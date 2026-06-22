
"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Lightbulb, 
  Users, 
  RefreshCw, 
  Brain, 
  Clock,
  MonitorSmartphone,
  Palette,
  Cpu,
  Key,
  Link,
  Code,
  Layers,
  Box,
  Boxes,
  Database,
  AlertTriangle,
  ShieldCheck,
  FileText,
  MousePointer,
  Play,
  History,
  ClipboardList,
  Bug,
  CheckCircle,
  Award,
  Infinity,
  Kanban
} from "lucide-react";
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiExpo, 
  SiFigma,
  SiNodedotjs, 
  SiExpress,
  SiNestjs,
  SiPrisma, 
  SiPostgresql,
  SiMysql, 
  SiGit, 
  SiGithub, 
  SiGithubactions,
  SiDocker,
  SiLinux,
  SiGnubash,
  SiPostman,
  SiJira
} from "react-icons/si";

interface SoftSkill {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const softSkillsList: SoftSkill[] = [
  {
    title: "Comunicação Eficaz",
    description: "Articulando ideias com clareza e empatia em ambientes colaborativos.",
    icon: MessageSquare,
  },
  {
    title: "Solução de Problemas",
    description: "Analisando desafios complexos com lógica, técnica e criatividade.",
    icon: Lightbulb,
  },
  {
    title: "Trabalho em Equipe",
    description: "Colaborando para alcançar objetivos comuns e promover um ambiente positivo.",
    icon: Users,
  },
  {
    title: "Adaptabilidade",
    description: "Ajustando-se rapidamente a novas tecnologias e fluxos de trabalho dinâmicos.",
    icon: RefreshCw,
  },
  {
    title: "Pensamento Crítico",
    description: "Avaliando informações de forma objetiva para tomar decisões informadas.",
    icon: Brain,
  },
  {
    title: "Gestão de Tempo",
    description: "Priorizando tarefas para garantir entregas eficientes e de alta qualidade.",
    icon: Clock,
  },
];

interface HardSkill {
  name: string;
  icon: React.ReactNode;
}

interface HardSkillGroup {
  category: string;
  skills: HardSkill[];
}

const hardSkillsGroups: HardSkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React.js", icon: <SiReact className="text-[#61DAFB]" style={{ animation: "spin 15s linear infinite" }} /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "React Native", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Expo", icon: <SiExpo className="text-white" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Responsive Design", icon: <MonitorSmartphone className="text-[#A855F7]" /> },
      { name: "UI/UX", icon: <Palette className="text-[#EC4899]" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
    ],
  },
  {
    category: "Backend & Software Engineering",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "NestJS", icon: <SiNestjs className="text-[#E0234E]" /> },
      { name: "REST APIs", icon: <Cpu className="text-[#3B82F6]" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="text-white" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "JWT Authentication", icon: <Key className="text-[#10B981]" /> },
      { name: "API Integration", icon: <Link className="text-[#F59E0B]" /> },
      { name: "Clean Code", icon: <Code className="text-[#14B8A6]" /> },
      { name: "Clean Architecture", icon: <Layers className="text-[#6366F1]" /> },
      { name: "SOLID", icon: <Box className="text-[#EF4444]" /> },
      { name: "Design Patterns", icon: <Boxes className="text-[#EC4899]" /> },
      { name: "Repository Pattern", icon: <Database className="text-[#8B5CF6]" /> },
      { name: "Error Handling", icon: <AlertTriangle className="text-[#F59E0B]" /> },
      { name: "Validation", icon: <ShieldCheck className="text-[#10B981]" /> },
      { name: "Software Documentation", icon: <FileText className="text-[#6B7280]" /> },
    ],
  },
  {
    category: "Quality Assurance (QA)",
    skills: [
      { name: "Manual Testing", icon: <MousePointer className="text-[#3B82F6]" /> },
      { name: "Functional Testing", icon: <Play className="text-[#10B981]" /> },
      { name: "Regression Testing", icon: <History className="text-[#F59E0B]" /> },
      { name: "API Testing (Postman)", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Test Cases", icon: <ClipboardList className="text-[#EC4899]" /> },
      { name: "Bug Reporting", icon: <Bug className="text-[#EF4444]" /> },
      { name: "Requirements Validation", icon: <CheckCircle className="text-[#14B8A6]" /> },
      { name: "Software Quality Assurance", icon: <Award className="text-[#8B5CF6]" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "CI/CD", icon: <Infinity className="text-[#10B981]" /> },
      { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
      { name: "Shell Script", icon: <SiGnubash className="text-white" /> },
      { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
      { name: "Taiga", icon: <Kanban className="text-[#00C5A2]" /> },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="skills" className="py-24 bg-dark-bg/50 relative">
      {/* Background Decorative Blobs */}
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-accent-light text-base sm:text-lg italic max-w-2xl mx-auto mt-2"
          >
            "Constantemente expandindo meu conhecimento em novas arquiteturas e paradigmas de desenvolvimento."
          </motion.p>
        </div>

        {/* Competencies Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Soft Skills & Interpessoais */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white border-b border-accent-purple/20 pb-2 inline-block">
                Soft Skills & Interpessoais
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {softSkillsList.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.2 },
                    }}
                    className="flex gap-4 p-5 bg-dark-card/60 border border-accent-purple/10 rounded-2xl hover:border-accent-purple/35 hover:bg-dark-card transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple shrink-0 group-hover:bg-accent-purple group-hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(135,80,247,0.1)] group-hover:shadow-[0_0_15px_rgba(135,80,247,0.3)]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">
                        {skill.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-accent-light leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Hard Skills & Tecnologias */}
          <div className="lg:col-span-7 space-y-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white border-b border-accent-purple/20 pb-2 inline-block">
                Minha Stack
              </h3>
              <p className="text-xs text-accent-light/80 mt-1">Hard Skills & Tecnologias</p>
            </div>

            <div className="space-y-8">
              {hardSkillsGroups.map((group) => (
                <div key={group.category} className="space-y-4">
                  <h4 className="text-sm font-semibold text-accent-light/70 tracking-wider uppercase">
                    {group.category}
                  </h4>
                  
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap gap-3"
                  >
                    {group.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{
                          scale: 1.05,
                          y: -3,
                          transition: { duration: 0.2 },
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 bg-dark-card border border-accent-purple/10 rounded-xl hover:border-accent-purple/40 hover:bg-dark-card/90 transition-all duration-300 group/item cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(135,80,247,0.1)]"
                      >
                        <span className="text-xl">
                          {skill.icon}
                        </span>
                        <span className="text-sm font-semibold text-accent-light group-hover/item:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
