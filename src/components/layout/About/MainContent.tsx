import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa"

export default function MainContent() {
    return (
        <div className="flex-1 space-y-8 lg:space-y-10 max-w-2xl text-center lg:text-left w-full">
            <div className="space-y-4">
                <div className="space-y-2">
                    <h3 className="text-sm sm:text-base text-accent font-medium tracking-[0.2em] uppercase">Hello, I'm</h3>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tighter text-black leading-[1.1]">
                        Emanuel 
                        <span className="text-accent/90"> Malungo</span>
                    </h1>
                    <div className="w-20 h-1 bg-black lg:mx-0 mx-auto mt-6 mb-4 opacity-10"></div>
                    <h2 className="text-sm sm:text-base md:text-lg font-sans font-light text-gray-400 tracking-widest uppercase mt-2">
                        Frontend Developer & UI Specialist
                    </h2>
                </div>
            </div>

            <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-xl font-sans font-light">
                Crafting immersive digital experiences through clean code and artistic design. Specializing in <span className="text-black font-medium">React, Next.js</span>, and high-performance web applications that bridge functionality with aesthetic excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                <button className="group relative px-6 py-3 bg-black text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-black/20 transition-all active:scale-95 flex items-center gap-3 text-sm w-full sm:w-auto justify-center">
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-black/20">
                        <FaDownload className="text-white text-[10px] group-hover:animate-bounce" />
                    </div>
                    <span className="relative">Download Resume</span>
                </button>

                <div className="flex items-center gap-4">
                    <div className="w-10 h-px bg-gray-200"></div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] whitespace-nowrap">Connect</h4>
                    <ul className="flex gap-4">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-all transform hover:-translate-y-1 block">
                                <FaLinkedin size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-all transform hover:-translate-y-1 block">
                                <FaGithub size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-all transform hover:-translate-y-1 block">
                                <FaTwitter size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Stat / Role - Refined with premium styling */}
            <div className="mt-12 pt-10 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-12 sm:gap-20">
                <div className="flex flex-col gap-1.5 group">
                    <div className="flex items-baseline gap-1.5">
                        <h4 className="text-4xl sm:text-5xl font-serif font-bold text-black tracking-tighter group-hover:text-accent transition-colors duration-500">42</h4>
                        <span className="text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20 px-2 rounded-sm bg-accent/5">Luanda</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-[0.15em]">
                        Software <span className="text-gray-600">Student</span>
                    </p>
                </div>

                <div className="w-px h-16 bg-gray-200/60 hidden sm:block self-center"></div>

                <div className="flex flex-col gap-1.5 group">
                    <div className="flex items-baseline gap-1.5">
                        <h4 className="text-4xl sm:text-5xl font-serif font-bold text-black tracking-tighter group-hover:text-accent transition-colors duration-500">3+</h4>
                        <span className="text-accent text-[10px] font-black uppercase tracking-widest border border-accent/20 px-2 rounded-sm bg-accent/5">Years</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-[0.15em]">
                        Experience <span className="text-gray-600">In Dev</span>
                    </p>
                </div>
            </div>
        </div>
    )
}