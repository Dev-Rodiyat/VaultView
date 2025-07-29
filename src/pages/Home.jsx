import { useState } from "react"
import {
  ArrowRight,
  BarChart3,
  Sparkles,
  Zap,
  TrendingUp,
  Shield,
  Eye,
  Grid3X3,
  Star,
  Activity,
  Lock,
  Moon,
  ArrowUpRight,
  CheckCircle,
  Play,
  Quote,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

const isValidEthAddress = (addr) => /^0x[a-fA-F0-9]{40}$/.test(addr.trim())

export default function Home() {
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValidEthAddress(address)) {
      setError("Enter a valid Ethereum address (0x…40 hex chars).")
      return
    }
    setError("")
    navigate(`/portfolio/${address.trim()}`)
  }

  const tryDemo = () => {
    const demo = import.meta.env.VITE_DEMO_WALLET
    navigate(`/demo/${demo.trim()}`)
  }

  const testimonials = [
    {
      name: "Alex Chen",
      role: "NFT Collector",
      avatar: "/VaultView.png",
      content:
        "VaultView completely transformed how I manage my NFT portfolio. The AI insights helped me identify undervalued pieces that increased 300% in value.",
      rating: 5,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      name: "Sarah Martinez",
      role: "Digital Artist",
      avatar: "/VaultView.png",
      content:
        "As an artist, seeing my work displayed in VaultView's immersive gallery is breathtaking. It's like having a personal museum for digital art.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Zoe Williams",
      role: "DeFi Strategist",
      avatar: "/VaultView.png",
      content:
        "VaultView's holistic approach to NFT analysis has become essential to my investment strategy. The insights are incredibly valuable.",
      rating: 5,
      gradient: "from-indigo-500 to-purple-600",
    },
  ]

  return (
    <main className="bg-slate-950 text-white overflow-x-hidden pt-16">
      <section className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/30 to-purple-600/30 blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/20 to-rose-600/20 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-xl mb-8 group hover:from-violet-500/20 hover:to-cyan-500/20 transition-all duration-500">
                <div className="relative">
                  <Sparkles className="w-5 h-5 text-violet-400 group-hover:text-violet-300 transition-colors" />
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-5 h-5 text-violet-400/50" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-violet-300 group-hover:text-violet-200">
                  Next-Gen NFT Analytics • Live Now
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tight mb-10">
                <span className="block text-white/90">Discover</span>
                <span className="block bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  VaultView
                </span>
                <span className="block text-white/70 text-3xl md:text-5xl lg:text-6xl font-light mt-4">
                  NFT Universe Reimagined
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed mb-12">
                Unlock the power of your digital assets with
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold">
                  {" "}
                  real-time insights
                </span>
                ,
                <span className="text-transparent bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text font-bold">
                  {" "}
                  AI analytics
                </span>
                , and
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text font-bold">
                  {" "}
                  immersive visualizations
                </span>
                .
              </p>
              <div className="mb-10">
                <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
                  <div className="relative flex-1 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <input
                      type="text"
                      placeholder="0x... Enter your Ethereum address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
                      className="relative w-full h-16 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl px-8 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300 text-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative inline-flex items-center justify-center gap-3 h-16 px-10 font-bold text-white rounded-3xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-violet-500/25 overflow-hidden group"
                  >
                    <span className="relative z-10 text-lg">Explore Portfolio</span>
                    <ArrowRight
                      className={`w-6 h-6 relative z-10 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
                {error && (
                  <div className="mt-4 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm">
                    <p className="text-rose-400 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      {error}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-8 mb-14">
                <button
                  onClick={tryDemo}
                  className="group flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-bold transition-all duration-300 text-lg"
                >
                  <div className="relative">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 animate-ping opacity-75">
                      <Play className="w-5 h-5 text-cyan-400/50" />
                    </div>
                  </div>
                  Launch Demo Experience
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">No signup • Instant access • 100% secure</span>
                </div>
              </div>
             <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {[
                  { icon: Activity, text: "Live Analytics", color: "from-violet-400 to-purple-400" },
                  { icon: Shield, text: "Zero Trust", color: "from-cyan-400 to-blue-400" },
                  { icon: Zap, text: "Instant Sync", color: "from-pink-400 to-rose-400" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10`}>
                      <feature.icon
                        className={`w-4 h-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-slate-200">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl hover:shadow-violet-500/20 transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs text-slate-400 font-mono">vaultview-tau.vercel.app</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 border border-violet-500/50 animate-pulse group-hover:from-violet-400/40 group-hover:to-cyan-400/40 transition-all duration-500"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-violet-400" />
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full w-3/4 animate-pulse" />
                      </div>
                      <span className="text-xs text-slate-300 font-mono">847 ETH</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-cyan-400" />
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-1/2 animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        />
                      </div>
                      <span className="text-xs text-slate-300 font-mono">124 NFTs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-pink-400" />
                      <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-5/6 animate-pulse"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>
                      <span className="text-xs text-slate-300 font-mono">+23.4%</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center animate-bounce shadow-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-bounce shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Star className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Why VaultView?
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Built for the future of digital asset management with cutting-edge technology and intuitive design
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Holistic Overview",
                desc: "Complete portfolio visualization with real-time data synchronization and intelligent insights.",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                icon: Grid3X3,
                title: "Immersive Gallery",
                desc: "Stunning visual experience that showcases your NFTs with cinematic quality and smooth interactions.",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                icon: BarChart3,
                title: "Smart Analytics",
                desc: "AI-powered market analysis with predictive insights and advanced portfolio optimization tools.",
                gradient: "from-pink-500 to-rose-600",
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:from-slate-700/60 hover:to-slate-800/60 hover:border-slate-600/50 transition-all duration-500"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-8 h-8 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.desc}
                </p>
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Three simple steps to unlock your NFT universe</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Connect Wallet",
                desc: "Simply paste your Ethereum address or connect your wallet. ENS domains supported for easy access.",
                icon: Shield,
              },
              {
                number: "02",
                title: "AI Analysis",
                desc: "Our advanced algorithms fetch and analyze your entire NFT portfolio in real-time with market insights.",
                icon: Activity,
              },
              {
                number: "03",
                title: "Explore & Discover",
                desc: "Navigate your collection with our immersive interface, advanced filters, and portfolio analytics.",
                icon: Sparkles,
              },
            ].map((step, index) => (
              <div key={index} className="relative group text-center">
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-cyan-500/50 transform -translate-y-1/2 z-0" />
                )}
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-black text-xl mb-6 group-hover:from-cyan-600 group-hover:to-violet-600 transition-all duration-300">
                    {step.number}
                  </div>
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 mb-6">
                    <step.icon className="w-8 h-8 text-violet-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {step.desc}
                  </p>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
          <div className="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/10 to-purple-600/10 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Loved by Collectors
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Join thousands of NFT enthusiasts who trust VaultView to manage their digital assets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 flex items-center justify-center group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                  <Quote className="w-4 h-4 text-white" />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-2xl object-cover border-2 border-slate-600 group-hover:border-violet-400 transition-colors duration-300"
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-slate-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10,000+
              </div>
              <div className="text-slate-400 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                2.5M+
              </div>
              <div className="text-slate-400 font-medium">NFTs Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-slate-400 font-medium">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-slate-400 font-medium">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-cyan-900/20" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-slate-700/50 shadow-2xl">
            <h3 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Explore?
              </span>
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of collectors already using VaultView to manage and explore their NFT portfolios
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={tryDemo}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-violet-500/25"
              >
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Experience Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-2xl border-2 border-slate-600 hover:border-violet-500 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm transition-all duration-300"
              >
                <Shield className="w-6 h-6 group-hover:text-violet-400 transition-colors" />
                Use My Address
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>10k+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-50" />
          </div>
        </div>
      </section>
    </main>
  )
}
