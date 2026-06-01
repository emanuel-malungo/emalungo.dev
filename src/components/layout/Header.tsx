"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaSun } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: "about", label: "Sobre mim" },
        { id: "skills", label: "Soft Skills" },
        { id: "stack", label: "Hard Skills" },
        { id: "portfolio", label: "Projectos" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="border-b border-white/5 transition-colors fixed top-0 left-0 w-full z-50 bg-[#07070A]/60 backdrop-blur-lg text-white">
                <nav className="mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between gap-3 sm:gap-4 max-w-7xl">
                    <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
                        {/* High-tech Mono Logo */}
                        <Link href="/" className="text-base sm:text-lg font-mono font-bold tracking-tight whitespace-nowrap text-white flex items-center group">
                            <span className="group-hover:text-violet-400 transition-colors duration-300">EMALUNGO</span>
                            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent font-black ml-1 group-hover:scale-105 transition-transform duration-300">DEV</span>
                            <span className="text-violet-500 animate-pulse ml-0.5 font-sans">_</span>
                        </Link>

                        {/* Premium Navigation Menu */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center transition-all cursor-pointer text-[10px] uppercase tracking-widest text-gray-400 hover:text-white font-mono px-3.5 py-1.5 rounded-full hover:bg-white/5 duration-300"
                                >
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-4">
                        {/* Language Switcher with clean dark styling */}
                        <div className="flex items-center bg-white/5 p-0.5 rounded-full border border-white/10">
                            <button 
                                disabled
                                title="Em desenvolvimento"
                                className="px-2.5 sm:px-3 py-0.5 rounded-full text-[9px] font-mono font-bold transition-all bg-white text-black shadow-sm cursor-not-allowed opacity-90"
                            >
                                PT
                            </button>
                            <button 
                                disabled
                                title="Em desenvolvimento"
                                className="px-2.5 sm:px-3 py-0.5 rounded-full text-[9px] font-mono font-bold transition-all bg-transparent text-gray-400 cursor-not-allowed opacity-60 hover:text-white hover:opacity-100"
                            >
                                EN
                            </button>
                        </div>

                        {/* Theme Toggle Button */}
                        <button 
                            disabled
                            title="Em desenvolvimento"
                            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed opacity-60 hover:opacity-100 hover:text-white hover:border-violet-500/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300"
                        >
                            <FaSun size={15} />
                        </button>

                        {/* Mobile Hamburger Button */}
                        <button 
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all cursor-pointer"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Fully consistent with the dark aurora theme */}
            <div 
                className={`fixed inset-0 bg-black/60 backdrop-blur-md z-100 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={toggleMenu}
            >
                {/* Mobile Menu Drawer */}
                <div 
                    className={`fixed top-0 right-0 h-screen w-70 shadow-2xl transition-transform duration-500 transform border-l border-white/10 bg-[#07070A]/95 backdrop-blur-xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full text-white font-mono">
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <span className="font-bold tracking-wider text-sm uppercase text-gray-400">Navegação</span>
                            <button onClick={toggleMenu} className="p-2 hover:bg-white/5 rounded-full transition-colors cursor-pointer text-gray-400 hover:text-white">
                                <FaTimes size={18} />
                            </button>
                        </div>
                        
                        <nav className="flex flex-col p-6 space-y-3 flex-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={toggleMenu}
                                    className="text-sm font-semibold text-gray-300 hover:text-white hover:translate-x-1.5 transition-all py-2 border-b border-white/5"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="p-6 border-t border-white/10 text-[10px] text-gray-500 tracking-wide uppercase">
                            const status = &quot;code &amp; debug&quot;;
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}