import React, { useState } from 'react';
import { Menu, X, BarChart3, Wallet, Twitter, Send, Globe, Zap, Copy, Check } from 'lucide-react';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("0x0000...0000");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
                <img src="/images/img3.jpg" alt="Background" className="h-full w-full object-cover opacity-50 mix-blend-overlay" />
                {/* Animated Glow Effects */}
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-kisoku-red/20 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-kisoku-gold/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                {/* Floating particles effect */}
                <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-kisoku-gold/50 animate-bounce" style={{ animationDuration: '3s' }}></div>
                <div className="absolute top-1/3 right-1/3 h-1 w-1 rounded-full bg-kisoku-sakura/50 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 left-1/2 h-1.5 w-1.5 rounded-full bg-kisoku-red/50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            </div>

            {/* Navigation Bar */}
            <nav className="z-20 flex w-full items-center justify-between px-6 py-6 md:px-12">
                <div className="flex items-center gap-3">
                    {/* Logo with hover effect */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-kisoku-red to-kisoku-gold rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                        <img src="/images/img6.jpg" alt="Kisoku Inu Logo" className="relative h-14 w-14 rounded-full shadow-lg shadow-kisoku-gold/25 border-2 border-kisoku-gold/30 object-cover transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-musashi text-2xl leading-none tracking-wide text-kisoku-beige">Kisoku Inu</span>
                        <span className="text-xs text-kisoku-gold tracking-widest uppercase">規則 犬</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-6 md:flex">
                    <a href="#about" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-kisoku-gold hover:scale-105">
                        <BarChart3 className="mr-2 h-4 w-4 text-kisoku-red" /> Chart
                    </a>
                    <a href="#community" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-kisoku-gold hover:scale-105">
                        <Zap className="mr-2 h-4 w-4 text-kisoku-gold" /> Community
                    </a>

                    <div className="h-8 w-[1px] bg-kisoku-gold/20 mx-2"></div>

                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-kisoku-sakura hover:scale-110 transition-all"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-kisoku-gold hover:scale-110 transition-all"><Send className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-kisoku-beige hover:scale-110 transition-all"><Globe className="h-5 w-5" /></a>
                    </div>

                    <a href="#" className="glass-card flex items-center rounded-full px-6 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-kisoku-gold/10 border-kisoku-gold/50 hover:border-kisoku-gold shadow-lg shadow-kisoku-gold/10 hover:scale-105">
                        <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden z-20 bg-kisoku-navy/95 backdrop-blur-lg p-6 border-t border-kisoku-gold/20 animate-fade-in">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-kisoku-gold">
                            <BarChart3 className="mr-2 h-4 w-4 text-kisoku-red" /> Chart
                        </a>
                        <a href="#" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-kisoku-gold">
                            <Zap className="mr-2 h-4 w-4 text-kisoku-gold" /> Community
                        </a>
                        <div className="flex gap-4 pt-4 border-t border-kisoku-gold/20">
                            <a href="#" className="text-gray-400 hover:text-kisoku-sakura transition"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-kisoku-gold transition"><Send className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="z-10 flex flex-grow flex-col items-center justify-center px-4 text-center mt-[-80px]">
                <div className="inline-flex items-center rounded-full border border-kisoku-gold/30 bg-kisoku-navy/50 px-4 py-1.5 text-sm text-kisoku-gold mb-8 backdrop-blur-md animate-fade-in">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-kisoku-gold animate-pulse"></span>
                    道を守る者 — Guardian of the Way
                </div>

                <h1 className="font-musashi text-6xl text-white md:text-8xl lg:text-[9rem] leading-none tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-kisoku-beige to-kisoku-gold/70">Kisoku Inu</span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 md:text-xl font-light max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    The spirit of the samurai reborn on the blockchain. <span className="text-kisoku-gold font-medium">Honorable, disciplined, unstoppable.</span> Join the revolution where tradition meets DeFi innovation.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <a href="#" className="btn-gold flex items-center justify-center group">
                        <span className="relative flex items-center">
                            Buy $KISOKU <Wallet className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        </span>
                    </a>
                    <a href="#" className="glass-card flex items-center justify-center rounded-full px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-kisoku-red/20 hover:scale-105 border-kisoku-red/30 group">
                        View Chart <BarChart3 className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* Contract Address with copy functionality */}
                <div className="mt-12 flex items-center gap-3 rounded-xl border border-kisoku-gold/10 bg-kisoku-navy/50 px-6 py-3 backdrop-blur-md animate-fade-in hover:border-kisoku-gold/30 transition-colors" style={{ animationDelay: '0.8s' }}>
                    <span className="text-xs text-kisoku-gold uppercase tracking-wider">CA:</span>
                    <span className="font-mono text-sm text-kisoku-beige">0x0000...0000</span>
                    <button
                        onClick={handleCopy}
                        className="text-kisoku-gold/50 hover:text-kisoku-gold transition-all hover:scale-110"
                    >
                        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-kisoku-gold/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-kisoku-gold rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
