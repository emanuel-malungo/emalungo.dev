
export default function CreativeSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                    Creative <span className="text-accent underline decoration-black/5 underline-offset-8">Side</span>
                </h1>
                <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
                    Exploring the intersection of art and technology. Photography, graphic design, and experiential digital experiments.
                </p>
            </div>
            <div className="bg-white rounded-2xl p-8 w-[340px] border border-gray-200/60 shadow-xl backdrop-blur-sm shrink-0">
                <h3 className="text-xl font-bold mb-4 font-serif">Design Lab</h3>
                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="aspect-square bg-gray-100 rounded-md"></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
