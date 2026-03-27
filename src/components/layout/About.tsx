
import CardAvatar from "./About/CardAvatar";
import MainContent from "./About/MainContent";

export default function AboutSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            {/* Card Avatar - Left Column */}
            <CardAvatar />

            {/* Main Hero Content - Center Column */}
            <MainContent />
        </section>
    )
}