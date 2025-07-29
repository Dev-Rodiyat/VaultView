import {
    Sparkles,
    Github,
    Twitter,
    Mail,
    Heart,
    ArrowUpRight,
    Shield,
    Zap,
    Users,
    TrendingUp,
    ExternalLink
} from "lucide-react";
import SubscribeCard from "./SubscribeCard";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: "Features", href: "#features" },
            { label: "Analytics", href: "#analytics" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "About", href: "/about" },
        ]
    };

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
        { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-300" },
        { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
    ];

    const stats = [
        { icon: Users, value: "10K+", label: "Active Users" },
        { icon: TrendingUp, value: "99.9%", label: "Uptime" },
        { icon: Shield, value: "100%", label: "Secure" },
        { icon: Zap, value: "<1s", label: "Load Time" },
    ];

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800/50 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-violet-500/10 to-purple-600/10 blur-3xl" />
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <div className="flex items-center group">
                                    <div className="relative">
                                        <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-violet-500/30 backdrop-blur-sm group-hover:from-violet-600/30 group-hover:to-cyan-600/30 transition-all duration-300">
                                            <Sparkles className="w-8 h-8 text-violet-400" />
                                        </div>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                            VaultView
                                        </h3>
                                        <p className="text-sm text-slate-400 font-medium">NFT Analytics Platform</p>
                                    </div>
                                </div>

                                <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                                    Empowering NFT collectors with advanced analytics, real-time insights, and beautiful portfolio management tools.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="group">
                                        <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group-hover:bg-slate-700/40 group-hover:border-slate-600/50 transition-all duration-300">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
                                                    <stat.icon className="w-4 h-4 text-violet-400" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                            <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <SubscribeCard />
                        </div>

                        <div className="flex items-center justify-center">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">
                                        {category}
                                    </h4>
                                    <ul className="flex gap-4 sm:flex-row flex-col">
                                        {links.map((link, index) => (
                                            <li key={index}>
                                                <a
                                                    href={link.href}
                                                    className="group flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                                                >
                                                    <span>{link.label}</span>
                                                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span>&copy; {currentYear}</span>
                            <span className="font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                VaultView
                            </span>
                            <span>• All rights reserved</span>
                            <div className="flex items-center gap-1 ml-2">
                                <span className="text-xs">Built with</span>
                                <Heart className="w-3 h-3 text-red-400 animate-pulse" />
                                <span className="text-xs">for NFT collectors</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <span className="text-sm text-slate-500 font-medium">Follow us</span>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`group p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/40 hover:border-slate-600/50 transition-all duration-300 ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            </div>
        </footer>
    );
};

export default Footer;