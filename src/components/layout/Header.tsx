"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

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
            <header className="border-b border-gray-200/60 transition-colors fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md">
                <nav className="mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4 lg:max-w-7xl lg:border-x lg:border-gray-200/60 flex items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-tighter whitespace-nowrap">
                            Emalungo Dev<span className="text-accent">.</span>
                        </Link>

                        {/* Desktop Navigation Menu */}
                        <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-2 transition-all cursor-pointer text-xs md:text-sm text-gray-500 hover:text-black font-medium hover:border-b-2 hover:border-accent"
                                >
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Language Switcher */}
                        <div className="flex items-center bg-gray-100 p-0.5 sm:p-1 rounded-full border border-gray-200">
                            <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold transition-all bg-black text-white shadow-sm cursor-pointer hover:bg-gray-800">
                                PT
                            </button>
                            <button className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold transition-all bg-white text-black cursor-pointer hover:bg-gray-200">
                                EN
                            </button>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <button 
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Moved OUTSIDE the fixed header element to avoid clipping */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-md z-100 transition-opacity duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={toggleMenu}
            >
                {/* Mobile Menu Drawer */}
                <div 
                    className={`fixed top-0 right-0 h-screen w-[280px] shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    style={{ backgroundColor: '#C6A75E' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col h-full text-white" style={{ backgroundColor: '#C6A75E' }}>
                        <div className="flex items-center justify-between p-6 border-b border-white/20">
                            <span className="font-serif font-bold tracking-tighter text-xl">Menu</span>
                            <button onClick={toggleMenu} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
                                <FaTimes size={20} />
                            </button>
                        </div>
                        
                        <nav className="flex flex-col p-6 space-y-4 flex-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={toggleMenu}
                                    className="text-lg font-medium text-white hover:text-white/80 transition-all py-2"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                        
                        <div className="p-6 border-t border-white/20 italic text-sm text-white/50">
                            Crafting premium digital experiences.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}