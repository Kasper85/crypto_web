import React from 'react';
import { SiBinance, SiKucoin } from 'react-icons/si';
import { Globe } from 'lucide-react';

const Partners = () => {
    const partners = [
        { name: "Binance", icon: SiBinance, color: "text-[#F3BA2F]" },
        { name: "KuCoin", icon: SiKucoin, color: "text-[#00C38E]" },
        { name: "MEXC", icon: Globe, color: "text-[#2B84EA]" },
        { name: "HTX", icon: Globe, color: "text-[#00AC9E]" },
        { name: "BitMart", icon: Globe, color: "text-white" },
        { name: "Poloniex", icon: Globe, color: "text-[#00B49D]" },
        { name: "Bybit", icon: Globe, color: "text-white" },
        { name: "Gate.io", icon: Globe, color: "text-[#0D85DA]" },
    ];

    return (
        <section className="w-full bg-background py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-12 font-musashi text-3xl text-white md:text-4xl">
                    <span className="text-gradient">Strategic Partners</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="glass-card flex items-center justify-center gap-3 rounded-xl px-8 py-4 transition duration-300 hover:scale-105 hover:bg-white/10"
                        >
                            <partner.icon className={`text-2xl ${partner.color}`} />
                            <span className={`text-xl font-bold ${partner.color}`}>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
