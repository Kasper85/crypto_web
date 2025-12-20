import React from 'react';
import { Shield, Zap, Lock, TrendingUp } from 'lucide-react';

const About = () => {
    const features = [
        { icon: Shield, title: "Audited", desc: "Smart contract verified by top security firms" },
        { icon: Lock, title: "LP Locked", desc: "Liquidity secured for community trust" },
        { icon: Zap, title: "0% Tax", desc: "No hidden fees on buy or sell" },
        { icon: TrendingUp, title: "Deflationary", desc: "Token burns reduce supply over time" },
    ];

    return (
        <section id="about" className="w-full bg-background py-24 text-center relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-kisoku-red via-kisoku-gold to-kisoku-sakura"></div>


            <div className="container mx-auto px-4 relative z-10">
                <h2 className="mb-4 font-musashi text-5xl text-kisoku-beige">
                    About <span className="text-gradient">Kisoku Inu</span>
                </h2>
                <p className="mx-auto mb-16 max-w-3xl text-xl text-gray-400 font-light leading-relaxed">
                    The path of the digital warrior. Discipline, honor, and prosperity in every transaction.
                </p>

                {/* Feature Cards Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-6 rounded-2xl text-center group hover:bg-kisoku-gold/5 transition-all duration-300 hover:-translate-y-1">
                            <feature.icon className="h-8 w-8 mx-auto mb-3 text-kisoku-gold group-hover:scale-110 transition-transform" />
                            <h4 className="text-kisoku-beige font-bold mb-1">{feature.title}</h4>
                            <p className="text-gray-400 text-xs">{feature.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Image Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-16">
                    <div className="group overflow-hidden rounded-3xl border border-kisoku-gold/20 shadow-2xl relative aspect-[4/3]">
                        <div className="absolute inset-0 bg-gradient-to-t from-kisoku-navy/90 via-kisoku-navy/50 to-transparent z-10"></div>
                        <img src="/images/img1.jpg" alt="Kisoku Inu - Honor" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                            <span className="text-kisoku-gold text-sm uppercase tracking-widest mb-2 block">Core Value</span>
                            <h3 className="text-3xl font-musashi text-kisoku-beige mb-2">武士道 — Bushido</h3>
                            <p className="text-kisoku-beige/80 text-sm max-w-md">The warrior code guides every decision. Integrity, respect, and loyalty to our community above all.</p>
                        </div>
                    </div>
                    <div className="group overflow-hidden rounded-3xl border border-kisoku-gold/20 shadow-2xl relative aspect-[4/3]">
                        <div className="absolute inset-0 bg-gradient-to-t from-kisoku-navy/90 via-kisoku-navy/50 to-transparent z-10"></div>
                        <img src="/images/img4.jpg" alt="Kisoku Inu - Strength" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                            <span className="text-kisoku-gold text-sm uppercase tracking-widest mb-2 block">Foundation</span>
                            <h3 className="text-3xl font-musashi text-kisoku-beige mb-2">力 — Strength</h3>
                            <p className="text-kisoku-beige/80 text-sm max-w-md">Built on the most robust blockchain infrastructure. Security and scalability without compromise.</p>
                        </div>
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="mt-12 text-left bg-gradient-to-br from-kisoku-navy/80 to-kisoku-navy/40 rounded-3xl p-10 border border-kisoku-gold/10 backdrop-blur-sm relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-kisoku-red/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-kisoku-gold/5 rounded-full blur-2xl"></div>
                    <div className="absolute top-4 right-4 text-6xl opacity-10 font-musashi text-kisoku-gold">規則</div>

                    <h3 className="text-2xl font-musashi text-kisoku-gold mb-6 flex items-center gap-3">
                        <span className="w-8 h-[2px] bg-kisoku-red"></span>
                        Our Mission
                    </h3>
                    <p className="mb-6 text-kisoku-beige/90 text-lg leading-relaxed relative z-10">
                        <span className="text-kisoku-gold font-medium">Kisoku Inu</span> is born from the fusion of ancient samurai wisdom and 21st-century technological innovation. Like the warrior who protects their clan, we protect our community with audited contracts, locked liquidity, and a long-term vision.
                    </p>
                    <p className="text-kisoku-beige/90 text-lg leading-relaxed relative z-10">
                        We are not just a token — we are a movement. <span className="text-kisoku-red font-medium">規則</span> (Kisoku) means "rules" or "discipline," values we apply in every aspect of our project. From transparent tokenomics to decentralized governance, every decision reflects the honor of bushido.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-kisoku-gold/10">
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-kisoku-gold group-hover:scale-110 transition-transform">100K+</p>
                            <p className="text-sm text-kisoku-beige/60">Holders</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-kisoku-gold group-hover:scale-110 transition-transform">$10M+</p>
                            <p className="text-sm text-kisoku-beige/60">Market Cap</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-kisoku-gold group-hover:scale-110 transition-transform">0%</p>
                            <p className="text-sm text-kisoku-beige/60">Buy/Sell Tax</p>
                        </div>
                        <div className="text-center group">
                            <p className="text-3xl font-bold text-kisoku-red group-hover:scale-110 transition-transform">🔥</p>
                            <p className="text-sm text-kisoku-beige/60">LP Burned</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
