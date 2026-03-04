"use client";

import React, { useEffect, useRef } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProducts = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const products = [
        {
            title: "Fresh Table Eggs",
            category: "Poultry Products",
            image: "/images/products/premium_eggs_carton_1772644820573.png",
            slug: "table-eggs",
        },
        {
            title: "Organic Fertilizer",
            category: "Soil Health",
            image: "/images/products/organic_manure_bag_1772644836560.png",
            slug: "poultry-manure",
        },
        {
            title: "Healthy Ex-Layers",
            category: "Livestock",
            image: "/images/products/healthy_ex_layer_hen_1772644857160.png",
            slug: "ex-layer-hens",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".product-reveal", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-brand-black py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-xl">
                        <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Product Range</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
                            Simple Quality,<br />
                            <span className="text-white/20">Absolute Trust.</span>
                        </h2>
                    </div>
                    <p className="text-white/40 text-sm uppercase tracking-widest max-w-[200px] leading-relaxed">
                        From our farm to your kitchen, quality is never compromised.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="product-reveal">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
