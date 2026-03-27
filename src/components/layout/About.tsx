
import CardAvatar from "./About/CardAvatar";
import MainContent from "./About/MainContent";

export default function AboutSection() {
    return (
        <section id="about" className="w-full flex items-center">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16 w-full">
                {/* Main Hero Content - Left Column (Appears second on mobile) */}
                <MainContent />

                {/* Simplified Card Avatar - Right Column (Appears first on mobile) */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <CardAvatar />
                </div>
            </div>
        </section>
    )
}