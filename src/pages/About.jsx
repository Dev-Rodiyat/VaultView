import { useState } from "react";
import { 
  ChevronDown, 
  Sparkles, 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Eye, 
  Grid3X3,
  TrendingUp,
  Globe,
  Smartphone,
  Moon,
  Play,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Lightbulb,
  Rocket
} from "lucide-react";

const faqs = [
  {
    question: "What is VaultView?",
    answer: "VaultView is a cutting-edge NFT portfolio tracker that provides real-time analytics and beautiful visualizations. It lets you explore any Ethereum wallet's NFT collection through our advanced interface with AI-powered insights and market analysis.",
    icon: Sparkles
  },
  {
    question: "Do I need to sign in?",
    answer: "Absolutely not! Simply paste any wallet address or ENS domain to instantly explore NFT collections. Our zero-friction approach means no logins, no wallet connections, and no barriers to discovery.",
    icon: Shield
  },
  {
    question: "Which blockchains are supported?",
    answer: "Currently optimized for Ethereum mainnet with comprehensive coverage. We're actively expanding to Polygon, Arbitrum, Base, and other major L1/L2 networks. Multi-chain support is coming very soon!",
    icon: Globe
  },
  {
    question: "Is VaultView free?",
    answer: "Yes! Core portfolio viewing is completely free forever. We're building premium features like advanced analytics, portfolio tracking, and market insights that will be available through subscription tiers.",
    icon: Heart
  },
  {
    question: "How accurate is the data?",
    answer: "We use enterprise-grade APIs and real-time blockchain data to ensure 99.9% accuracy. Our systems update continuously, so you're always seeing the most current state of any portfolio.",
    icon: TrendingUp
  },
  {
    question: "Can I track portfolio performance?",
    answer: "Our advanced analytics engine provides comprehensive performance tracking, including floor price movements, collection insights, and market trends. Perfect for serious collectors and traders.",
    icon: Target
  }
];

const features = [
  {
    icon: Eye,
    title: "Real-time Portfolio Viewing",
    description: "Instant wallet analysis with live data synchronization"
  },
  {
    icon: Globe,
    title: "ENS Resolution Support", 
    description: "Works seamlessly with Ethereum Name Service domains"
  },
  {
    icon: Grid3X3,
    title: "Immersive NFT Gallery",
    description: "Beautiful, responsive grid with advanced filtering"
  },
  {
    icon: Moon,
    title: "Adaptive Dark Mode",
    description: "Intelligent theming that adapts to your preferences"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Optimized experience across all devices and screen sizes"
  },
  {
    icon: Play,
    title: "Demo Mode",
    description: "Try VaultView instantly with curated demo wallets"
  }
];

const stats = [
  { number: "10K+", label: "Active Users", icon: Users },
  { number: "1M+", label: "NFTs Analyzed", icon: Eye },
  { number: "99.9%", label: "Uptime", icon: Zap },
  { number: "<1s", label: "Load Time", icon: TrendingUp }
];

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm mb-8">
            <Lightbulb className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-semibold text-violet-300">About VaultView</span>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            <span className="block text-white/90">We're Building</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              The Future
            </span>
            <span className="block text-white/70 text-3xl md:text-5xl font-light mt-4">
              of NFT Analytics
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
            At <span className="font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">VaultView</span>, 
            we're passionate about making NFTs more accessible, understandable, and beautiful for everyone.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm group-hover:from-slate-700/60 group-hover:to-slate-800/60 group-hover:border-slate-600/50 transition-all duration-300">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 mb-4">
                    <stat.icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-8">
                <Target className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-semibold text-violet-300">Our Mission</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  Democratizing
                </span>
                <br />
                <span className="text-white">NFT Discovery</span>
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                We're building the fastest, cleanest, and most intuitive NFT portfolio dashboard on the web. 
                Our goal is to empower users with powerful tools to browse, discover, and showcase collections without any friction.
              </p>

              <div className="space-y-4">
                {[
                  "Zero barriers to entry - no signups or wallet connections",
                  "Lightning-fast performance with real-time data",
                  "Beautiful, intuitive interfaces that anyone can use",
                  "Advanced analytics for serious collectors and traders"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 mt-2">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-300 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                {/* Mock Interface */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 border border-violet-500/50 animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-2 bg-gradient-to-r from-violet-500/50 to-transparent rounded-full" />
                    <div className="h-2 bg-gradient-to-r from-cyan-500/50 to-transparent rounded-full w-3/4" />
                    <div className="h-2 bg-gradient-to-r from-pink-500/50 to-transparent rounded-full w-1/2" />
                  </div>
                </div>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-50" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center animate-bounce">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <Star className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-8">
              <Zap className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">What We Do</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Everything you need to explore, analyze, and understand NFT portfolios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:from-slate-700/60 hover:to-slate-800/60 hover:border-slate-600/50 transition-all duration-500">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-8">
              <Lightbulb className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">FAQ</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Got Questions?
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to know about VaultView
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="relative bg-slate-800/50 border border-slate-700/50 rounded-3xl">
                <button
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-700/50 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('FAQ clicked:', index);
                    toggleFAQ(index);
                  }}
                  type="button"
                >
                  <div className="flex items-center gap-4 pointer-events-none">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20">
                      <faq.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <span className="text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-slate-400 transition-transform duration-300 pointer-events-none ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-16 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-slate-900 to-cyan-900/20" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-slate-700/50 shadow-2xl">
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 mb-8">
              <Sparkles className="w-8 h-8 text-violet-400" />
            </div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ready to Explore?
              </span>
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of collectors who trust VaultView to manage and explore their NFT portfolios with cutting-edge analytics.
            </p>
            
            <button className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-violet-500/25">
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Try VaultView Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
}