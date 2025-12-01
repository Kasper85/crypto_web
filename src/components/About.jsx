import React from 'react';

const About = () => {
    return (
        <section id="about" className="w-full bg-background py-24 text-center relative">
            <div className="container mx-auto px-4 relative z-10">
                <h2 className="mb-8 font-musashi text-5xl text-white">
                    About The <span className="text-gradient">Project</span>
                </h2>
                <p className="mx-auto mb-16 max-w-4xl text-xl text-gray-400 font-light leading-relaxed">
                    Building the future of decentralized finance with community at the core.
                </p>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 mb-16">
                    <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/fondo-1.jpg" alt="Project Feature 1" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Community Driven</h3>
                            <p className="text-gray-300 text-sm">Empowering users through decentralized governance.</p>
                        </div>
                    </div>
                    <div className="group overflow-hidden rounded-3xl border border-white/10 shadow-2xl relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img src="/images/fondo-2.jpg" alt="Project Feature 2" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 p-8 z-20 text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Secure & Scalable</h3>
                            <p className="text-gray-300 text-sm">Built on the most robust blockchain infrastructure.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-left bg-white/5 rounded-3xl p-10 border border-white/5 backdrop-blur-sm">
                    <p className="mb-6 text-gray-300 text-lg leading-relaxed">
                        Our mission is to create a sustainable and transparent ecosystem for all holders. We believe in the power of community and the potential of blockchain technology to revolutionize the way we interact with value.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        This token represents more than just a digital asset; it's a movement. With a focus on security, scalability, and user experience, we are poised to become a leader in the DeFi space. Join us on this journey to the moon and beyond.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
