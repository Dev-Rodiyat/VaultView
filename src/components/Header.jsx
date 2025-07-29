import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import useDarkMode from "../hooks/useDarkMode";
import LOGO from './../assets/VaultView.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { isDark, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Explore", href: "/explore" },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className="bg-white dark:bg-slate-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          {/* Vault<span className="text-indigo-500">View</span> */}
          <img src={LOGO} alt="VaultView Logo" className="w-full h-10"/>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition font-medium ${
                isActive(link.href)
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="ml-4 text-slate-600 dark:text-slate-300 hover:text-indigo-500">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle */}
          <button onClick={toggleDarkMode} className="text-slate-600 dark:text-slate-300 hover:text-indigo-500">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(true)} className="text-slate-700 dark:text-slate-200">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Nav */}
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} navLinks={navLinks} />}
      </div>
    </header>
  );
};

export default Header;
