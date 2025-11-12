import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { href: "/seguridad", label: "Seguridad y Control de Acceso" },
        { href: "/dashboard", label: "Panel de Control (Dashboard)" },
        { href: "/accesibilidad", label: "Experiencia y Accesibilidad" },
        { href: "/redes", label: "Gestión de Redes Sociales" },
        { href: "/blog", label: "Blog Corporativo" },
        { href: "/ciberriesgo", label: "Seguro de Ciberriesgo" },
        { href: "/plantillas", label: "Plantillas" },
    ];

    const social = [
        { icon: <FaInstagram size={18} className="text-sky-400 mr-2" />, href: "https://www.instagram.com/dereyesalimentos/", label: "Visit Instagram profile" },
        { icon: <FaFacebook size={18} className="text-gray-300 mr-2" />, href: "https://www.facebook.com/dereyesalimentos", label: "Visit Facebook profile" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex fixed top-5 left-5 right-4 z-50 backdrop-blur-md bg-white/50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/50 shadow-lg rounded-2xl px-6 py-4 items-center justify-between transition-all">
                {/* Logo y Links juntos */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Bitcount Grid Single, monospace' }}>
                        <Link to="/">
                            <span className="bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent select-none">
                                DeReyes
                            </span>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 text-base" style={{ fontFamily: 'Bitcount Grid Single, monospace' }}>
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative transition-all duration-180 text-1xl ${currentPath === link.href ? "text-pink-400 text-2xl" : "text-zinc-700 dark:text-zinc-300"
                                    }`}
                            >
                                {link.label}
                                {hovered === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-2/3 bg-gradient-to-r from-pink-400 to-sky-400 rounded-full animate-pulse"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-4">
                    {social.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="hover:scale-110 transition-transform"
                        >
                            {item.icon}
                        </a>
                    ))}

                    <div className="w-px h-6 bg-zinc-200 mx-2"></div>

                    <button
                        onClick={toggleTheme}
                        className="hover:scale-110 transition-transform"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} className="text-yellow-400 mr-0" />
                        ) : (
                            <Moon size={18} className="text-gray-200 mr-0" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="md:hidden fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700/50 shadow-lg rounded-2xl px-4 py-3 transition-all">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl font-bold" style={{ fontFamily: 'Bitcount Grid Single, monospace' }}>
                        <span className="bg-gradient-to-r from-pink-400 to-sky-400 bg-clip-text text-transparent select-none">
                            ප DeReyes ප
                        </span>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-zinc-700 dark:text-zinc-300 hover:text-pink-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
                        {/* Links */}
                        <div className="flex flex-col gap-3 mb-4" style={{ fontFamily: 'Bitcount Grid Single, monospace' }}>
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={handleLinkClick}
                                    className={`text-lg transition-colors ${currentPath === link.href ? "text-pink-400 font-bold" : "text-zinc-700 dark:text-zinc-300"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Social icons */}
                        <div className="flex items-center gap-4 pb-2">
                            {social.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={item.label}
                                    className="hover:scale-110 transition-transform"
                                >
                                    {item.icon}
                                </a>
                            ))}

                            <div className="w-px h-6 bg-zinc-600 mx-2"></div>

                            <button
                                onClick={toggleTheme}
                                className="hover:scale-110 transition-transform"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun size={18} className="text-yellow-400" />
                                ) : (
                                    <Moon size={18} className="text-gray-200" />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}