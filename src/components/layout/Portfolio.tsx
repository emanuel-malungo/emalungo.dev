import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

export default function PortfolioSection() {
    const projects = [
        {
            title: "Plataforma E-Commerce Nexo",
            category: "Fullstack / Fintech",
            description: "Uma experiência de compra ultra-rápida com integração de pagamentos e painel administrativo dinâmico.",
            tech: ["Next.js", "Prisma", "Stripe", "Tailwind"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&auto=format&fit=crop",
            link: "#",
            github: "#"
        },
        {
            title: "Dashboard de Bio-Métricas",
            category: "HealthTech / Dashboard",
            description: "Visualização de dados críticos em tempo real para monitoramento de saúde de atletas e pacientes.",
            tech: ["React", "D3.js", "Firebase", "TypeScript"],
            image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?q=80&w=1600&auto=format&fit=crop",
            link: "#",
            github: "#"
        },
        {
            title: "3D Galaxy Explorer",
            category: "Creative / WebGL",
            description: "Uma imersão interativa no espaço sideral construída com tecnologias gráficas de ponta.",
            tech: ["Three.js", "GSAP", "React-Three-Fiber"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop",
            link: "#",
            github: "#"
        },
        {
            title: "Sistema AI Guardião",
            category: "Backend / AI",
            description: "Motor de análise preditiva para segurança cibernética utilizando redes neurais avançadas.",
            tech: ["Python", "Node.js", "TensorFlow", "Docker"],
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop",
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="portfolio" className="w-full">
            <div className="flex flex-col gap-12 sm:gap-16">
                {/* Section Header */}
                <div className="space-y-4 max-w-2xl mx-auto text-center">
                    <h3 className="text-sm sm:text-base text-accent font-medium tracking-[0.2em] uppercase">Meu Trabalho</h3>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tighter text-black leading-tight">
                        Projectos & <span className="text-accent/90">Portfolio</span>
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mt-6 opacity-10"></div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative flex flex-col bg-white border border-gray-100/60 rounded-3xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <div className="flex gap-4">
                                        <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                                            <FaGithub size={20} />
                                        </a>
                                        <a href={project.link} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
                                            <FaExternalLinkAlt size={18} />
                                        </a>
                                    </div>
                                </div>
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full shadow-sm">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">{project.category}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-8 space-y-3 sm:y-4">
                                <h4 className="text-xl sm:text-2xl font-serif font-bold text-black group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                </h4>
                                <p className="text-gray-500 leading-relaxed text-sm sm:text-lg font-sans font-light line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                                    {project.tech.map((tag, tIdx) => (
                                        <span 
                                            key={tIdx}
                                            className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-400 border border-gray-100 px-2 py-0.5 rounded-sm bg-gray-50 group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Interactive Hint */}
                            <div className="absolute bottom-0 right-0 p-3 sm:p-4 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="p-1.5 sm:p-2 bg-accent/10 rounded-tl-2xl">
                                    <FaCode className="text-accent size-3 sm:size-4" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-8 sm:mt-12 text-center">
                    <button className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-black text-white rounded-full text-sm sm:text-base font-bold overflow-hidden shadow-xl hover:shadow-black/20 transition-all active:scale-95 flex items-center gap-3 mx-auto">
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative">Ver Todos Projectos</span>
                        <FaExternalLinkAlt className="relative text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="mt-6 text-gray-400 text-sm font-sans font-medium uppercase tracking-[0.2em]">
                        Explore mais no meu <a href="#" className="text-accent hover:underline">GitHub</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
