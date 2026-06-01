
import MainContent from "./About/MainContent";

export default function AboutSection() {
    return (
        <section id="about" className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full">
                {/* Main Hero Content - Centered */}
                <MainContent />
            </div>
        </section>
    )
}