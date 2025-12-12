"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Viscount Alistair",
        title: "Food Critic, The London Gazette",
        text: "By Royal Decree, this is declared the finest Indian dining experience in the western hemisphere. Validated by my own palate.",
        date: "Established 2024",
    },
    {
        id: 2,
        name: "Lady Sarah P.",
        title: "Patron since opening",
        text: "The ambiance transports one directly to the palaces of Udaipur. The service is nothing short of imperial.",
        date: "October 12th",
    },
    {
        id: 3,
        name: "Rajiv Malhotra",
        title: "Culinary Historian",
        text: "Authenticity is rare. Here, it is the law. The flavors are historically accurate to the royal courts.",
        date: "November 5th",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-dark-bg relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--color-royal-red)_0%,_transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-4 mb-4">
                        <div className="w-12 h-px bg-royal-gold/50" />
                        <span className="text-royal-gold font-display uppercase tracking-[0.2em] text-sm">
                            Voice of the People
                        </span>
                        <div className="w-12 h-px bg-royal-gold/50" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-2">
                        Royal Decrees
                    </h2>
                    <p className="text-gray-400 font-sans italic">What the kingdom is saying</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Card Container */}
                            <div className="h-full p-8 border border-royal-gold/20 bg-linear-to-b from-black/60 to-royal-red/5 backdrop-blur-sm hover:border-royal-gold/50 transition-colors duration-500">
                                {/* Decorative Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-royal-gold/30" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-royal-gold/30" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-royal-gold/30" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-royal-gold/30" />

                                {/* Content */}
                                <div className="flex flex-col h-full items-center text-center">
                                    <div className="mb-6 p-3 rounded-full border border-royal-gold/20 bg-black">
                                        <Quote className="w-6 h-6 text-royal-gold" />
                                    </div>

                                    <blockquote className="font-serif text-lg text-gray-200 mb-8 grow leading-relaxed">
                                        "{t.text}"
                                    </blockquote>

                                    <div className="border-t border-royal-gold/10 w-full pt-6 mt-auto">
                                        <cite className="not-italic block">
                                            <span className="block font-display text-royal-gold text-lg mb-1">{t.name}</span>
                                            <span className="block font-sans text-xs text-royal-gold/60 tracking-wider uppercase">{t.title}</span>
                                        </cite>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
