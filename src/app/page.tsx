import Hero from "@/components/sections/Hero";
import EducationHighlight from "@/components/sections/EducationHighlight";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="bg-brand-black py-40 px-6 flex flex-col items-center justify-center border-y border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white/80 max-w-3xl leading-tight tracking-tight uppercase">
          Providing high-quality <span className="text-gold">poultry products</span> that fuel healthy families and sustainable farms.
        </h2>
      </section>

      <FeaturedProducts />

      <EducationHighlight />

      <About />

      <Contact />

      <section className="bg-brand-black py-40 px-6 flex flex-col items-center justify-center border-t border-white/5">
        <p className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4">Quality Assured</p>
        <h2 className="text-4xl font-bold text-white tracking-tighter text-center uppercase">
          From the heart of Machakos,<br />
          <span className="opacity-20">delivered with integrity.</span>
        </h2>
      </section>
    </div>
  );
}
