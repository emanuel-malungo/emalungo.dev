import { 
    SiHtml5, SiCss, SiJavascript, SiTypescript, SiTailwindcss, SiReact, 
    SiNextdotjs, SiFigma, SiNodedotjs, SiPrisma, SiMysql, SiPostgresql, 
    SiMongodb, SiFirebase, SiGit, SiGithub, SiDocker, SiCplusplus, SiExpo
} from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";

export default function StackSection() {
    const categories = [
        {
            name: "Frontend & Design",
            skills: [
                { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <SiCss className="text-[#1572B6]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
                { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
            ]
        },
        {
            name: "Backend & Database",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
                { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
            ]
        },
        {
            name: "Systems & Tools",
            skills: [
                { name: "C / C++", icon: <SiCplusplus className="text-[#00599C]" /> },
                { name: "Shell Script", icon: <VscTerminal className="text-[#4EAA25]" /> },
                { name: "Expo", icon: <SiExpo className="text-black" /> },
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "GitHub", icon: <SiGithub className="text-black" /> },
                { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
            ]
        }
    ];

    return (
        <section id="stack" className="w-full">
            <div className="flex flex-col gap-10 sm:gap-16">
                {/* Section Header */}
                <div className="space-y-4 max-w-2xl mx-auto text-center">
                    <h3 className="text-sm sm:text-base text-accent font-medium tracking-[0.2em] uppercase">Minha Stack</h3>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tighter text-black leading-tight">
                        Hard Skills & <span className="text-accent/90">Tecnologias</span>
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mt-6 opacity-10"></div>
                </div>

                {/* Tech Categories Grid */}
                <div className="flex flex-col gap-12 sm:gap-16">
                    {categories.map((category, catIdx) => (
                        <div key={catIdx} className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 whitespace-nowrap">{category.name}</span>
                                <div className="h-px bg-gray-100 flex-1"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6">
                                {category.skills.map((skill, skillIdx) => (
                                    <div 
                                        key={skillIdx}
                                        className="group relative flex items-center justify-start sm:justify-center lg:justify-start gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-100/80 rounded-xl sm:rounded-2xl shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:-translate-y-1 cursor-default"
                                    >
                                        <div className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110 shrink-0">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-black transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{skill.name}</span>
                                        
                                        {/* Subtle background glow on hover */}
                                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-xl sm:rounded-2xl transition-opacity pointer-events-none"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Insight */}
                <div className="mt-4 p-5 sm:p-6 bg-gray-50/50 border border-black/5 rounded-2xl sm:rounded-3xl flex items-center gap-4 group transition-colors hover:bg-white hover:border-accent/20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-black flex items-center justify-center text-white shrink-0 group-hover:bg-accent transition-colors">
                        <FaCode size={18} className="sm:size-[20px]" />
                    </div>
                    <div>
                        <p className="text-xs sm:text-sm text-gray-500 font-sans italic leading-tight">
                            "Constantemente expandindo meu conhecimento em novas arquiteturas e paradigmas de desenvolvimento."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
