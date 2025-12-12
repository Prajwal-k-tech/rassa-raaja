"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const menuCategories = [
    {
        id: 'starters',
        title: 'Mutton Specials', // Changed from starters to emphasize specialty
        tagline: 'Royal Beginnings',
        image: '/images/gallery/premium_mutton_rassa.png',
        items: [
            { name: 'Gavran Mutton Thali', price: '₹450', description: 'Authentic village-style mutton curry cooked on fire wood (Chul), served with Bhakri.' },
            { name: 'Mutton Sukka', price: '₹380', description: 'Dry spicy mutton preparation with rich Maharashtrian spices.' },
            { name: 'Alani Bhat', price: '₹220', description: 'Traditional aromatic rice cooked in mutton stock.' },
            { name: 'Kharda Mutton', price: '₹350', description: 'Mutton cooked in spicy green chili paste (Thecha) style.' },
        ]
    },
    {
        id: 'main',
        title: 'Chicken & Vegetarian',
        tagline: 'Feast of Kings',
        image: '/images/gallery/premium_chicken_tandoori.png',
        items: [
            { name: 'Gavran Chicken Thali', price: '₹380', description: 'Country chicken curry served with Indrayani rice and Jowar Bhakri.' },
            { name: 'Baingan Masala', price: '₹240', description: 'Stuffed eggplants in a nutty, spicy peanut gravy.' },
            { name: 'Pithla Bhakri', price: '₹180', description: 'Comforting gram flour porridge served with Thecha and Bhakri.' },
            { name: 'Shev Bhaji', price: '₹200', description: 'Spicy curry topped with crunchy besan noodles (Sev).' },
        ]
    },
    {
        id: 'breads',
        title: 'Breads & Rice',
        tagline: 'Perfect Pairings',
        image: '/images/gallery/premium_mutton_biryani.png',
        items: [
            { name: 'Jowar Bhakri', price: '₹40', description: 'Traditional sorghum flatbread, handmade and roasted on open fire.' },
            { name: 'Bajra Bhakri', price: '₹40', description: 'Pearl millet flatbread, best paired with spicy rassa.' },
            { name: 'Indrayani Rice', price: '₹80', description: 'Aromatic sticky rice, a local favorite.' },
            { name: 'Masale Bhat', price: '₹180', description: 'Spicy vegetable rice cooked with goda masala.' },
        ]
    },
];

export default function MenuSection() {
    const [activeCategory, setActiveCategory] = useState('starters');
    const activeData = menuCategories.find(c => c.id === activeCategory)!;

    return (
        <section id="menu" className="py-32 bg-dark-bg text-gray-200 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-royal-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs tracking-[0.4em] text-gray-500 uppercase font-sans">
                        Curated Excellence
                    </span>
                    <h2 className="text-5xl md:text-6xl font-display text-gold-gradient mt-4 mb-6">
                        Our Menu
                    </h2>
                    <div className="w-20 h-[1px] bg-royal-gold mx-auto" />
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center gap-8 md:gap-16 mb-16"
                >
                    {menuCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`relative px-6 py-3 text-sm md:text-base font-display tracking-widest uppercase transition-all duration-300 ${activeCategory === cat.id
                                ? 'text-royal-gold'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            {cat.title}
                            {activeCategory === cat.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-royal-gold"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        key={activeData.id + '-image'}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/3] overflow-hidden rounded-3xl"
                    >
                        <div className="absolute inset-0 border border-royal-gold/20" />
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-royal-gold/40" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-royal-gold/40" />

                        <Image
                            src={activeData.image}
                            alt={activeData.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />

                        {/* Image overlay tag */}
                        <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 border border-royal-gold/30">
                            <span className="text-royal-gold font-display text-sm tracking-[0.2em] uppercase">
                                {activeData.tagline}
                            </span>
                        </div>
                    </motion.div>

                    {/* Menu Items Side */}
                    <motion.div
                        key={activeData.id + '-items'}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <div className="mb-8">
                            <h3 className="text-3xl font-display text-white mb-2">{activeData.title}</h3>
                            <p className="text-gray-500 text-sm font-sans">{activeData.tagline}</p>
                        </div>

                        {activeData.items.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="group relative p-6 border border-royal-gold/10 bg-white/5 backdrop-blur-sm hover:border-royal-gold/30 transition-colors duration-300 overflow-hidden rounded-xl"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--x', `${x}px`);
                                    e.currentTarget.style.setProperty('--y', `${y}px`);
                                }}
                            >
                                {/* Spotlight Effect Overlay */}
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(212, 175, 55, 0.1), transparent 40%)'
                                    }}
                                />

                                <div className="relative z-10 flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-display text-royal-gold-light group-hover:text-royal-gold transition-colors">
                                        {item.name}
                                    </h4>
                                    <span className="text-royal-gold font-sans font-bold">{item.price}</span>
                                </div>
                                <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-royal-gold/20 to-transparent mb-4 group-hover:from-royal-gold/50 transition-colors" />
                                <p className="relative z-10 text-gray-400 font-sans text-sm group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
