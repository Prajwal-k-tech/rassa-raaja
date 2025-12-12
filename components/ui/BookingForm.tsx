"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Users, Clock, User, Phone, Sparkles } from 'lucide-react';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="book" className="py-32 bg-dark-bg text-gray-200 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="absolute top-20 right-20 text-[400px] font-display text-royal-gold leading-none">
                    R
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-xs tracking-[0.4em] text-gray-500 uppercase font-sans">
                            Reservations
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display text-gold-gradient mt-4 mb-8">
                            Book a Table
                        </h2>

                        <p className="text-gray-400 font-sans leading-relaxed mb-10">
                            Reserve your royal dining experience. We recommend making reservations
                            at least 2 days in advance for the best seating options.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 border border-royal-gold/30 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-4 h-4 text-royal-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-sm tracking-wider uppercase mb-1">Hours</h4>
                                    <p className="text-gray-500 text-sm font-sans">
                                        Tue - Sun: 5:00 PM - 11:00 PM<br />
                                        Closed Mondays
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 border border-royal-gold/30 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-royal-gold" />
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-sm tracking-wider uppercase mb-1">Contact</h4>
                                    <p className="text-gray-500 text-sm font-sans">
                                        +1 (555) 123-4567<br />
                                        reservations@rassaraaja.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative divider */}
                        <div className="mt-12 w-32 h-[1px] bg-gradient-to-r from-royal-gold to-transparent" />
                    </motion.div>

                    {/* Right - Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            {/* Decorative frame */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 border-l-2 border-t-2 border-royal-gold/30" />
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 border-r-2 border-b-2 border-royal-gold/30" />

                            <form className="bg-dark-elevated/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <User className="w-3 h-3" /> Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-gray-600 focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Phone className="w-3 h-3" /> Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-gray-600 focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans"
                                            placeholder="Your phone"
                                        />
                                    </div>

                                    {/* Date */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Calendar className="w-3 h-3" /> Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans [color-scheme:dark]"
                                        />
                                    </div>

                                    {/* Time */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Clock className="w-3 h-3" /> Time
                                        </label>
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans cursor-pointer"
                                        >
                                            <option value="" className="bg-dark-bg">Select time</option>
                                            <option value="17:00" className="bg-dark-bg">5:00 PM</option>
                                            <option value="18:00" className="bg-dark-bg">6:00 PM</option>
                                            <option value="19:00" className="bg-dark-bg">7:00 PM</option>
                                            <option value="20:00" className="bg-dark-bg">8:00 PM</option>
                                            <option value="21:00" className="bg-dark-bg">9:00 PM</option>
                                        </select>
                                    </div>

                                    {/* Guests */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Users className="w-3 h-3" /> Guests
                                        </label>
                                        <select
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans cursor-pointer"
                                        >
                                            <option value="1" className="bg-dark-bg">1 Guest</option>
                                            <option value="2" className="bg-dark-bg">2 Guests</option>
                                            <option value="3" className="bg-dark-bg">3 Guests</option>
                                            <option value="4" className="bg-dark-bg">4 Guests</option>
                                            <option value="5" className="bg-dark-bg">5 Guests</option>
                                            <option value="6+" className="bg-dark-bg">6+ Guests</option>
                                        </select>
                                    </div>

                                    {/* Occasion */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-display text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            <Sparkles className="w-3 h-3" /> Occasion
                                        </label>
                                        <select
                                            name="occasion"
                                            value={formData.occasion}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white focus:border-royal-gold focus:ring-0 outline-none transition-colors font-sans cursor-pointer"
                                        >
                                            <option value="" className="bg-dark-bg">Select occasion</option>
                                            <option value="birthday" className="bg-dark-bg">Birthday</option>
                                            <option value="anniversary" className="bg-dark-bg">Anniversary</option>
                                            <option value="date" className="bg-dark-bg">Date Night</option>
                                            <option value="business" className="bg-dark-bg">Business Dinner</option>
                                            <option value="other" className="bg-dark-bg">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-8 relative overflow-hidden group py-5 bg-royal-gold text-dark-bg font-display text-base tracking-[0.2em] uppercase transition-all duration-300"
                                >
                                    <span className="relative z-10">Request Reservation</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-royal-gold-dark to-royal-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>

                                <p className="text-center text-gray-600 text-xs font-sans mt-4">
                                    You will receive a confirmation within 24 hours
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
