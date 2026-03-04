"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplet, Sprout, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EducationHighlight = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray(".edu-item");

            gsap.fromTo(items,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-brand-gray-dark py-32 px-6 overflow-hidden">
            <div ref={triggerRef} className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Education & Impact</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 max-w-lg">
                            The Gold Standard of <span className="text-gold italic">Organic</span> Fertilizer.
                        </h2>
                        <p className="text-lg text-white/50 mb-12 max-w-md">
                            Our poultry manure is more than just waste — it's a nutrient-dense powerhouse that transforms tired soil into a thriving ecosystem. Directly from our layer houses to your farm.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="edu-item group p-8 bg-brand-black border border-white/5 hover:border-gold/30 transition-all duration-500">
                                <Sprout className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h3 className="text-xl font-bold text-white mb-2 uppercase">Soil Health</h3>
                                <p className="text-sm text-white/40 leading-relaxed">Rich in nitrogen and phosphorus, improving soil structure and water retention.</p>
                            </div>

                            <div className="edu-item group p-8 bg-brand-black border border-white/5 hover:border-gold/30 transition-all duration-500">
                                <Zap className="text-gold mb-6 group-hover:scale-110 transition-transform" size={32} />
                                <h3 className="text-xl font-bold text-white mb-2 uppercase">Cost Effective</h3>
                                <p className="text-sm text-white/40 leading-relaxed">A sustainable alternative to synthetic fertilizers at a fraction of the cost.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-32 bg-brand-black p-12 border border-white/10">
                        <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">HOW TO USE</h3>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <span className="text-gold font-bold text-lg">01</span>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Composting</h4>
                                    <p className="text-sm text-white/40">Always compost before heavy application to ensure nutrients are stable and safe for roots.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="text-gold font-bold text-lg">02</span>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Application Rates</h4>
                                    <p className="text-sm text-white/40">Apply 1-2kg per square meter for home gardens, well-mixed into the top 15cm of soil.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="text-gold font-bold text-lg">03</span>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase mb-2">Safety First</h4>
                                    <p className="text-sm text-white/40">Wear gloves when handling and avoid contact with edible parts of raw vegetables.</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-12 py-5 border border-gold text-gold font-bold uppercase text-xs tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-500">
                            Download Full Guide (PDF)
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative large text */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">
                FERTILIZER
            </div>
        </section>
    );
};

export default EducationHighlight;
