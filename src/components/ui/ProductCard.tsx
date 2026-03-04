import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
    title: string;
    category: string;
    image: string;
    slug: string;
}

const ProductCard = ({ title, category, image, slug }: ProductCardProps) => {
    return (
        <Link href={`/products/${slug}`} className="group relative block bg-brand-black border border-white/5 overflow-hidden transition-all duration-700 hover:border-gold/20">
            <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] text-gold font-bold uppercase tracking-[0.3em] mb-2 block">{category}</span>
                <div className="flex justify-between items-end">
                    <h3 className="text-3xl font-bold text-white tracking-tighter uppercase leading-none">
                        {title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                                {word}
                                {i === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </h3>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                        <ArrowUpRight className="text-white group-hover:text-black transition-colors" size={20} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
