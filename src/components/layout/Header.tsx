"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.8, ease: "power4.out" });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.8, ease: "power4.in" });
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference"
      >
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase">
          N&N<span className="text-gold">.</span>Poultry
        </Link>

        <nav className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest text-white/70">
          <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
          <Link href="/education" className="hover:text-gold transition-colors">Education</Link>
          <Link href="/about" className="hover:text-gold transition-colors">Our Story</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Connect</Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[60] bg-brand-black translate-x-full flex flex-col items-center justify-center gap-8"
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-10 right-10 text-white hover:text-gold transition-colors"
        >
          <X size={32} />
        </button>

        <nav className="flex flex-col items-center gap-10">
          <Link onClick={() => setIsMenuOpen(false)} href="/products" className="text-4xl text-white font-bold uppercase tracking-widest hover:text-gold transition-colors">Products</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/education" className="text-4xl text-white font-bold uppercase tracking-widest hover:text-gold transition-colors">Education</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-4xl text-white font-bold uppercase tracking-widest hover:text-gold transition-colors">Our Story</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="text-4xl text-white font-bold uppercase tracking-widest hover:text-gold transition-colors">Connect</Link>
        </nav>

        <div className="mt-20 text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
          N&N Poultry Palace Limited
        </div>
      </div>
    </>
  );
};

export default Header;
