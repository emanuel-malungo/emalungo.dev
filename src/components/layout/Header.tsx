
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
        <header className="border-b border-gray-200/60 transition-colors sticky top-0 z-40">
            <nav className="mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4 lg:max-w-7xl lg:border-x lg:border-gray-200/60 flex items-center justify-between flex-wrap sm:flex-nowrap gap-3 sm:gap-4">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
                    <Link href="/" className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-tighter whitespace-nowrap">
                        Emalungo Dev<span className="text-[--accent]">.</span>
                    </Link>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onSectionChange?.(item.id)}
                                className={`flex items-center gap-2 transition-all cursor-pointer text-xs md:text-sm ${
                                    activeSection === item.id
                                        ? "text-black font-bold border-b-2 border-accent"
                                        : "text-gray-500 hover:text-black"
                                }`}
                                title={item.label}
                            >
                                <span className="font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {/* Language Switcher */}
                    <div className="flex items-center bg-gray-100 p-0.5 sm:p-1 rounded-full border border-gray-200">
                        <button
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold transition-all bg-black text-white shadow-sm cursor-pointer hover:bg-gray-800 `}
                        >
                            PT
                        </button>
                        <button
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold transition-all bg-white text-black cursor-pointer hover:bg-gray-200 `}
                        >
                            EN
                        </button>
                    </div>

                </div>
            </nav>
        </header>
    )
}