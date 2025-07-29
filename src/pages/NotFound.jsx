import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Home, Search, Sparkles, AlertTriangle, Zap, Star, Eye, ArrowRight } from "lucide-react"

const NotFound = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1)
    } else {
      navigate("/")
    }
  }

  const handleHome = () => {
    navigate("/")
  }

  return (
    <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden flex items-center justify-center pt-28">
      {/* Dynamic Background */}
      <div className="pointer-events-none fixed inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/10 to-rose-600/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-slate-700/50 shadow-2xl"
        >
          {/* Floating Error Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <div className="relative">
              {/* Main icon container */}
              <div className="relative p-6 rounded-3xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 backdrop-blur-sm">
                <AlertTriangle className="w-16 h-16 text-violet-400" />
                {/* Animated glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 animate-pulse" />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
              >
                <Zap className="w-4 h-4 text-white" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center"
              >
                <Star className="w-3 h-3 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-8xl md:text-9xl font-black leading-none mb-4">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Oops! Page Not Found</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void.
              <span className="text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-semibold">
                {" "}
                Let's get you back on track!
              </span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={handleBack}
              className="group relative inline-flex items-center gap-3 px-8 py-4 cursor-pointer font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-violet-500/25 overflow-hidden"
            >
              <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="relative z-10">Go Back</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={handleHome}
              className="group inline-flex items-center gap-3 px-8 py-4 cursor-pointer font-bold text-white rounded-2xl border-2 border-slate-600 hover:border-violet-500 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm transition-all duration-300"
            >
              <Home className="w-5 h-5 group-hover:text-violet-400 transition-colors" />
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-slate-700/50 pt-8"
          >
            <p className="text-slate-400 mb-6">Or try one of these popular sections:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Search, text: "Explore NFTs", href: "/" },
                { icon: Eye, text: "Portfolio View", href: "/portfolio" },
                { icon: Sparkles, text: "Analytics", href: "/analytics" },
              ].map((link, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  onClick={() => navigate(link.href)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-600/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 group-hover:from-violet-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                    <link.icon className="w-4 h-4 text-violet-400 group-hover:text-violet-300" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-slate-200">{link.text}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Background glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-50" />
        </motion.div>

        {/* Additional floating elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -top-8 -left-8 w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 backdrop-blur-sm border border-violet-500/30 flex items-center justify-center"
        >
          <Sparkles className="w-8 h-8 text-violet-400" />
        </motion.div>

        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-8 -right-8 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
        >
          <Eye className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
