import React from 'react';
import Hero from './components/Hero';
import Partners from './components/Partners';
import DexSection from './components/DexSection';
import SocialMedia from './components/SocialMedia';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <DexSection />
        <SocialMedia />
        <About />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
