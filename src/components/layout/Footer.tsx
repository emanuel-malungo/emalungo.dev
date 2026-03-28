import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { id: "about", label: "Sobre mim" },
        { id: "skills", label: "Soft Skills" },
        { id: "stack", label: "Hard Skills" },
        { id: "portfolio", label: "Projectos" },
    ];

    return (
        <footer className="w-full bg-white border-t border-gray-100">
            <div className="mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:max-w-7xl lg:border-x lg:border-black/5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
                    
                    {/* Brand & Socials Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-serif font-bold tracking-tighter text-black">
                                Emanuel 
                                <span className="text-accent/90"> Malungo</span>
                            </h2>
                            <p className="text-gray-500 text-sm font-sans font-light leading-relaxed max-w-xs">
                                Criando excelência digital através de código limpo, design imersivo e soluções inovadoras.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 text-gray-400 hover:text-black hover:scale-110 transition-all">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="p-2 text-gray-400 hover:text-black hover:scale-110 transition-all">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="p-2 text-gray-400 hover:text-black hover:scale-110 transition-all">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation Section */}
                    <div className="space-y-6 lg:justify-self-center">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Navegação</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a 
                                        href={`#${link.id}`} 
                                        className="text-sm font-medium text-gray-500 hover:text-accent transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-accent transition-colors"></div>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-6 lg:justify-self-end text-left">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-accent/60 shrink-0">
                                    <FaEnvelope size={14} />
                                </div>
                                <span className="hover:text-black transition-colors">emalungo.dev@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-500">
                                <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-accent/60 shrink-0">
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <span>Luanda, Angola</span>
                            </li>
                        </ul>
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/5 rounded-full border border-accent/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                            <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Disponível para Freelance</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Section */}
                <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-400 font-medium">
                        &copy; {currentYear} Emanuel Malungo. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        <span>Desenvolvido com</span>
                        <FaHeart className="text-accent/60 animate-pulse" />
                        <div className="flex gap-2">
                            <SiReact className="hover:text-[#61DAFB] transition-colors" title="React" />
                            <SiNextdotjs className="hover:text-black transition-colors" title="Next.js" />
                            <SiTailwindcss className="hover:text-[#06B6D4] transition-colors" title="Tailwind CSS" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}