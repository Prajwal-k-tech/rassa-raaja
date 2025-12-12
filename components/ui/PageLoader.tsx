"use client";

import { motion } from 'framer-motion';

export default function PageLoader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-6"
                >
                    {/* Decorative Circle */}
                    <div className="w-32 h-32 border border-royal-gold/30 rounded-full animate-spin-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                    <h1 className="text-4xl font-display text-royal-gold tracking-[0.2em] relative z-10">
                        RASSA
                        <br />
                        <span className="text-royal-red">RAAJA</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-royal-gold to-transparent"
                />

                <p className="mt-4 text-xs font-sans text-royal-gold/60 tracking-widest uppercase">
                    Loading Luxury
                </p>
            </div>
        </motion.div>
    );
}
