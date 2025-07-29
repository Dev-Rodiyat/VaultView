import { useEffect, useState } from "react";
import { fetchNFTsForWallet, fetchFloorPrice } from "../utils/fetchNFT";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { 
  TrendingUp, 
  Eye, 
  Coins, 
  Crown, 
  BarChart3,
  Sparkles,
  Target,
  Zap,
  Activity,
  Wallet,
  Star,
  Award,
  Diamond
} from "lucide-react";

const COLORS = [
  "#8b5cf6", // violet
  "#06b6d4", // cyan  
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ec4899", // pink
  "#3b82f6", // blue
  "#ef4444", // red
  "#84cc16"  // lime
];

const Analytics = ({ address }) => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState(null);

    useEffect(() => {
        if (!address) return;

        const loadNFTs = async () => {
            setLoading(true);
            const data = await fetchNFTsForWallet(address);

            const enriched = await Promise.all(
                data.map(async (nft) => {
                    const floor = await fetchFloorPrice(nft.contract.address);
                    return { ...nft, floorPrice: floor };
                })
            );

            setNfts(enriched);
            calculateStats(enriched);
            setLoading(false);
        };

        loadNFTs();
    }, [address]);

    const calculateStats = (nfts) => {
        const collections = {};
        const collectionDetails = {};
        let totalFloor = 0;
        let countWithFloor = 0;
        let highestNFT = null;

        for (let nft of nfts) {
            const contract = nft.contract.address;
            const collectionName = nft.contract.name || `Collection ${contract.slice(0, 6)}...`;
            
            collections[contract] = (collections[contract] || 0) + 1;
            collectionDetails[contract] = collectionName;

            if (nft.floorPrice) {
                totalFloor += nft.floorPrice;
                countWithFloor++;
                if (!highestNFT || nft.floorPrice > highestNFT.floorPrice) {
                    highestNFT = nft;
                }
            }
        }

        const sortedCollections = Object.entries(collections)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 8);

        setStats({
            totalNFTs: nfts.length,
            uniqueCollections: Object.keys(collections).length,
            averageFloor: countWithFloor ? (totalFloor / countWithFloor).toFixed(3) : "0",
            totalValue: totalFloor.toFixed(3),
            highestFloor: highestNFT?.floorPrice?.toFixed(3) || "0",
            mostValuable: highestNFT,
            chartData: sortedCollections.map(([contract, count]) => ({
                name: collectionDetails[contract],
                shortName: collectionDetails[contract].length > 15 
                    ? collectionDetails[contract].slice(0, 15) + "..." 
                    : collectionDetails[contract],
                value: count,
                contract: contract
            })),
            barData: sortedCollections.slice(0, 6).map(([contract, count]) => ({
                name: collectionDetails[contract].length > 12 
                    ? collectionDetails[contract].slice(0, 12) + "..." 
                    : collectionDetails[contract],
                count: count
            }))
        });
    };

    const StatCard = ({ icon: Icon, label, value, gradient, delay = 0 }) => (
        <div 
            className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:from-slate-700/70 hover:to-slate-800/70 hover:border-slate-600/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-2">
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{label}</p>
                    <p className="text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {value}
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
    );

    const SkeletonCard = ({ delay = 0 }) => (
        <div 
            className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 animate-pulse"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-2xl" />
                <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-24" />
                    <div className="h-8 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-32" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-20">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/10 to-purple-600/10 blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-gradient-to-br from-pink-500/5 to-purple-600/5 blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm mb-8">
                        <Activity className="w-5 h-5 text-violet-400" />
                        <span className="text-sm font-semibold text-violet-300">Portfolio Analytics</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Deep Insights
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Comprehensive analytics and performance metrics for your NFT portfolio
                    </p>
                </div>

                {loading || !stats ? (
                    <>
                        {/* Loading Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[...Array(4)].map((_, i) => (
                                <SkeletonCard key={i} delay={i * 100} />
                            ))}
                        </div>

                        {/* Loading Charts */}
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30">
                                <div className="animate-pulse space-y-6">
                                    <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-64" />
                                    <div className="h-80 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl flex items-center justify-center">
                                        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-slate-600 to-slate-500" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30">
                                <div className="animate-pulse space-y-6">
                                    <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full w-56" />
                                    <div className="h-80 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            <StatCard 
                                icon={Eye} 
                                label="Total NFTs" 
                                value={stats.totalNFTs.toLocaleString()} 
                                gradient="from-violet-500 to-purple-600"
                                delay={0}
                            />
                            <StatCard 
                                icon={Target} 
                                label="Collections" 
                                value={stats.uniqueCollections} 
                                gradient="from-cyan-500 to-blue-600"
                                delay={100}
                            />
                            <StatCard 
                                icon={Coins} 
                                label="Portfolio Value" 
                                value={`${stats.totalValue} ETH`} 
                                gradient="from-emerald-500 to-teal-600"
                                delay={200}
                            />
                            <StatCard 
                                icon={TrendingUp} 
                                label="Average Floor" 
                                value={`${stats.averageFloor} ETH`} 
                                gradient="from-amber-500 to-orange-600"
                                delay={300}
                            />
                        </div>

                        {/* Charts Section */}
                        <div className="grid gap-8 lg:grid-cols-2 mb-16">
                            {/* Pie Chart */}
                            <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:from-slate-700/70 hover:to-slate-800/70 hover:border-slate-600/60 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-2xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20">
                                        <BarChart3 className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Collection Distribution</h2>
                                </div>
                                
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={stats.chartData}
                                                dataKey="value"
                                                nameKey="shortName"
                                                cx="50%"
                                                cy="50%"
                                                outerRadius={100}
                                                innerRadius={40}
                                                paddingAngle={2}
                                            >
                                                {stats.chartData.map((entry, index) => (
                                                    <Cell 
                                                        key={`cell-${index}`} 
                                                        fill={COLORS[index % COLORS.length]}
                                                        className="hover:opacity-80 transition-opacity cursor-pointer"
                                                    />
                                                ))}
                                            </Pie>
                                            <Tooltip 
                                                contentStyle={{
                                                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                                    border: '1px solid rgba(71, 85, 105, 0.5)',
                                                    borderRadius: '12px',
                                                    color: 'white',
                                                    backdropFilter: 'blur(12px)'
                                                }}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Bar Chart */}
                            <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:from-slate-700/70 hover:to-slate-800/70 hover:border-slate-600/60 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20">
                                        <Activity className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Top Collections</h2>
                                </div>
                                
                                <div className="h-80">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={stats.barData} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(71, 85, 105, 0.3)" />
                                            <XAxis 
                                                dataKey="name" 
                                                stroke="#94a3b8"
                                                fontSize={12}
                                                angle={-45}
                                                textAnchor="end"
                                                height={80}
                                            />
                                            <YAxis stroke="#94a3b8" fontSize={12} />
                                            <Bar 
                                                dataKey="count" 
                                                fill="url(#colorGradient)"
                                                radius={[8, 8, 0, 0]}
                                                className="hover:opacity-80 transition-opacity"
                                            />
                                            <defs>
                                                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="#06b6d4" />
                                                </linearGradient>
                                            </defs>
                                            <Tooltip 
                                                contentStyle={{
                                                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                                                    border: '1px solid rgba(71, 85, 105, 0.5)',
                                                    borderRadius: '12px',
                                                    color: 'white',
                                                    backdropFilter: 'blur(12px)'
                                                }}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>

                        {/* Most Valuable NFT */}
                        {stats.mostValuable && (
                            <div className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:from-slate-700/70 hover:to-slate-800/70 hover:border-slate-600/60 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20">
                                        <Crown className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Crown Jewel</h2>
                                    <div className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                                        <Diamond className="w-4 h-4 text-amber-400" />
                                        <span className="text-sm font-semibold text-amber-300">{stats.highestFloor} ETH</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-8">
                                    <div className="relative group/image">
                                        <img
                                            src={
                                                stats.mostValuable?.image?.originalUrl ||
                                                stats.mostValuable?.image?.pngUrl ||
                                                "/NoImage.png"
                                            }
                                            alt={stats.mostValuable?.name}
                                            className="w-32 h-32 object-cover rounded-2xl border-2 border-slate-600/50 group-hover/image:border-amber-400/50 transition-all duration-300 group-hover/image:scale-105 shadow-xl"
                                        />
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                                            {stats.mostValuable?.name || "Untitled"}
                                        </h3>
                                        <p className="text-slate-400 mb-4">
                                            {stats.mostValuable?.contract?.name || "Unknown Collection"}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20">
                                                <Star className="w-4 h-4 text-violet-400" />
                                                <span className="text-sm text-violet-300">Most Valuable</span>
                                            </div>
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                                                <Zap className="w-4 h-4 text-emerald-400" />
                                                <span className="text-sm text-emerald-300">Premium Asset</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Analytics;