import React from 'react';
import { Twitter, Send, ExternalLink } from 'lucide-react';

const SocialMedia = () => {
    return (
        <section className="w-full bg-background py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="mb-16 text-center font-musashi text-4xl text-white md:text-5xl">
                    Join The <span className="text-gradient">Community</span>
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Twitter Card */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-10 text-center transition duration-500 hover:-translate-y-2 hover:shadow-primary/20 hover:border-primary/30">
                        <div className="mb-6 text-white p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition duration-500">
                            <Twitter className="h-12 w-12" />
                        </div>
                        <h3 className="font-musashi text-2xl text-white mb-2">Twitter</h3>
                        <p className="text-secondary font-bold text-3xl mb-1">100k+</p>
                        <p className="text-gray-400 text-sm mb-6">Community Updates</p>
                        <span className="flex items-center text-white/70 group-hover:text-white transition text-sm font-medium">
                            Follow <ExternalLink className="ml-2 h-3 w-3" />
                        </span>
                    </a>

                    {/* Telegram Card */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="glass-card group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-10 text-center transition duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:border-cyan-500/30">
                        <div className="mb-6 text-white p-4 rounded-full bg-white/5 group-hover:bg-cyan-500/20 transition duration-500">
                            <Send className="h-12 w-12" />
                        </div>
                        <h3 className="font-musashi text-2xl text-white mb-2">Telegram</h3>
                        <p className="text-cyan-400 font-bold text-3xl mb-1">50k+</p>
                        <p className="text-gray-400 text-sm mb-6">Live Chat</p>
                        <span className="flex items-center text-white/70 group-hover:text-white transition text-sm font-medium">
                            Join <ExternalLink className="ml-2 h-3 w-3" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
