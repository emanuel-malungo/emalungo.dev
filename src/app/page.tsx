import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import avatar from "@/assets/images/avatar.png"
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCode, FaPalette, FaDownload, FaUser, FaBrain, FaFolderOpen } from "react-icons/fa"

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

        <section className="md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 w-full py-12 md:py-0">
          {/* Card Avatar - Left Column */}
          <div className="relative group shrink-0">
            {/* Decorative ring around the card */}
            <div className="absolute -inset-1 bg-linear-to-r from-accent/50 to-black/10 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative bg-white rounded-2xl p-8 w-[340px] border border-gray-200/60 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Avatar */}
                <div className="relative -mt-20 mb-2">
                  <div className="w-40 h-40 rounded-full p-2 bg-white shadow-2xl overflow-hidden border border-gray-100 transform transition-transform group-hover:scale-105 duration-500">
                    <Image 
                      src={avatar} 
                      alt="Avatar" 
                      width={160} 
                      height={160} 
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <h4 className="text-2xl font-bold text-black font-serif tracking-tight">Emanuel Malungo</h4>
                  <p className="text-sm font-semibold text-accent uppercase tracking-widest">Frontend Developer</p>
                </div>

                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

                {/* Contact Info with Icons */}
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-4 text-sm text-gray-700 group/item cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-black group-hover/item:bg-black group-hover/item:text-white transition-all duration-300">
                      <FaPhone className="text-xs" />
                    </div>
                    <span className="font-medium group-hover/item:text-black transition-colors">+258 84 123 4567</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-700 group/item cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-black group-hover/item:bg-black group-hover/item:text-white transition-all duration-300">
                      <FaEnvelope className="text-xs" />
                    </div>
                    <span className="font-medium truncate group-hover/item:text-black transition-colors">emmanuel@dev.com</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-700 group/item cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 group-hover/item:border-black group-hover/item:bg-black group-hover/item:text-white transition-all duration-300">
                      <FaMapMarkerAlt className="text-xs" />
                    </div>
                    <span className="font-medium group-hover/item:text-black transition-colors">Maputo, Mozambique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Hero Content - Center Column */}
          <div className="flex-1 space-y-8 max-w-lg text-center md:text-left">
            <div className="space-y-3">
              <div className="space-y-1">
                <h3 className="text-lg text-gray-600 font-serif italic">Hello, I'm</h3>
                <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black leading-tight">
                  Emanuel <br />
                  <span className="text-accent underline decoration-black/5 underline-offset-8">Malungo</span>
                </h1>
                <h2 className="text-xl font-sans font-light text-gray-500 mt-2 tracking-wide uppercase">
                  Frontend Developer & UI Specialist
                </h2>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base max-w-md font-sans">
              Crafting immersive digital experiences through clean code and artistic design. Specializing in React, Next.js, and high-performance web applications.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button className="group relative px-6 py-3 bg-black text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-black/20 transition-all active:scale-95 flex items-center gap-3 text-sm">
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-black/20">
                  <FaDownload className="text-white text-[10px] group-hover:animate-bounce" />
                </div>
                <span className="relative">Download Resume</span>
              </button>
              
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-px bg-gray-300"></div>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Connect</h4>
                <ul className="flex gap-3">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                      <FaLinkedin size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                      <FaGithub size={18} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-black transition-colors transform hover:-translate-y-1 block">
                      <FaTwitter size={18} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

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
      </main>
      <Footer />
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button 
      className={`group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
        active 
          ? 'bg-black text-white shadow-lg shadow-black/20' 
          : 'bg-white/50 text-gray-500 hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/10'
      }`}
      title={label}
      aria-label={label}
    >
      <span className="text-xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
      
      {/* Tooltip */}
      <span className="absolute left-0 -translate-x-full ml-[-12px] px-2 py-1 bg-black text-white text-[10px] uppercase tracking-widest font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
