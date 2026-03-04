import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-brand-black pt-32 pb-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                    <div>
                        <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white opacity-10 leading-none mb-12">
                            PALACE
                        </h2>
                        <p className="text-lg text-white/50 max-w-sm mb-8">
                            Premium farm-fresh eggs and organic poultry manure for households and businesses across Machakos and Kenya.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gold hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-bold">Facebook</a>
                            <a href="#" className="text-gold hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-bold">Instagram</a>
                            <a href="#" className="text-gold hover:opacity-70 transition-opacity uppercase text-xs tracking-widest font-bold">WhatsApp</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-12">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Navigation</span>
                            <Link href="/products" className="text-white hover:text-gold transition-colors uppercase text-sm font-medium">Shop Products</Link>
                            <Link href="/education" className="text-white hover:text-gold transition-colors uppercase text-sm font-medium">Learn Soil</Link>
                            <Link href="/about" className="text-white hover:text-gold transition-colors uppercase text-sm font-medium">The Farm</Link>
                            <Link href="/contact" className="text-white hover:text-gold transition-colors uppercase text-sm font-medium">Get in Touch</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-2">Contact</span>
                            <p className="text-white text-sm font-medium uppercase">Machakos, Kenya</p>
                            <p className="text-white text-sm font-medium uppercase">+254 7XX XXX XXX</p>
                            <p className="text-white text-sm font-medium uppercase">hello@nn-poultry.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/20 font-medium">
                    <p>© 2026 N&N Poultry Palace Limited. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
