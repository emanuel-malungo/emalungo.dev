
import CardAvatar from "./About/CardAvatar";
import MainContent from "./About/MainContent";

export default function AboutSection() {
    return (
        <section className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 w-full">
                {/* Main Hero Content - Left Column */}
                <MainContent />

                {/* Simplified Card Avatar - Right Column */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                    <CardAvatar />
                </div>
            </div>
        </section>
    )
}