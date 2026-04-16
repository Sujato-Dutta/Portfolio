import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

export default function Hero() {
    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px] animate-glow-pulse" />
                <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] animate-glow-pulse [animation-delay:1.5s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px] animate-float" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 md:px-6 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-purple-400 text-sm md:text-base font-medium tracking-wider uppercase mb-4"
                        >
                            Welcome to my portfolio
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="text-xl md:text-2xl text-gradient font-semibold mb-6"
                        >
                            {personalInfo.title}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.65 }}
                            className="flex flex-col gap-2 mb-8 text-slate-400 text-sm md:text-base justify-center lg:justify-start items-center lg:items-start"
                        >
                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-purple-400" />
                                <span>{personalInfo.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-purple-400" />
                                <span>{personalInfo.email} (Personal)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-purple-400" />
                                <span>{personalInfo.collegeEmail} (College)</span>
                            </div>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                            className="flex items-center gap-4 justify-center lg:justify-start mb-8"
                        >
                            <a
                                href={personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href={personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="flex-shrink-0"
                    >
                        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                            {/* White Glow */}
                            <div className="absolute inset-0 rounded-full bg-white blur-[80px] opacity-30 animate-pulse -z-10" />
                            <div className="absolute inset-0 rounded-full bg-white blur-[40px] opacity-60 -z-10" />

                            <div className="relative w-full h-full rounded-full">
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    className="w-full h-full rounded-full object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
                >
                    <div className="w-1 h-2 rounded-full bg-white/40" />
                </motion.div>
            </motion.div>
        </section>
    );
}
