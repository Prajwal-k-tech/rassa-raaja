"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/legacy/image";

const chefs = [
    {
        id: 1,
        name: "Vikram Rathore",
        role: "Executive Head Chef",
        image: "/assets/images/chef-1.jpg", // Placeholder
        signature: "Royal Lamb Raan",
        description: "With over 20 years in royal kitchens, Chef Vikram brings the lost recipes of Rajasthan to your plate.",
    },
    {
        id: 2,
        name: "Ananya Singh",
        role: "Pastry Chef",
        image: "/assets/images/chef-2.jpg", // Placeholder
        signature: "Saffron Rose Kulfi",
        description: "Master of sweetness, designing desserts that look like jewelry and taste like heaven.",
    },
    {
        id: 3,
        name: "Arjun Mehta",
        role: "Sous Chef",
        image: "/assets/images/chef-3.jpg", // Placeholder
        signature: "Smoked Dal Bukhara",
        description: "The fire master, controlling the tandoor with precision to create smoky perfection.",
    },
];

export default function ChefHighlight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-royal-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <span className="text-sm font-sans tracking-[0.3em] text-royal-gold uppercase">
                        The Artists
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display text-white mt-4 mb-6">
                        Meet the Masters
                    </h2>
                    <div className="w-24 h-px bg-royal-gold/50 mx-auto" />
                </motion.div>
            </div>

            {/* Grid Layout (Fixed 'Wonky' Scroll) */}
            <div className="relative w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chefs.map((chef, index) => (
                        <motion.div
                            key={chef.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative group overflow-hidden border border-royal-gold/10 bg-black/40 backdrop-blur-sm h-[500px]"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 z-0">
                                {/* Placeholder gradient instead of missing image */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 z-10 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <span className="inline-block px-3 py-1 mb-4 border border-royal-gold/30 text-royal-gold text-xs tracking-widest uppercase bg-black/50 backdrop-blur-md">
                                    {chef.role}
                                </span>
                                <h3 className="text-3xl font-display text-white mb-2">{chef.name}</h3>
                                <p className="text-gray-400 font-sans text-sm md:text-base mb-6">
                                    {chef.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-royal-red" />
                                    <span className="text-royal-gold font-display text-sm uppercase tracking-wider">
                                        Signature: {chef.signature}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
