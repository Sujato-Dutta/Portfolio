import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
                    ? "glass-strong shadow-lg shadow-black/20"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-xl font-bold text-gradient"
                    >
                        SD
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ label, href }) => (
                            <NavLink
                                key={href}
                                to={href}
                                className={({ isActive }) => `relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive
                                        ? "text-white bg-white/[0.06] border border-white/[0.08]"
                                        : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                <span className="relative z-10">{label}</span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-slate-400 hover:text-white transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-strong border-t border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-4 flex flex-col gap-1">
                            {navLinks.map(({ label, href }) => (
                                <NavLink
                                    key={href}
                                    to={href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${isActive
                                            ? "text-white bg-white/[0.06]"
                                            : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                                        }`}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
