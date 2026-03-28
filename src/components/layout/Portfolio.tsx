import { FaGithub, FaExternalLinkAlt, FaCode, FaGlobe, FaMobileAlt, FaDatabase, FaBrain } from "react-icons/fa";

export default function PortfolioSection() {
    const projects = [
        {
            title: "Plataforma E-Commerce Nexo",
            category: "Fullstack / Fintech",
            description: "Uma experiência de compra ultra-rápida com integração de pagamentos e painel administrativo dinâmico.",
            tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
            icon: <FaGlobe className="text-accent" />,
            link: "#",
            github: "#"
        },
        {
            title: "Dashboard de Bio-Métricas",
            category: "HealthTech / Dashboard",
            description: "Visualização de dados críticos em tempo real para monitoramento de saúde de atletas e pacientes.",
            tech: ["React", "D3.js", "Firebase", "TypeScript"],
            icon: <FaDatabase className="text-accent" />,
            link: "#",
            github: "#"
        },
        {
            title: "3D Galaxy Explorer",
            category: "Creative / WebGL",
            description: "Uma imersão interativa no espaço sideral construída com tecnologias gráficas de ponta.",
            tech: ["Three.js", "GSAP", "React-Three-Fiber"],
            icon: <FaMobileAlt className="text-accent" />,
            link: "#",
            github: "#"
        },
        {
            title: "Sistema AI Guardião",
            category: "Backend / AI",
            description: "Motor de análise preditiva para segurança cibernética utilizando redes neurais avançadas.",
            tech: ["Python", "Node.js", "TensorFlow", "Docker"],
            icon: <FaBrain className="text-accent" />,
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="portfolio" className="w-full">
            <div className="flex flex-col gap-10 sm:gap-14">
                {/* Section Header */}
                <div className="space-y-3 max-w-2xl mx-auto text-center">
                    <h3 className="text-xs sm:text-sm text-accent font-medium tracking-[0.2em] uppercase">Meu Trabalho</h3>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tighter text-black leading-tight">
                        Projectos & <span className="text-accent/90">Portfolio</span>
                    </h2>
                    <div className="w-16 h-1 bg-black mx-auto mt-4 opacity-10"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-0">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col bg-white border border-gray-300 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] hover:-translate-y-1.5"
                        >
                            {/* Favicon-style Icon & Category */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-300 group-hover:border-accent/20 group-hover:bg-accent/2 transition-all duration-500 shadow-sm">
                                    <div className="text-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        {project.icon}
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-500">
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-2.5 flex-1">
                                <h4 className="text-xl font-serif font-bold text-black group-hover:text-accent transition-colors duration-300 tracking-tight">
                                    {project.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed text-[13px] font-sans font-light line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Tags & Links */}
                            <div className="mt-7 pt-5 border-t border-black/2 font-sans flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((tag, tIdx) => (
                                        <span 
                                            key={tIdx}
                                            className="text-[10px] font-medium text-gray-400 bg-gray-50/50 px-2 py-0.5 rounded-full border border-gray-300 group-hover:text-gray-600 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3.5 pl-4">
                                    <a href={project.github} className="text-gray-400 hover:text-black transition-all hover:scale-110" title="Github">
                                        <FaGithub size={17} />
                                    </a>
                                    <a href={project.link} className="text-gray-400 hover:text-accent transition-all hover:scale-110" title="Live Link">
                                        <FaExternalLinkAlt size={15} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-6 text-center">
                    <button className="group relative px-6 py-3 bg-black text-white rounded-full text-sm font-bold overflow-hidden shadow-lg hover:shadow-black/10 transition-all active:scale-95 flex items-center gap-3 mx-auto">
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative">Ver Todos Projectos</span>
                        <FaExternalLinkAlt className="relative text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="mt-5 text-gray-400 text-[10px] font-sans font-medium uppercase tracking-[0.2em]">
                        Explore mais no meu <a href="#" className="text-accent hover:underline">GitHub</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
