"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';
import CircularText from "./CircularText";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-black/90 backdrop-blur-xl border-b border-royal-gold/20 py-2'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center border border-royal-gold/30 rounded-full bg-black/50 backdrop-blur-md overflow-hidden group-hover:border-royal-gold transition-colors duration-500">
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-royal-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <span className="text-xl md:text-2xl font-serif text-royal-gold relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                    {/* Devanagari Initials or Symbol */}
                                    र
                                </span>
                            </div>
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-royal-gold to-yellow-600 drop-shadow-md">
                                रस्सा राजा
                            </span>
                            <span className="text-[0.5rem] md:text-[0.65rem] tracking-[0.3em] font-sans text-gray-400 uppercase group-hover:text-royal-gold transition-colors duration-300">
                                Rassa Raaja
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-12">
                        {links.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            >
                                <Link
                                    href={link.href}
                                    className="relative text-sm font-sans tracking-[0.15em] text-gray-300 hover:text-royal-gold transition-colors duration-300 uppercase group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-royal-gold transition-all duration-300 group-hover:w-full" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA + Mobile Button */}
                    <div className="flex items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="hidden md:block relative z-50"
                        >
                            <Link
                                href="#book"
                                className="px-6 py-2 border border-royal-gold/30 text-royal-gold hover:bg-royal-gold/10 hover:border-royal-gold font-sans text-xs tracking-widest uppercase transition-all duration-300"
                            >
                                Reserve
                            </Link>
                        </motion.div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-gray-200 hover:text-royal-gold transition-colors p-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </motion.div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center"
                    >
                        {/* Decorative Elements for Mobile Menu */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-royal-red/5 rounded-full blur-3xl" />

                        <div className="flex flex-col items-center gap-8 text-center px-6">
                            {links.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-display text-white hover:text-royal-gold transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="mt-8"
                            >
                                <Link
                                    href="#book"
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-3 w-full bg-royal-gold text-dark-bg font-display uppercase tracking-widest hover:bg-white transition-colors duration-300"
                                >
                                    Reserve a Table
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
