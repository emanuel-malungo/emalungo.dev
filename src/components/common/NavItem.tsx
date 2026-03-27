
export default function NavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`group relative flex items-center justify-center transition-all duration-300 ${active
                ? 'w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-black to-gray-900 text-white shadow-lg shadow-black/30 rounded-full'
                : 'w-8 h-8 sm:w-10 sm:h-10 bg-white/30 text-gray-600 hover:w-10 hover:h-10 sm:hover:w-12 sm:hover:h-12 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/20 hover:rounded-full rounded-lg'
                }`}
            title={label}
            aria-label={label}
        >
            <span className={`transition-all duration-300 ${active ? 'text-base sm:text-lg' : 'text-base sm:text-lg group-hover:text-lg sm:group-hover:text-xl'}`}>
                {icon}
            </span>

            {/* Active Indicator Line */}
            {active && (
                <span className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse pointer-events-none"></span>
            )}

            {/* Tooltip */}
            <span className="absolute left-0 -translate-x-full ml-[-12px] sm:ml-[-16px] px-2 sm:px-3 py-1 sm:py-2 bg-black/90 text-white text-[9px] sm:text-xs uppercase tracking-widest font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-white/10">
                {label}
            </span>
        </button>
    );
}