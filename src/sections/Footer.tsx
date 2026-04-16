

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Name & Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold text-gradient mb-1">
                            {personalInfo.name}
                        </p>
                        <p className="text-sm text-slate-500">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
