"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import CircularText from "./CircularText";

export default function Hero() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Carousel */}
            <HeroCarousel />

            {/* Decorative Corner Frames */}
            <div className="absolute top-8 left-8 w-24 h-24 border-t border-l border-royal-gold/30 rounded-tl-3xl z-20" />
            <div className="absolute top-8 right-8 w-24 h-24 border-t border-r border-royal-gold/30 rounded-tr-3xl z-20" />
            <div className="absolute bottom-8 left-8 w-24 h-24 border-b border-l border-royal-gold/30 rounded-bl-3xl z-20" />
            <div className="absolute bottom-8 right-8 w-24 h-24 border-b border-r border-royal-gold/30 rounded-br-3xl z-20" />

            {/* HTML Content Overlay */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center px-4"
            >
                <div className="mb-4">
                    <span className="text-royal-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
                        Est. 2024 • Royal Indian Cuisine
                    </span>

                    <h1 className="flex flex-col items-center leading-none mb-8">
                        <span className="text-[5rem] md:text-[9rem] font-serif text-transparent bg-clip-text bg-linear-to-b from-royal-gold via-royal-gold to-royal-gold-dark drop-shadow-2xl filter pb-2">
                            रस्सा
                        </span>
                        <span className="text-[5rem] md:text-[9rem] font-serif text-transparent bg-clip-text bg-linear-to-b from-royal-red via-royal-red-dark to-black drop-shadow-2xl filter -mt-4 md:-mt-8">
                            राजा
                        </span>
                    </h1>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-royal-gold/50" />
                        <span className="text-xl md:text-2xl font-display text-royal-gold tracking-[0.3em] uppercase">
                            Rassa Raaja
                        </span>
                        <div className="w-12 h-px bg-royal-gold/50" />
                    </div>
                </div>
            </motion.div>

            {/* Bottom info */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 pb-12 z-10"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-end justify-between">
                    <div className="hidden md:block">
                        <p className="text-xs text-gray-500 font-sans tracking-[0.3em] uppercase">
                            Where Every Meal<br />is a Royal Experience
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-3"
                        >
                            <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase font-sans">Scroll</span>
                            <div className="w-px h-12 bg-linear-to-b from-royal-gold to-transparent" />
                        </motion.div>
                    </div>

                    <div className="hidden md:flex items-center gap-8 text-right z-20">
                        <p className="text-xs text-gray-500 font-sans tracking-[0.3em] uppercase">
                            Pune<br />Maharashtra
                        </p>

                        {/* Circular CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            <Link href="#book">
                                <CircularText
                                    text="RESERVE * BOOK NOW * "
                                    spinDuration={20}
                                    onHover="goBonkers"
                                    className="w-24 h-24 text-[10px] text-royal-gold/90 hover:text-royal-gold"
                                />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
