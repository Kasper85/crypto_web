import React from 'react';
import { ExternalLink, BarChart3, LineChart, ArrowUpRight } from 'lucide-react';

const DexSection = () => {
    return (
        <section className="w-full bg-background py-24 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-kisoku-red/5 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-kisoku-gold/5 rounded-full blur-[100px] -translate-y-1/2"></div>

            {/* Decorative lines */}
            <div className="absolute top-1/4 left-0 w-32 h-[1px] bg-gradient-to-r from-kisoku-red/50 to-transparent"></div>
            <div className="absolute bottom-1/4 right-0 w-32 h-[1px] bg-gradient-to-l from-kisoku-gold/50 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Buy On Links */}
                    <div className="text-left">
                        <span className="text-kisoku-gold text-sm uppercase tracking-widest mb-4 block">Trade Now</span>
                        <h2 className="mb-8 font-musashi text-4xl md:text-5xl text-kisoku-beige">
                            Buy on <span className="text-gradient">DEX</span>
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            Trade $KISOKU instantly on your favorite decentralized exchanges. Low fees, fast transactions, and deep liquidity.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:bg-kisoku-red/10 hover:border-kisoku-red/50 hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-kisoku-red/30 to-kisoku-red/10 flex items-center justify-center text-2xl text-kisoku-red group-hover:scale-110 transition-transform">
                                        <BarChart3 className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-kisoku-beige group-hover:text-white transition-colors">DexScreener</h3>
                                        <p className="text-sm text-gray-400">View Chart & Trade</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-gray-500 group-hover:text-kisoku-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center justify-between p-6 rounded-2xl transition-all duration-300 hover:bg-kisoku-gold/10 hover:border-kisoku-gold/50 hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-kisoku-gold/30 to-kisoku-gold/10 flex items-center justify-center text-2xl text-kisoku-gold group-hover:scale-110 transition-transform">
                                        <LineChart className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-kisoku-beige group-hover:text-white transition-colors">Dextools</h3>
                                        <p className="text-sm text-gray-400">Real-time Analysis</p>
                                    </div>
                                </div>
                                <ArrowUpRight className="text-gray-500 group-hover:text-kisoku-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Live Chart Embed */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-kisoku-red to-kisoku-gold rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="glass-card relative rounded-2xl overflow-hidden border border-kisoku-gold/20 h-[500px] w-full bg-kisoku-navy/50">
                            {/* Placeholder for Chart */}
                            <iframe
                                src="https://dexscreener.com/solana/58f7r35f88q87679w28j299892823849?embed=1&theme=dark"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Live Chart"
                            ></iframe>

                            {/* Overlay badge */}
                            <div className="absolute top-4 right-4 bg-kisoku-navy/90 px-4 py-2 rounded-full text-xs text-kisoku-gold border border-kisoku-gold/20 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Live Chart
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DexSection;
