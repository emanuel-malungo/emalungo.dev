import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import avatar from "@/assets/images/avatar.png"
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCode, FaPalette, FaDownload, FaUser, FaBrain, FaFolderOpen } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen bg-linear-to-br from-primary via-cream to-gray-100">
      <Header />
      <main className="flex-1 mx-auto w-full md:max-w-7xl md:border-x md:border-gray-200/60 overflow-auto px-4 md:px-0 flex flex-col items-center justify-center">
        {/* Main content goes here */}
        <section className="md:px-8 flex justify-between items-center gap-8 w-full" >
          {/* Card Avatar */}
          <div className="bg-white rounded-xl p-6 w-[320px] border border-gray-200 shrink-0" >
            <div className="flex flex-col items-center text-center space-y-4 border border-gray-200 p-6">
              {/* Avatar */}
              <div className="relative -mt-16 mb-2">
                <div className="w-34 h-34 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                  <Image src={avatar} alt="Avatar" width={96} height={96} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Info */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 font-serif">Emanuel Malungo</h4>
                <h5 className="text-sm font-medium text-black">Frontend Developer</h5>
              </div>

              <hr className="w-full border-gray-200" />

              {/* Contact Info with Icons */}
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">
                    <FaPhone className="text-black text-xs" />
                  </div>
                  <span>+258 84 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-black text-xs" />
                  </div>
                  <span className="truncate">emmanuel@dev.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-black text-xs" />
                  </div>
                  <span>Maputo, MZ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6 max-w-lg">
            <div>
              <h3 className="text-lg text-gray-700">Hello, I'm</h3>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl font-serif font-bold tracking-tight">Emanuel Malungo</h1>
              <h4 className="text-2xl text-gray-500">Frontend Developer</h4>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">I'm a passionate frontend developer with experience in creating modern web applications.</p>

            <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors shadow-lg flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                <FaDownload className="text-black text-sm" />
              </div>
              Download CV
            </button>

            {/* Social Links with Icons */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <h4 className="text-sm font-bold text-gray-900">Follow me</h4>
                <ul className="flex gap-3">
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-black bg-transparent text-gray-600 hover:text-black hover:border-black transition-colors flex items-center justify-center">
                      <FaLinkedin size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-black bg-transparent text-gray-600 hover:text-gray-900 hover:border-gray-900 transition-colors flex items-center justify-center">
                      <FaGithub size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border-2 border-black bg-transparent text-gray-600 hover:text-blue-400 hover:border-blue-400 transition-colors flex items-center justify-center">
                      <FaTwitter size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <aside className="flex flex-col gap-4 shrink-0">
            <button className="w-10 h-10 rounded-full bg-black text-white hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" title="Sobre mim" aria-label="Sobre mim">
              <FaUser />
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" title="Soft Skills" aria-label="Soft Skills">
              <FaBrain />
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" title="Hard Skills" aria-label="Hard Skills">
              <FaCode />
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" title="Projectos" aria-label="Projectos">
              <FaFolderOpen />
            </button>

            <div className="border-t border-gray-300 my-2"></div>

            <button className="w-10 h-10 rounded-full bg-black text-white hover:shadow-lg transition-all hover:scale-110 flex items-center justify-center" title="Creative" aria-label="Creative">
              <FaPalette />
            </button>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}
