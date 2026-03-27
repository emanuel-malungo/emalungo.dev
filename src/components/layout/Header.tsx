
import Link from "next/link";

type SectionId = "about" | "skills" | "stack" | "portfolio" | "creative";

interface HeaderProps {
    activeSection?: SectionId;
    onSectionChange?: (section: SectionId) => void;
}

export default function Header({ activeSection, onSectionChange }: HeaderProps) {
    const navItems: { id: SectionId; label: string }[] = [
        { id: "about", label: "Sobre mim" },
        { id: "skills", label: "Soft Skills" },
        { id: "stack", label: "Hard Skills" },
        { id: "portfolio", label: "Projectos" },
        { id: "creative", label: "Creative" },
    ];

    return (
        <header className="border-b border-gray-200/60 transition-colors">
            <nav className="mx-auto px-4 py-4 md:max-w-7xl md:px-8 md:border-x md:border-gray-200/60 flex items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
                        Emalungo Dev<span className="text-[--accent]">.</span>
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onSectionChange?.(item.id)}
                                className={`flex items-center gap-2 transition-all cursor-pointer ${
                                    activeSection === item.id 
                                        ? "text-black font-bold border-b-2 border-accent" 
                                        : "text-gray-500 hover:text-black"
                                }`}
                                title={item.label}
                            >
                                <span className="text-sm font-medium">{item.label}</span>
                            </button>
                        ))}
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