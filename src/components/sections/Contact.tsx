"use client";

import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="bg-brand-gray-dark py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Get in Touch</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none mb-12">
                            Start a <br />
                            <span className="text-gold italic">Conversation.</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                    <Mail className="text-white group-hover:text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Email Us</h4>
                                    <p className="text-xl text-white font-medium uppercase tracking-tight">hello@nn-poultry.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                    <Phone className="text-white group-hover:text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Call Us</h4>
                                    <p className="text-xl text-white font-medium uppercase tracking-tight">+254 7XX XXX XXX</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8 group">
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                    <MapPin className="text-white group-hover:text-black" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-bold mb-1">Our Farm</h4>
                                    <p className="text-xl text-white font-medium uppercase tracking-tight">Machakos, Kenya</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-black p-12 border border-white/5">
                        <h3 className="text-3xl font-bold text-white mb-10 tracking-tight uppercase">Inquiry Form</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Your Name</label>
                                    <input type="text" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Email Address</label>
                                    <input type="email" className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Inquiry Type</label>
                                <select className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                                    <option className="bg-brand-black">Wholesale Eggs</option>
                                    <option className="bg-brand-black">Poultry Manure Bulk</option>
                                    <option className="bg-brand-black">General Inquiry</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Message</label>
                                <textarea rows={4} className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
                            </div>

                            <button className="w-full py-6 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] hover:bg-gold transition-colors duration-500 flex items-center justify-center gap-3">
                                Send Inquiry <Send size={14} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
