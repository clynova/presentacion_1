import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useTheme } from "../../../contexts/ThemeContext";

export default function Navbar() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(true);
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
        { icon: <FaInstagram size={18} className="text-red-400 mr-2" />, href: "https://www.instagram.com/dereyesalimentos/", label: "Visit Instagram profile" },
        { icon: <FaFacebook size={18} className="text-red-500 mr-2" />, href: "https://www.facebook.com/dereyesalimentos", label: "Visit Facebook profile" },
    ];

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className={`hidden md:flex fixed left-5 right-4 z-50 backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 border border-red-200 dark:border-red-900/50 shadow-lg rounded-2xl px-6 py-3 items-center justify-between transition-all duration-300 ${navbarVisible ? 'top-5' : '-top-24'}`}>
                {/* Logo y Links juntos */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <Link to="/">
                            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent select-none hover:from-red-500 hover:to-red-300 transition-all">
                                DeReyes
                            </span>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 text-xs">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                onMouseEnter={() => setHovered(link.href)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative transition-all duration-180 whitespace-nowrap ${currentPath === link.href ? "text-red-600 dark:text-red-400 font-semibold" : "text-zinc-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400"
                                    }`}
                            >
                                {link.label}
                                {hovered === link.href && (
                                    <span className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-2/3 bg-gradient-to-r from-red-600 to-red-400 rounded-full animate-pulse"></span>
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

                    <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-600 mx-2"></div>

                    <button
                        onClick={toggleTheme}
                        className="hover:scale-110 transition-transform"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? (
                            <Sun size={18} className="text-yellow-400 mr-0" />
                        ) : (
                            <Moon size={18} className="text-zinc-600 mr-0" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className={`md:hidden fixed left-4 right-4 z-50 backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 border border-red-200 dark:border-red-900/50 shadow-lg rounded-2xl px-4 py-3 transition-all duration-300 ${navbarVisible ? 'top-4' : '-top-24'}`}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="text-lg font-bold">
                        <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent select-none">
                            DeReyes
                        </span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-zinc-700 dark:text-zinc-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-900/50">
                        {/* Links */}
                        <div className="flex flex-col gap-3 mb-4">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    onClick={handleLinkClick}
                                    className={`text-sm transition-colors ${currentPath === link.href ? "text-red-600 dark:text-red-400 font-bold" : "text-zinc-700 dark:text-zinc-300"
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

                            <div className="w-px h-6 bg-zinc-400 dark:bg-zinc-600 mx-2"></div>

                            <button
                                onClick={toggleTheme}
                                className="hover:scale-110 transition-transform"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <Sun size={18} className="text-yellow-400" />
                                ) : (
                                    <Moon size={18} className="text-zinc-600" />
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Toggle Navbar Button Desktop */}
            <button
                onClick={() => setNavbarVisible(!navbarVisible)}
                className="hidden md:block fixed top-2 right-8 z-50 bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 text-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
                aria-label={navbarVisible ? "Ocultar navegación" : "Mostrar navegación"}
            >
                {navbarVisible ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Toggle Navbar Button Mobile */}
            <button
                onClick={() => setNavbarVisible(!navbarVisible)}
                className="md:hidden fixed top-1 right-6 z-50 bg-gradient-to-r from-red-600 to-red-400 text-white p-2 rounded-full shadow-lg transition-all"
                aria-label={navbarVisible ? "Ocultar navegación" : "Mostrar navegación"}
            >
                {navbarVisible ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
        </>
    );
}