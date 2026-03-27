
import NavItem from "../common/NavItem";
import CardAvatar from "./About/CardAvatar";
import MainContent from "./About/MainContent";
import { FaCode, FaPalette, FaUser, FaBrain, FaFolderOpen } from "react-icons/fa"

export default function AboutSection() {
    return (
        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
            {/* Card Avatar - Left Column */}
            <CardAvatar />

            {/* Main Hero Content - Center Column */}
            <MainContent />

            {/* Sidebar Navigation - Right Column */}
            <aside className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 items-center p-2 bg-white/40 backdrop-blur-md rounded-full border border-white/50 shadow-sm z-50">
                <nav className="flex flex-col gap-4">
                    <NavItem icon={<FaUser />} label="Sobre" active />
                    <NavItem icon={<FaBrain />} label="Skills" />
                    <NavItem icon={<FaCode />} label="Stack" />
                    <NavItem icon={<FaFolderOpen />} label="Portfolio" />
                    <div className="w-6 h-px bg-gray-200 mx-auto my-1"></div>
                    <NavItem icon={<FaPalette />} label="Creative" />
                </nav>
            </aside>
        </section>
    )
}