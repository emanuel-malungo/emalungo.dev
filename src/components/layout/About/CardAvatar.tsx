import Image from "next/image";
import avatar from "@/assets/images/avatar.png"
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function CardAvatar() {
    const skills = [
        { name: "React", icon: <FaReact />, className: "top-2 -left-8 sm:top-4 sm:-left-12 lg:-left-16", delay: "delay-100" },
        { name: "Next.js", icon: <SiNextdotjs />, className: "top-1/4 -right-10 sm:-right-16 lg:-right-20", delay: "delay-300" },
        { name: "Tailwind", icon: <SiTailwindcss />, className: "bottom-1/4 -left-8 sm:-left-16 lg:-left-20", delay: "delay-500" },
        { name: "TypeScript", icon: <SiTypescript />, className: "bottom-2 -right-6 sm:bottom-4 sm:-right-12 lg:-right-16", delay: "delay-700" },
    ];

    return (
        <div className="relative group p-6 sm:p-10 lg:p-0 select-none">
            {/* Animated Floating Skills */}
            {skills.map((skill, index) => (
                <div 
                    key={index}
                    className={`absolute z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-white/45 backdrop-blur-md border border-white/60 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transform transition-all duration-700 group-hover:scale-110 ${skill.className} ${skill.delay} opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:!border-accent/80 hover:!bg-white/70 hover:shadow-lg`}
                >
                    <span className="text-accent text-xs sm:text-sm animate-pulse">{skill.icon}</span>
                    <span className="text-[8px] sm:text-[10px] font-bold text-gray-700 uppercase tracking-wider">{skill.name}</span>
                </div>
            ))}

            {/* Glowing Aura Effect - Matching gold particles */}
            <div className="absolute -inset-4 bg-linear-to-tr from-accent/30 via-transparent to-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"></div>
            
            {/* Image Container with Framing */}
            <div className="relative aspect-square w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-gray-300/80 shadow-2xl transform transition-all duration-700 bg-gray-50/50 group-hover:scale-[1.03] group-hover:rotate-1 group-hover:border-accent/40">
                <Image
                    src={avatar}
                    alt="Emanuel Malungo"
                    className="object-cover transition-all duration-750 group-hover:scale-105"
                    fill
                    sizes="(max-width: 640px) 208px, (max-width: 1024px) 320px, 384px"
                    priority
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/30 to-transparent opacity-60"></div>
                
                {/* Minimalist Border effect */}
                <div className="absolute inset-0 border-8 border-white/10 group-hover:border-white/20 transition-all duration-500"></div>
            </div>

            {/* Decorative Corner Accents (Visible on larger screens) */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 border-b-2 border-r-2 border-accent/40 rounded-br-3xl -z-10 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:border-accent transition-all duration-700 ease-out"></div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-24 h-24 sm:w-32 sm:h-32 border-t-2 border-l-2 border-gray-300 rounded-tl-3xl -z-10 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:border-accent transition-all duration-700 ease-out"></div>
        </div>
    )
}