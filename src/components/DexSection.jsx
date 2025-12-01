import React from 'react';
import { ExternalLink, BarChart3, LineChart } from 'lucide-react';

const DexSection = () => {
    return (
        <section className="w-full bg-background py-24 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Buy On Links */}
                    <div className="text-left">
                        <h2 className="mb-8 font-musashi text-4xl md:text-5xl text-white">
                            Buy On <span className="text-gradient">DEX</span>
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Trade our token instantly on your favorite decentralized exchanges. Low fees, fast transactions, and deep liquidity.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center justify-between p-6 rounded-2xl transition duration-300 hover:bg-white/10 hover:border-primary/50">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-2xl text-primary">
                                        <BarChart3 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">DexScreener</h3>
                                        <p className="text-sm text-gray-400">View Chart & Trade</p>
                                    </div>
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-white transition" />
                            </a>

                            <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group flex items-center justify-between p-6 rounded-2xl transition duration-300 hover:bg-white/10 hover:border-secondary/50">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-2xl text-secondary">
                                        <LineChart className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Dextools</h3>
                                        <p className="text-sm text-gray-400">Real-time Analysis</p>
                                    </div>
                                </div>
                                <ExternalLink className="text-gray-500 group-hover:text-white transition" />
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Live Chart Embed */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30"></div>
                        <div className="glass-card relative rounded-2xl overflow-hidden border border-white/10 h-[500px] w-full bg-black/50">
                            {/* Placeholder for Chart - Using a popular pair for demo */}
                            <iframe
                                src="https://dexscreener.com/solana/58f7r35f88q87679w28j299892823849?embed=1&theme=dark"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Live Chart"
                            ></iframe>

                            {/* Overlay for demo purposes if needed, or just let it be */}
                            <div className="absolute top-4 right-4 bg-black/80 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/10">
                                Live Chart Demo
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DexSection;
