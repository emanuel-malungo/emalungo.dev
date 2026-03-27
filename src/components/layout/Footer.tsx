
export default function Footer() {
    return (
        <footer className="border-t border-gray-200/60 bg-white">
            <div className="mx-auto px-3 sm:px-4 md:px-6 py-6 md:py-8 lg:max-w-7xl lg:border-x lg:border-gray-200/60">
                <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                    {/* Left Section - Info */}
                    <div className="md:text-left text-center sm:text-center">
                        <p className="text-xs md:text-sm text-gray-600">Frontend Developer & UI/UX Enthusiast</p>
                    </div>

                    {/* Center Section - Tagline */}
                    <div className="text-center">
                        <p className="text-xs md:text-sm font-medium text-gray-700">Crafting beautiful experiences with code</p>
                        <p className="text-xs text-gray-500 mt-1">Available for freelance projects</p>
                    </div>

                    {/* Right Section - Copyright */}
                    <div className="text-xs text-gray-500 text-center md:text-right">
                        <p>&copy; 2026 Emanuel Malungo. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}