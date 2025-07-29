import { useEffect, useState } from "react"
import { fetchNFTsForWallet } from "../utils/fetchNFT"
import {
    Search,
    X,
    ExternalLink,
    TrendingUp,
    Eye,
    Sparkles,
    ArrowLeft,
    BarChart3,
    Star,
    Zap,
    Grid3X3,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Portfolio = ({ address }) => {
    const [nfts, setNfts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [hoveredCard, setHoveredCard] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (!address) return
        const loadNFTs = async () => {
            setLoading(true)
            const data = await fetchNFTsForWallet(address)
            setNfts(data)
            setLoading(false)
        }
        loadNFTs()
    }, [address])

    const filteredNfts = nfts.filter((nft) => {
        const name = nft?.name || nft?.metadata?.name || "Untitled"
        return name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    const totalValue = nfts.reduce((acc, nft) => {
        const floor = Number.parseFloat(nft?.contract?.openSeaMetadata?.floorPrice || 0)
        return acc + floor
    }, 0)

    return (
        <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden pt-24">
            <div className="pointer-events-none fixed inset-0">
                <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-3xl animate-pulse" />
                <div
                    className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-pink-500/10 to-rose-600/10 blur-3xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                />

                {[...Array(15)].map((_, i) => (
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

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
                <div className="mb-12">
                    <button
                        onClick={() => navigate("/")}
                        className="group inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-600/50 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        <span className="text-slate-400 group-hover:text-white font-medium transition-colors">Back to Home</span>
                    </button>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-black mb-4">
                                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    NFT Portfolio
                                </span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl">
                                Explore your digital collection with advanced insights and analytics
                            </p>
                            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-mono">
                                    {address?.slice(0, 6)}...{address?.slice(-4)}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 min-w-[140px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10">
                                        <Grid3X3 className="w-5 h-5 text-violet-400" />
                                    </div>
                                </div>
                                <div className="text-2xl font-black text-white mb-1">{nfts.length}</div>
                                <div className="text-sm text-slate-400">Total NFTs</div>
                            </div>

                            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 min-w-[140px]">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                                        <TrendingUp className="w-5 h-5 text-cyan-400" />
                                    </div>
                                </div>
                                <div className="text-2xl font-black text-white mb-1">{totalValue.toFixed(2)}</div>
                                <div className="text-sm text-slate-400">Total Value (ETH)</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                        <div className="relative flex-1 max-w-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <input
                                type="text"
                                placeholder="Search your NFTs by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="relative w-full h-14 rounded-3xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-xl px-6 pr-12 text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-300"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                {searchTerm ? (
                                    <button
                                        onClick={() => setSearchTerm("")}
                                        className="p-1 rounded-full hover:bg-slate-700/50 transition-colors"
                                    >
                                        <X className="w-4 h-4 text-slate-400 hover:text-white" />
                                    </button>
                                ) : (
                                    <Search className="w-5 h-5 text-slate-500" />
                                )}
                            </div>
                        </div>

                        <button
                            onClick={() => navigate(`/analytics/${address}`)}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-violet-500/25 overflow-hidden"
                        >
                            <BarChart3 className="w-5 h-5 relative z-10" />
                            <span className="relative z-10">View Analytics</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {loading
                        ? Array.from({ length: 12 }).map((_, i) => (
                            <div
                                key={i}
                                className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 animate-pulse"
                            >
                                <div className="aspect-square rounded-2xl bg-slate-700/50 mb-4" />
                                <div className="space-y-3">
                                    <div className="h-4 bg-slate-700/50 rounded-xl w-3/4" />
                                    <div className="h-3 bg-slate-700/50 rounded-lg w-1/2" />
                                    <div className="h-3 bg-slate-700/50 rounded-lg w-2/3" />
                                </div>
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
                            </div>
                        ))
                        : filteredNfts.map((nft, idx) => {
                            const image =
                                nft?.image?.pngUrl ||
                                nft?.image?.[0]?.originalUrl ||
                                nft?.raw?.metaData?.image ||
                                nft?.raw?.metaData?.image_url ||
                                nft?.media?.[0]?.gateway ||
                                nft?.media?.[0]?.thumbnail ||
                                "/NoImage.png"

                            const name = nft?.name || nft?.metadata?.name || "Untitled"
                            const floor = nft?.contract?.openSeaMetadata?.floorPrice
                                ? `${nft?.contract?.openSeaMetadata?.floorPrice} ETH`
                                : "N/A"
                            const type = nft?.tokenType
                            const id = nft?.tokenId

                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:transform hover:scale-105"
                                    onMouseEnter={() => setHoveredCard(idx)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-700/30">
                                        <img
                                            src={image || "/placeholder.svg"}
                                            alt={name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            onError={(e) => {
                                                e.target.onerror = null
                                                e.target.src = "/placeholder.svg?height=300&width=300"
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <a
                                                href={`https://opensea.io/assets/ethereum/${nft.contract.address}/${nft.tokenId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                            >
                                                <ExternalLink className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* NFT Info */}
                                    <div className="space-y-3">
                                        <h3 className="font-bold text-white text-lg leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                                            {name}
                                        </h3>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-slate-400">Floor Price</span>
                                                <span className="text-sm font-semibold text-emerald-400">{floor}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-slate-400">Token Type</span>
                                                <span className="text-sm font-medium text-slate-300">{type}</span>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-slate-400">Token ID</span>
                                                <span className="text-sm font-mono text-slate-300">#{id}</span>
                                            </div>
                                        </div>

                                        <Link
                                            to={`https://opensea.io/assets/ethereum/${nft?.contract?.address}/${nft?.tokenId}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 w-full cursor-pointer justify-center px-4 py-3 rounded-2xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 text-violet-300 hover:from-violet-600/30 hover:to-purple-600/30 hover:border-violet-400/50 hover:text-violet-200 transition-all duration-300 text-sm font-medium"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View on OpenSea
                                            <ExternalLink className="w-3 h-3" />
                                        </Link>
                                    </div>

                                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {hoveredCard === idx && (
                                        <>
                                            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center animate-bounce">
                                                <Star className="w-3 h-3 text-white" />
                                            </div>
                                            <div
                                                className="absolute -bottom-2 -left-2 w-5 h-5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-bounce"
                                                style={{ animationDelay: "0.2s" }}
                                            >
                                                <Zap className="w-2.5 h-2.5 text-white" />
                                            </div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                </div>

                {!loading && filteredNfts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-slate-700/50 mb-6">
                            <Sparkles className="w-12 h-12 text-slate-400" />
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            {searchTerm ? "No NFTs Found" : "No NFTs in Portfolio"}
                        </h3>
                        <p className="text-slate-400 max-w-md mx-auto">
                            {searchTerm
                                ? `No NFTs match "${searchTerm}". Try adjusting your search terms.`
                                : "This wallet doesn't contain any NFTs yet. Start collecting to see them here!"}
                        </p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-500/30 text-violet-300 hover:from-violet-600/30 hover:to-purple-600/30 hover:border-violet-400/50 transition-all duration-300"
                            >
                                <X className="w-4 h-4" />
                                Clear Search
                            </button>
                        )}
                    </div>
                )}

                {!loading && filteredNfts.length > 0 && (
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                            <span className="text-slate-300">
                                Showing {filteredNfts.length} of {nfts.length} NFTs
                                {searchTerm && <span className="text-violet-400 ml-1">matching "{searchTerm}"</span>}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Portfolio
