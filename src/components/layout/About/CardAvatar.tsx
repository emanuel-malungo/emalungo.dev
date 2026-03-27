import Image from "next/image";
import avatar from "@/assets/images/avatar.png"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function CardAvatar() {
    return (
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
    )
}