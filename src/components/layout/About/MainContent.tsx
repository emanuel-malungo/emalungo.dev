import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"

export default function MainContent() {
    return (
        <div className="flex-1 space-y-6 lg:space-y-7 max-w-3xl text-center mx-auto w-full relative z-10 text-white">
            <div className="space-y-4 flex flex-col items-center">
                <div className="space-y-3 flex flex-col items-center">
                    <div className="inline-block px-3 py-1.5 border border-white/10 text-violet-300 text-[9px] sm:text-xs tracking-[0.25em] uppercase font-bold rounded-full backdrop-blur-md bg-white/5 shadow-sm hover:border-violet-500/40 transition-colors duration-300">
                        Olá, bem-vindo
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-white leading-[1.05] text-center uppercase">
                        Emanuel
                        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-bold ml-3">Malungo</span>
                    </h1>
                    <h2 className="inline-flex items-center justify-center gap-1.5 px-2.5 py-0.5 bg-white/5 border border-white/10 backdrop-blur-xs rounded-lg text-[10px] sm:text-xs font-sans font-medium text-gray-300 tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-ping"></span>
                        Programador Front-End | Web & Mobile
                    </h2>
                    <p className="p-4 sm:p-5 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.4)] text-gray-300 leading-relaxed text-sm sm:text-base max-w-2xl font-sans font-light hover:border-violet-500/20 transition-all duration-500 text-center">
                        Apaixonado por desenvolvimento frontend, UI/UX premium e aplicações web modernas. Estudante da <strong className="text-white font-semibold">42 Luanda</strong> com foco em criar soluções digitais inovadoras, limpas e de alta performance.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6">
                <a href="/emalungodev_cv.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full font-bold overflow-hidden shadow-[0_0_25px_rgba(99,102,241,0.45)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-all active:scale-95 flex items-center gap-2.5 text-xs sm:text-sm w-full sm:w-auto justify-center">
                    <div className="relative w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <FaDownload className="text-white text-[9px] group-hover:animate-bounce" />
                    </div>
                    <span className="relative">Descarregar Currículo</span>
                </a>

                <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-px bg-white/15"></div>
                    <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">Ligar-se</h4>
                    <ul className="flex gap-3">
                        <li>
                            <a href="https://www.linkedin.com/in/emanuel-malungo-51b490298/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 block">
                                <FaLinkedin size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/emanuel-malungo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 hover:scale-110 transition-all duration-300 block">
                                <FaGithub size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Stat / Role - Refined with premium dark glassmorphism card styling */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-6 sm:gap-8 font-mono">
                <div className="flex items-center gap-4 p-3.5 sm:p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500 group">
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-baseline justify-center gap-1">
                            <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-violet-400 transition-colors duration-500">42</h4>
                            <span className="text-violet-400 text-[8px] font-bold uppercase tracking-widest border border-violet-500/40 px-1.5 py-0.5 rounded-sm bg-violet-500/5">Luanda</span>
                        </div>
                        <p className="text-[9px] text-gray-400 font-medium uppercase tracking-[0.12em] text-center">
                            Estudante de <span className="text-gray-300">Software</span>
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 sm:p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-500 group">
                    <div className="flex flex-col gap-0.5">
                        <div className="flex items-baseline justify-center gap-1">
                            <h4 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-violet-400 transition-colors duration-500">2+</h4>
                            <span className="text-violet-400 text-[8px] font-bold uppercase tracking-widest border border-violet-500/40 px-1.5 py-0.5 rounded-sm bg-violet-500/5">Anos</span>
                        </div>
                        <p className="text-[9px] text-gray-400 font-medium uppercase tracking-[0.12em] text-center">
                            Experiência <span className="text-gray-300">Desenvolvimento</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
