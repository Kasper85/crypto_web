import React, { useState } from 'react';
import { Menu, X, BarChart3, Wallet, Twitter, Send, Globe, Zap } from 'lucide-react';

const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-background text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10"></div>
                <img src="/images/fondo-1.jpg" alt="Background" className="h-full w-full object-cover opacity-40 mix-blend-overlay" />
                {/* Neon Glow Effects */}
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]"></div>
            </div>

            {/* Navigation Bar */}
            <nav className="z-20 flex w-full items-center justify-between px-6 py-6 md:px-12">
                <div className="flex items-center gap-3">
                    {/* Logo */}
                    <img src="/images/crypto.png" alt="Logo" className="h-12 w-12 rounded-xl shadow-lg shadow-primary/25" />
                    <div className="flex flex-col">
                        <span className="font-musashi text-2xl leading-none tracking-wide">Dog Father</span>
                        <span className="text-xs text-gray-400 tracking-widest uppercase">Project</span>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-6 md:flex">
                    <a href="#" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-white">
                        <BarChart3 className="mr-2 h-4 w-4 text-primary" /> Chart
                    </a>
                    <a href="#" className="flex items-center text-sm font-medium text-gray-300 transition hover:text-white">
                        <Zap className="mr-2 h-4 w-4 text-secondary" /> Community
                    </a>

                    <div className="h-8 w-[1px] bg-white/10 mx-2"></div>

                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><Send className="h-5 w-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition"><Globe className="h-5 w-5" /></a>
                    </div>

                    <a href="#" className="glass-card flex items-center rounded-full px-6 py-2 text-sm font-bold text-white transition hover:bg-white/10 border-primary/50 hover:border-primary shadow-lg shadow-primary/10">
                        <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Main Content */}
            <div className="z-10 flex flex-grow flex-col items-center justify-center px-4 text-center mt-[-80px]">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-secondary mb-8 backdrop-blur-md">
                    <span className="mr-2 flex h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
                    The Future of Decentralized Finance
                </div>

                <h1 className="font-musashi text-7xl text-white md:text-9xl lg:text-[10rem] leading-none tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">Dog Father</span>
                </h1>

                <p className="mt-6 text-lg text-gray-400 md:text-xl font-light max-w-2xl leading-relaxed">
                    Experience the next evolution of DeFi. Built for the community, powered by <span className="text-primary font-medium">advanced technology</span>, and secured by the blockchain.
                </p>

                {/* Action Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a href="#" className="group relative flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-25 group-hover:opacity-50 transition"></div>
                        <span className="relative flex items-center">
                            Buy Token <Wallet className="ml-2 h-5 w-5" />
                        </span>
                    </a>
                    <a href="#" className="glass-card flex items-center justify-center rounded-full px-8 py-4 font-bold text-white transition hover:bg-white/10 hover:scale-105">
                        View Chart <BarChart3 className="ml-2 h-5 w-5" />
                    </a>
                </div>

                {/* Contract Address */}
                <div className="mt-12 flex items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-6 py-3 backdrop-blur-md">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">CA:</span>
                    <span className="font-mono text-sm text-gray-300">0x0000...0000</span>
                    <button className="text-gray-500 hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
