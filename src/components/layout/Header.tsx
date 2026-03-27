
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-gray-300">
            <nav className="mx-auto px-4 py-4 md:max-w-7xl md:px-8 md:border-x md:border-gray-300 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                        Emalungo Dev<span className="text-[--accent]">.</span>
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer" title="Sobre mim">
                            <span className="text-sm font-medium">Sobre mim</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer" title="Soft Skills">
                            <span className="text-sm font-medium">Soft Skills</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer" title="Hard Skills">
                            <span className="text-sm font-medium">Hard Skills</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors cursor-pointer" title="Projectos">
                            <span className="text-sm font-medium">Projectos</span>
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200">
                        <button
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all bg-black text-white shadow-sm cursor-pointer hover:bg-gray-800 }`}
                        >
                            PT
                        </button>
                        <button
                            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all bg-white text-black cursor-pointer hover:bg-gray-200 }`}
                        >
                            EN
                        </button>
                    </div>

                </div>
            </nav>
        </header>
    )
}