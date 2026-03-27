import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import AboutSection from "@/components/layout/About";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-to-br from-primary via-cream to-gray-100">
      <Header />
      <main className="flex-1 mx-auto w-full md:max-w-7xl md:border-x md:border-black/5 overflow-y-auto overflow-x-hidden px-4 md:px-0 flex flex-col items-center justify-center relative">
        {/* Subtle Background Elements wrapped to prevent overflow-x */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gray-300/20 rounded-full blur-3xl"></div>
        </div>

        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

