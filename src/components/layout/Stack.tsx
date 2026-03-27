
export default function StackSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                    Tech <span className="text-accent underline decoration-black/5 underline-offset-8">Stack</span>
                </h1>
                <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
                    My arsenal of tools for building modern web applications. Focused on performance, maintainability, and exceptional user experience.
                </p>
            </div>
            <div className="bg-white rounded-2xl p-8 w-[340px] border border-gray-200/60 shadow-xl backdrop-blur-sm shrink-0">
                <h3 className="text-xl font-bold mb-4 font-serif">Technologies</h3>
                <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-gray-700">
                    <div className="p-2 border border-black/5 rounded-lg bg-gray-50 text-center">Next.js</div>
                    <div className="p-2 border border-black/5 rounded-lg bg-gray-50 text-center">React</div>
                    <div className="p-2 border border-black/5 rounded-lg bg-gray-50 text-center">Tailwind</div>
                    <div className="p-2 border border-black/5 rounded-lg bg-gray-50 text-center">TypeScript</div>
                </div>
            </div>
        </section>
    );
}
