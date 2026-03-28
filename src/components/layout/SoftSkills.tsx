import { 
    FaComments, 
    FaLightbulb, 
    FaUsers, 
    FaSync, 
    FaClock, 
    FaBrain 
} from "react-icons/fa";

export default function SoftSkills() {
    const skills = [
        {
            title: "Comunicação Eficaz",
            description: "Articulando ideias com clareza e empatia em ambientes colaborativos.",
            icon: <FaComments />,
            delay: "0"
        },
        {
            title: "Solução de Problemas",
            description: "Analisando desafios complexos com lógica, técnica e criatividade.",
            icon: <FaLightbulb />,
            delay: "100"
        },
        {
            title: "Trabalho em Equipe",
            description: "Colaborando para alcançar objetivos comuns e promover um ambiente positivo.",
            icon: <FaUsers />,
            delay: "200"
        },
        {
            title: "Adaptabilidade",
            description: "Ajustando-se rapidamente a novas tecnologias e fluxos de trabalho dinâmicos.",
            icon: <FaSync />,
            delay: "300"
        },
        {
            title: "Pensamento Crítico",
            description: "Avaliando informações de forma objetiva para tomar decisões informadas.",
            icon: <FaBrain />,
            delay: "400"
        },
        {
            title: "Gestão de Tempo",
            description: "Priorizando tarefas para garantir entregas eficientes e de alta qualidade.",
            icon: <FaClock />,
            delay: "500"
        }
    ];

    return (
        <section id="skills" className="w-full py-20 lg:py-32">
            <div className="flex flex-col gap-12 sm:gap-16">
                {/* Section Header */}
                <div className="space-y-4 max-w-xl">
                    <h3 className="text-sm sm:text-base text-accent font-medium tracking-[0.2em] uppercase">Minhas Competências</h3>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold tracking-tighter text-black leading-tight">
                        Soft Skills & <span className="text-accent/90">Interpessoais</span>
                    </h2>
                    <div className="w-20 h-1 bg-black mt-6 opacity-10"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className="group relative p-8 bg-white/40 backdrop-blur-xs border border-gray-300 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 overflow-hidden"
                            style={{ transitionDelay: `${skill.delay}ms` }}
                        >
                            {/* Accent Background Highlight */}
                            <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon Container */}
                            <div className="relative w-14 h-14 mb-6 rounded-2xl bg-white border border-gray-300 flex items-center justify-center text-accent text-2xl shadow-sm group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                                {skill.icon}
                            </div>
                            
                            {/* Content */}
                            <div className="relative space-y-3">
                                <h4 className="text-xl font-serif font-bold text-black tracking-tight">{skill.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-sm font-sans font-light group-hover:text-gray-700 transition-colors">
                                    {skill.description}
                                </p>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-1 -translate-y-1">
                                <div className="w-2 h-2 rounded-full bg-accent/20"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
