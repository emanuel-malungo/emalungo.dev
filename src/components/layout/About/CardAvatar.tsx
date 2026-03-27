import Image from "next/image";
import avatar from "@/assets/images/avatar.png"
import { FaReact, FaCode, FaPaintBrush } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function CardAvatar() {
    const skills = [
        { name: "React", icon: <FaReact />, className: "top-4 -left-12 sm:-left-16", delay: "delay-100" },
        { name: "Next.js", icon: <SiNextdotjs />, className: "top-1/4 -right-12 sm:-right-20", delay: "delay-300" },
        { name: "Tailwind", icon: <SiTailwindcss />, className: "bottom-1/4 -left-10 sm:-left-20", delay: "delay-500" },
        { name: "TypeScript", icon: <SiTypescript />, className: "bottom-4 -right-8 sm:-right-16", delay: "delay-700" },
    ];

    return (
        <div className="relative group p-10 sm:p-0">
            {/* Floating Skills */}
            {skills.map((skill, index) => (
                <div 
                    key={index}
                    className={`absolute z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-md border border-gray-100 rounded-full shadow-lg transform transition-all duration-700 group-hover:scale-110 ${skill.className} ${skill.delay} opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0`}
                >
                    <span className="text-accent text-sm">{skill.icon}</span>
                    <span className="text-[10px] font-bold text-gray-700 uppercase tracking-tighter">{skill.name}</span>
                </div>
            ))}

            {/* Decorative Background Elements */}
            <div className="absolute -inset-4 bg-linear-to-tr from-accent/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            
            {/* Image Container with Framing */}
            <div className="relative aspect-square w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-gray-100 shadow-2xl transform transition-all duration-700 bg-gray-50 group-hover:scale-[1.02] group-hover:-rotate-1">
                <Image
                    src={avatar}
                    alt="Emanuel Malungo"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                    priority
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 to-transparent opacity-60"></div>
                
                {/* Minimalist Border effect */}
                <div className="absolute inset-0 border-8 border-white/10 group-hover:border-white/20 transition-all duration-500"></div>
            </div>

            {/* Corner Accents for premium look */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-[3px] border-r-[3px] border-accent/20 rounded-br-3xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700 ease-out"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-[3px] border-l-[3px] border-black/5 rounded-tl-3xl -z-10 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-700 ease-out"></div>
        </div>
    )
}