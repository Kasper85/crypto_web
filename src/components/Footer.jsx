import React from 'react';
import { Twitter, Send, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-kisoku-navy py-12 text-kisoku-beige border-t border-kisoku-gold/10 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-kisoku-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and brand */}
                    <div className="flex items-center gap-3">
                        <img src="/images/img6.jpg" alt="Kisoku Inu" className="h-10 w-10 rounded-full object-cover border border-kisoku-gold/30" />
                        <div>
                            <span className="font-musashi text-lg text-kisoku-beige">Kisoku Inu</span>
                            <span className="text-kisoku-gold/60 text-xs ml-2">規則 犬</span>
                        </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-2 rounded-full bg-kisoku-gold/10 text-kisoku-gold hover:bg-kisoku-gold/20 hover:scale-110 transition-all">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-kisoku-gold/10 text-kisoku-gold hover:bg-kisoku-gold/20 hover:scale-110 transition-all">
                            <Send className="h-5 w-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-kisoku-gold/10 text-kisoku-gold hover:bg-kisoku-gold/20 hover:scale-110 transition-all">
                            <Globe className="h-5 w-5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className="text-sm text-kisoku-beige/70">
                            &copy; 2025 <span className="text-kisoku-gold font-medium">Kisoku Inu</span>
                        </p>
                        <p className="text-xs text-kisoku-beige/40 mt-1">
                            Built with honor. Protected by the blockchain.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
