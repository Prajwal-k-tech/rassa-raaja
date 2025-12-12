"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import imgThali from "@/public/images/gallery/premium_royal_thali.png";
import imgRassa from "@/public/images/gallery/premium_mutton_rassa.png";
import imgBiryani from "@/public/images/gallery/premium_mutton_biryani.png";
import imgTandoori from "@/public/images/gallery/premium_chicken_tandoori.png";
import imgPaneer from "@/public/images/gallery/premium_paneer_masala.png";
import imgAmbiance from "@/public/images/ref_ambiance.png";

const images = [
    { src: imgThali, alt: 'Grand Royal Thali Feast' },
    { src: imgRassa, alt: 'Signature Mutton Rassa' },
    { src: imgBiryani, alt: 'Hyderabadi Dum Biryani' },
    { src: imgTandoori, alt: 'Tandoori Platter' },
    { src: imgPaneer, alt: 'Paneer Butter Masala' },
    { src: imgAmbiance, alt: 'Rassa Raaja Ambiance' },
];

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = useCallback((index: number) => {
        setSelectedIndex(index);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
        document.body.style.overflow = 'unset';
    }, []);

    const goNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    }, [selectedIndex]);

    const goPrev = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    }, [selectedIndex]);

    return (
        <section id="gallery" className="py-32 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-royal-gold rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-royal-gold rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-xs tracking-[0.4em] text-gray-500 uppercase font-sans">
                        Visual Stories
                    </span>
                    <h2 className="text-5xl md:text-6xl font-display text-gold-gradient mt-4 mb-6">
                        Gallery
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-sans text-sm leading-relaxed">
                        Glimpses of royal moments and culinary artistry that define the Rassa Raaja experience.
                    </p>
                </motion.div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {images.map((img, idx) => {
                        // Varied sizes for visual interest
                        const isLarge = idx === 0 || idx === 3;
                        const isTall = idx === 2;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                onClick={() => openLightbox(idx)}
                                className={`
                                    relative overflow-hidden cursor-pointer group
                                    ${isLarge ? 'col-span-2 row-span-2' : ''}
                                    ${isTall ? 'row-span-2' : ''}
                                `}
                            >
                                <div className={`relative w-full ${isLarge ? 'aspect-square' : isTall ? 'aspect-[2/3]' : 'aspect-square'}`}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ y: 0, opacity: 1 }}
                                            className="text-center"
                                        >
                                            <span className="text-royal-gold font-display text-sm tracking-[0.3em] uppercase border border-royal-gold px-5 py-2 inline-block">
                                                View
                                            </span>
                                        </motion.div>
                                    </div>

                                    {/* Corner accent */}
                                    <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-royal-gold/0 group-hover:border-royal-gold/60 transition-all duration-500" />
                                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-royal-gold/0 group-hover:border-royal-gold/60 transition-all duration-500" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/60 hover:text-royal-gold transition-colors z-50"
                            aria-label="Close lightbox"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-royal-gold transition-colors z-50 p-2"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={40} />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 hover:text-royal-gold transition-colors z-50 p-2"
                            aria-label="Next image"
                        >
                            <ChevronRight size={40} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </motion.div>

                        {/* Image counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 font-display tracking-[0.3em] text-sm">
                            {selectedIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
