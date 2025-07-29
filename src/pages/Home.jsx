import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    BarChart3,
    Sparkles,
    Zap,
    Eye,
    Grid3X3,
} from "lucide-react";

const isValidEthAddress = (addr) =>
    /^0x[a-fA-F0-9]{40}$/.test(addr.trim());

export default function Home() {
    const navigate = useNavigate();
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEthAddress(address)) {
            setError("Enter a valid Ethereum address (0x…40 hex chars).");
            return;
        }
        setError("");
        navigate(`/explore?address=${address.trim()}`);
    };

    const tryDemo = () => {
        // Use a harmless placeholder address
        const demo = "0x1111111111111111111111111111111111111111";
        navigate(`/explore?address=${demo}`);
    };

    return (
        <main className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100">
            <section className="relative overflow-hidden">
                {/* Background Blurs */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-30">
                    <div className="absolute -top-24 -right-32 h-72 w-72 rounded-full blur-3xl bg-indigo-300/50 dark:bg-indigo-500/30" />
                    <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full blur-3xl bg-cyan-200/60 dark:bg-cyan-500/30" />
                </div>

                <div className="max-w-7xl mx-auto px-4 pt-20 pb-28 md:pt-28 md:pb-36">
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        {/* Left Column */}
                        <div>
                            <p className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 mb-5">
                                <Sparkles className="w-4 h-4" />
                                NFT Portfolio Tracking — Modern & Fast
                            </p>

                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                                Meet <span className="text-indigo-600 dark:text-indigo-400">VaultView</span> — your
                                clean, real‑time NFT dashboard.
                            </h1>

                            <p className="mt-6 text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                                Enter any Ethereum wallet to instantly view NFT collections, floor hints,
                                and a beautiful gallery. Built for speed, clarity, and demos that wow.
                            </p>

                            {/* Wallet Form */}
                            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
                                <label htmlFor="wallet" className="sr-only">Wallet Address</label>
                                <input
                                    id="wallet"
                                    type="text"
                                    inputMode="text"
                                    placeholder="0x… your Ethereum address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition"
                                >
                                    View Portfolio <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                            {error && (
                                <p className="mt-2 text-sm text-rose-600 dark:text-rose-400">{error}</p>
                            )}

                            <div className="mt-5 flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={tryDemo}
                                    className="text-sm underline underline-offset-4 hover:text-indigo-600 dark:hover:text-indigo-400"
                                >
                                    Try a demo wallet
                                </button>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    No sign-in needed.
                                </span>
                            </div>
                        </div>

                        {/* NFT Grid Preview */}
                        <div className="hidden md:block">
                            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/60 p-6 shadow-xl backdrop-blur">
                                <div className="flex items-center gap-2 mb-4">
                                    <Grid3X3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                    <span className="text-sm text-slate-600 dark:text-slate-300">Preview</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {Array.from({ length: 9 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-xl bg-slate-100 dark:bg-slate-700/60"
                                        />
                                    ))}
                                </div>
                                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                                    Sample NFT grid preview (placeholder).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-14 md:py-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Why VaultView?</h2>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                        Purpose‑built for competition demos: fast, elegant, and easy to extend.
                    </p>

                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Feature
                            icon={<Eye className="w-5 h-5" />}
                            title="Clean Overview"
                            desc="Instant snapshot of collections and items with crisp, readable UI."
                        />
                        <Feature
                            icon={<Grid3X3 className="w-5 h-5" />}
                            title="Gallery First"
                            desc="Beautiful responsive grid that lets artwork shine on any screen."
                        />
                        <Feature
                            icon={<BarChart3 className="w-5 h-5" />}
                            title="Value Hints"
                            desc="Show counts and basic signals; extend later with floor data."
                        />
                        <Feature
                            icon={<Zap className="w-5 h-5" />}
                            title="Snappy"
                            desc="Built with modern React and Tailwind for blazing interaction."
                        />
                        <Feature
                            icon={<ShieldCheck className="w-5 h-5" />}
                            title="Privacy‑Friendly"
                            desc="No login required. Query by public address only."
                        />
                        <Feature
                            icon={<Sparkles className="w-5 h-5" />}
                            title="Dark Mode"
                            desc="Automatic or manual toggle to match user preference."
                        />
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-14 md:py-20 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold">How it works</h2>

                    <ol className="mt-8 grid md:grid-cols-3 gap-6">
                        <Step
                            number="1"
                            title="Enter a wallet"
                            desc="Paste any Ethereum address. ENS support can be added later."
                        />
                        <Step
                            number="2"
                            title="Fetch assets"
                            desc="Call your NFT API (e.g., Alchemy/Moralis) to retrieve metadata & images."
                        />
                        <Step
                            number="3"
                            title="Explore the gallery"
                            desc="Sort, filter, and quickly scan collections with a responsive grid."
                        />
                    </ol>
                </div>
            </section>

            <section className="relative overflow-hidden py-14 md:py-20">
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-indigo-100/60 to-transparent dark:from-indigo-950/50" />
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 md:p-10 text-center shadow-lg">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Ready to see a wallet in action?
                        </h3>
                        <p className="mt-2 text-slate-600 dark:text-slate-300">
                            Try the demo address or paste your own to explore NFTs instantly.
                        </p>
                        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button
                                onClick={tryDemo}
                                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition"
                            >
                                Try demo wallet <ArrowRight className="w-4 h-4" />
                            </button>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className="px-5 py-3 font-semibold rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                            >
                                Paste my address
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function Feature({ icon, title, desc }) {
    return (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/70 dark:bg-slate-900/50">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
                {icon}
                <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
        </div>
    );
}

function Step({ number, title, desc }) {
    return (
        <li className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-900/50">
            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                {number}
            </div>
            <h4 className="mt-3 font-semibold">{title}</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
        </li>
    );
}
