"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import ShinyText from './ShinyText';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-dark-surface relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 border border-royal-gold/10 rounded-full pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-48 h-48 border border-royal-gold/5 rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-royal-gold/60 font-sans text-sm uppercase tracking-widest mb-4">Our Story</p>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight">
                            Where Every Meal is a <ShinyText text="Royal" speed={3} /> Experience
                        </h2>

                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Born from a passion for authentic Maharashtrian cuisine and a dedication to excellence,
                                Rassa Raaja brings the grandeur of royal kitchens to your table. Every dish tells
                                a story of tradition, crafted with recipes passed down through generations.
                            </p>
                            <p>
                                Our chefs, trained in the art of Gavran cooking, use only the finest local
                                ingredients and time-honored techniques to create an unforgettable dining
                                experience that transcends the ordinary.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-display text-royal-gold mb-1">15+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Years of Excellence</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display text-royal-gold mb-1">50+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Signature Dishes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-display text-royal-gold mb-1">★ 4.9</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Customer Rating</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-4/5 relative overflow-hidden rounded-2xl">
                            {/* Decorative frame */}
                            <div className="absolute inset-4 border-2 border-royal-gold/20 rounded-xl z-10 pointer-events-none" />

                            {/* Actual restaurant image */}
                            <Image
                                src="/images/ref_signage_new.jpg"
                                alt="Rassa Raaja Restaurant Signage"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />

                            {/* Gradient overlay for text readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />

                            {/* Caption overlay */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <p className="text-royal-gold font-display text-lg tracking-widest uppercase">
                                    Rassa Raaja
                                </p>
                                <p className="text-gray-300 text-sm mt-1">
                                    FC Road, Pune
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
