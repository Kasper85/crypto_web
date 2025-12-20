import React from 'react';
import { Twitter, Send, ExternalLink, Users } from 'lucide-react';

const SocialMedia = () => {
    return (
        <section id="community" className="w-full bg-background py-24 relative overflow-hidden">
            {/* Background Glow - Japanese colors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-kisoku-sakura/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Decorative kanji */}
            <div className="absolute top-10 left-10 text-8xl font-musashi text-kisoku-gold/5 select-none">道</div>
            <div className="absolute bottom-10 right-10 text-8xl font-musashi text-kisoku-red/5 select-none">侍</div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-kisoku-gold text-sm uppercase tracking-widest mb-4 block">Connect With Us</span>
                    <h2 className="font-musashi text-4xl text-kisoku-beige md:text-5xl mb-4">
                        Join The <span className="text-gradient">Community</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Become part of the Kisoku Inu family. Stay updated, participate in governance, and connect with fellow samurai.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Twitter Card */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kisoku-red/10 hover:border-kisoku-red/30">
                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-kisoku-red/0 to-kisoku-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative mb-6 text-kisoku-beige p-5 rounded-2xl bg-kisoku-red/10 group-hover:bg-kisoku-red/20 transition-all duration-500 group-hover:scale-110">
                            <Twitter className="h-12 w-12" />
                        </div>
                        <h3 className="relative font-musashi text-2xl text-kisoku-beige mb-2">Twitter</h3>
                        <p className="relative text-kisoku-gold font-bold text-4xl mb-1">100k+</p>
                        <p className="relative text-gray-400 text-sm mb-6">Followers & Growing</p>
                        <span className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-kisoku-red/10 text-kisoku-beige group-hover:bg-kisoku-red/20 transition text-sm font-medium">
                            Follow Us <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    {/* Telegram Card */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-kisoku-gold/10 hover:border-kisoku-gold/30">
                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-kisoku-gold/0 to-kisoku-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative mb-6 text-kisoku-beige p-5 rounded-2xl bg-kisoku-gold/10 group-hover:bg-kisoku-gold/20 transition-all duration-500 group-hover:scale-110">
                            <Send className="h-12 w-12" />
                        </div>
                        <h3 className="relative font-musashi text-2xl text-kisoku-beige mb-2">Telegram</h3>
                        <p className="relative text-kisoku-gold font-bold text-4xl mb-1">50k+</p>
                        <p className="relative text-gray-400 text-sm mb-6">Active Members</p>
                        <span className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-kisoku-gold/10 text-kisoku-beige group-hover:bg-kisoku-gold/20 transition text-sm font-medium">
                            Join Chat <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
