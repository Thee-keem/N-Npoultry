"use client";

import React from "react";

const About = () => {
    return (
        <section className="bg-brand-black py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                <div className="w-full md:w-1/2">
                    <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Heritage</span>
                    <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12 uppercase">
                        A Legacy of <br />
                        <span className="text-gold italic">Integrity.</span>
                    </h2>
                    <p className="text-xl text-white/60 mb-8 max-w-lg leading-relaxed lowercase first-letter:uppercase">
                        Founded on the principles of fresh nutrition and sustainable farming, N&N Poultry Palace has grown from a local Machakos farm into a trusted supplier of premium poultry products across the region.
                    </p>
                    <p className="text-lg text-white/40 mb-12 max-w-lg leading-relaxed">
                        We believe that quality starts at the roots. That's why our hens are raised with care, and our manure is processed to empower other farmers to grow the same high-standard produce we stand for.
                    </p>
                    <button className="px-12 py-5 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-gold hover:border-gold hover:text-black transition-all duration-500">
                        Read Our Full Story
                    </button>
                </div>

                <div className="w-full md:w-1/2 relative aspect-square">
                    <div className="absolute inset-0 border border-gold/20 translate-x-6 translate-y-6"></div>
                    <div className="absolute inset-0 bg-brand-gray-dark overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-gold/10 text-9xl font-black opacity-40 select-none">
                            HERITAGE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
