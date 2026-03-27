
export default function SkillsSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                    Soft <span className="text-accent underline decoration-black/5 underline-offset-8">Skills</span>
                </h1>
                <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
                    Collaboration, Problem Solving, and Strategic Thinking. I believe that technical excellence is amplified by strong communication and empathy.
                </p>
                {/* Add more skills content here */}
            </div>
            <div className="bg-white rounded-2xl p-8 w-[340px] border border-gray-200/60 shadow-xl backdrop-blur-sm shrink-0">
                <h3 className="text-xl font-bold mb-4 font-serif">Key Strengths</h3>
                <ul className="space-y-2 text-gray-700">
                    <li>• Team Leadership</li>
                    <li>• Creative Strategy</li>
                    <li>• User-Centric Design</li>
                    <li>• Agile Methodology</li>
                </ul>
            </div>
        </section>
    );
}
