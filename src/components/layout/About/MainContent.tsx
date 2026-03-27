import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from "react-icons/fa"

export default function MainContent() {
    return (
        <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
            <div className="space-y-3">
                <div className="space-y-1">
                    <h3 className="text-lg text-gray-600 font-serif italic">Hello, I'm</h3>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                        Emanuel <br />
                        <span className="text-accent underline decoration-black/5 underline-offset-8">Malungo</span>
                    </h1>
                    <h2 className="text-xl font-sans font-light text-gray-500 mt-2 tracking-wide uppercase">
                        Frontend Developer & UI Specialist
                    </h2>
                </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
                Crafting immersive digital experiences through clean code and artistic design. Specializing in React, Next.js, and high-performance web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
                <button className="group relative px-6 py-3 bg-black text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-black/20 transition-all active:scale-95 flex items-center gap-3 text-sm">
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-black/20">
                        <FaDownload className="text-white text-[10px] group-hover:animate-bounce" />
                    </div>
                    <span className="relative">Download Resume</span>
                </button>

                <div className="flex items-center gap-2.5">
                    <div className="w-10 h-px bg-gray-300"></div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Connect</h4>
                    <ul className="flex gap-3">
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                                <FaLinkedin size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                                <FaGithub size={18} />
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                                <FaTwitter size={18} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}