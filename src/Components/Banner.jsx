import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-base-100">
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Blobs - Opacity adjusted for Light/Dark balance */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[60%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[50%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid Overlay for Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 max-w-5xl text-center px-6">
        {/* Top Badge - Used semantic border/bg colors */}
        <div className="inline-flex items-center gap-2 bg-base-200/50 border border-base-300 backdrop-blur-md px-4 py-2 rounded-full mb-8">
          <Sparkles size={14} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-base-content/70">
            Next-Gen Finance Hub
          </span>
        </div>

        {/* Heading - Removed text-white, added text-base-content */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 text-base-content tracking-tighter">
          Take Control of <br /> 
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Your Future.
          </span>
        </h1>

        {/* Subtext - Contrast fixed for Light Mode */}
        <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
          FinEase helps you track every penny, automate savings, and visualize your financial growth with a single, powerful dashboard.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="btn btn-primary btn-lg rounded-2xl px-10 font-bold border-none text-primary-content shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Start Your Journey
            <ArrowRight size={20} className="ml-2" />
          </button>

          <button className="btn btn-outline btn-lg rounded-2xl px-10 border-base-300 hover:bg-base-200 text-base-content">
            Watch Demo
          </button>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-base-content/40">Explore</span>
        <div className="h-12 bg-gradient-to-b from-primary to-transparent" style={{ width: '2px' }} />
      </div>
    </section>
  );
};

export default Banner;