import { useState, useEffect } from "react"
import { Menu, X, Sparkles, ArrowRight, Home, Info } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About", href: "/about", icon: Info },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href) => pathname === href

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-violet-500/10"
            : "bg-slate-900/90 backdrop-blur-sm"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center group cursor-pointer">
              <div className="relative">
                <div className="relative p-2 rounded-2xl bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border border-violet-500/20 backdrop-blur-sm group-hover:from-violet-600/20 group-hover:to-cyan-600/20 group-hover:border-violet-500/40 transition-all duration-300">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  VaultView
                </h1>
                <div className="text-xs text-slate-400 font-medium">NFT Analytics</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center">
              <div className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-1">
                {navLinks.map((link) => (
                  <Link to={link.href} key={link.label}>
                    <button
                      className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive(link.href)
                          ? "text-white bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-violet-500/25"
                          : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.label}</span>
                      {isActive(link.href) && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-600/20 to-violet-600/20 animate-pulse" />
                      )}
                    </button>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(true)}
                className="relative p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <Menu className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />

          <div className="relative h-full flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
              <div className="flex items-center">
                <div className="p-2 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30">
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </div>
                <div className="ml-3">
                  <h2 className="text-lg font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    VaultView
                  </h2>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all duration-300"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>

            <div className="flex-1 p-6">
              <nav className="space-y-2">
                {navLinks.map((link, index) => (
                  <Link to={link.href} key={link.label} onClick={() => setMenuOpen(false)}>
                    <button
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 group ${
                        isActive(link.href)
                          ? "text-white bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`p-2 rounded-xl transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-gradient-to-r from-violet-600 to-purple-600"
                            : "bg-slate-800/50 group-hover:bg-slate-700/50"
                        }`}
                      >
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-lg font-semibold">{link.label}</div>
                        <div className="text-sm text-slate-500">
                          {link.label === "Home" && "Dashboard & Analytics"}
                          {link.label === "About" && "Learn More"}
                          {link.label === "History" && "Transaction History"}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="p-6 border-t border-slate-800/50">
              <div className="text-center text-xs text-slate-500">
                © 2024 VaultView. Built with ❤️ for NFT collectors
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
