import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-200">
      <Header />
      <main className="flex-1 mx-auto w-full md:max-w-7xl md:border-x md:border-gray-300 overflow-auto px-4 md:px-0 flex flex-col items-center justify-center">
          {/* Conteúdo Principal */}
      </main>
      <Footer />
    </div>
  );
}
