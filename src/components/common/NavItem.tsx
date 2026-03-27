
export default function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button
            className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${active
                ? 'bg-black text-white shadow-lg shadow-black/20'
                : 'bg-white/50 text-gray-500 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/10'
                }`}
            title={label}
            aria-label={label}
        >
            <span className="text-xl transition-transform duration-300 group-hover:scale-110">{icon}</span>

            {/* Tooltip */}
            <span className="absolute left-0 -translate-x-full ml-[-12px] px-2 py-1 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
            </span>
        </button>
    );
}