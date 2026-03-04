"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const frameCount = 26;

    // High-res logo path (assuming it's in public or root)
    const logoPath = "/LOGO.png";

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const loadedImages: HTMLImageElement[] = [];
        let loadCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Adjusting to match the frame filenames found earlier: ezgif-frame-001.jpg
            const frameIndex = i.toString().padStart(3, "0");
            img.src = `/hero-sequence/ezgif-frame-${frameIndex}.jpg`;
            img.onload = () => {
                loadCount++;
                if (loadCount === frameCount) {
                    setImages(loadedImages);
                    render(0);
                }
            };
            loadedImages.push(img);
        }

        const airbnb = {
            frame: 0
        };

        const render = (index: number) => {
            if (loadedImages[index]) {
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Draw image centered and covering
                const img = loadedImages[index];
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = (canvas.height - drawHeight) / 2;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgAspect;
                    offsetX = (canvas.width - drawWidth) / 2;
                    offsetY = 0;
                }

                context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        gsap.to(airbnb, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%", // Scroll distance
                scrub: 1,
                pin: true,
            },
            onUpdate: () => render(airbnb.frame)
        });

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(airbnb.frame);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-brand-black overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
                <div className="overflow-hidden mb-6">
                    <h1 className="hero-text text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                        Nurtured by <span className="text-gold">Nature.</span><br />
                        Delivered to <span className="text-gold">You.</span>
                    </h1>
                </div>

                <p className="hero-subtext text-lg md:text-xl text-white/50 max-w-xl mb-12 uppercase tracking-widest font-medium">
                    Premium Farm-Fresh Eggs & Organic Solutions
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                    <button className="px-10 py-5 bg-gold text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-colors duration-500">
                        Shop Products
                    </button>
                    <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500">
                        Wholesale Inquiry
                    </button>
                </div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll to Explore</span>
                <div className="w-px h-12 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
