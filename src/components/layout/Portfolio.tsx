
export default function PortfolioSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                    Featured <span className="text-accent underline decoration-black/5 underline-offset-8">Projects</span>
                </h1>
                <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
                    A collection of works that showcase my passion for design and development. From complex web apps to minimal landing pages.
                </p>
            </div>
            <div className="bg-white rounded-2xl p-8 w-[340px] border border-gray-200/60 shadow-xl backdrop-blur-sm shrink-0">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 italic">Project Preview</div>
                <h3 className="text-lg font-bold font-serif">Project Title</h3>
                <p className="text-sm text-gray-600">Short description of the impact and technology used.</p>
            </div>
        </section>
    );
}
