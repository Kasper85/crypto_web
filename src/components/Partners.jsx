import React from 'react';
import { SiBinance, SiKucoin } from 'react-icons/si';
import { Globe } from 'lucide-react';

const Partners = () => {
    const partners = [
        { name: "Binance", icon: SiBinance, color: "text-[#F3BA2F]", bgHover: "hover:bg-[#F3BA2F]/10" },
        { name: "KuCoin", icon: SiKucoin, color: "text-[#00C38E]", bgHover: "hover:bg-[#00C38E]/10" },
        { name: "MEXC", icon: Globe, color: "text-[#2B84EA]", bgHover: "hover:bg-[#2B84EA]/10" },
        { name: "HTX", icon: Globe, color: "text-[#00AC9E]", bgHover: "hover:bg-[#00AC9E]/10" },
        { name: "BitMart", icon: Globe, color: "text-kisoku-beige", bgHover: "hover:bg-kisoku-beige/10" },
        { name: "Poloniex", icon: Globe, color: "text-[#00B49D]", bgHover: "hover:bg-[#00B49D]/10" },
        { name: "Bybit", icon: Globe, color: "text-kisoku-beige", bgHover: "hover:bg-kisoku-beige/10" },
        { name: "Gate.io", icon: Globe, color: "text-[#0D85DA]", bgHover: "hover:bg-[#0D85DA]/10" },
    ];

    return (
        <section className="w-full bg-background py-20 relative">
            {/* Subtle gradient lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kisoku-gold/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-kisoku-red/20 to-transparent"></div>

            <div className="container mx-auto px-4 text-center">
                <span className="text-kisoku-gold text-sm uppercase tracking-widest mb-4 block">Trusted By</span>
                <h2 className="mb-4 font-musashi text-3xl text-kisoku-beige md:text-4xl">
                    <span className="text-gradient">Strategic Partners</span>
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Partnered with leading exchanges and platforms to provide maximum accessibility.
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.name}
                            className={`glass-card flex items-center justify-center gap-3 rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${partner.bgHover} hover:border-current/30 cursor-pointer`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <partner.icon className={`text-2xl ${partner.color}`} />
                            <span className={`text-lg font-semibold ${partner.color}`}>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
