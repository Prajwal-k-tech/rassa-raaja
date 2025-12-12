"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import MenuSection from "@/components/ui/MenuSection";
import Gallery from "@/components/ui/Gallery";
import BookingForm from "@/components/ui/BookingForm";
import PageLoader from "@/components/ui/PageLoader";
import BackToTop from "@/components/ui/BackToTop";
import ChefHighlight from "@/components/ui/ChefHighlight";
import AboutSection from "@/components/ui/AboutSection";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionSeparator from "@/components/ui/SectionSeparator";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Home() {
  return (
    <main className="bg-dark-bg min-h-screen selection:bg-royal-gold selection:text-dark-bg relative">
      <FloatingParticles />
      <Navbar />

      <Hero />

      <div className="relative z-20 bg-dark-bg">
        <AboutSection />
        <SectionSeparator position="bottom" color="#111111" height="120px" stroke="rgba(212, 175, 55, 0.3)" />
      </div>

      <div className="relative z-10 bg-dark-surface pt-20">
        <MenuSection />
        <SectionSeparator position="bottom" color="#0a0a0a" height="120px" stroke="rgba(212, 175, 55, 0.3)" />
      </div>

      <div className="relative z-20 bg-dark-bg pt-20">
        <ChefHighlight />
      </div>

      <div className="relative z-20 bg-dark-bg pb-20">
        <Gallery />
        <SectionSeparator position="bottom" color="#0a0a0a" height="120px" />
      </div>

      <div className="relative z-10 bg-dark-bg pt-10">
        <BookingForm />
      </div>

      {/* Enhanced Footer */}
      <footer className="relative bg-black text-gray-400 pt-20 pb-8 overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-royal-gold to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">

            {/* Brand Column */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-display text-royal-gold mb-4 tracking-wider">Rassa Raaja</h3>
              <p className="text-sm leading-relaxed mb-6">
                Where every meal is a royal experience. Discover the authentic flavors of India in an ambiance fit for kings.
              </p>
              <div className="w-16 h-0.5 bg-royal-gold/30" />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-display text-white mb-6 uppercase tracking-widest">Explore</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#menu" className="hover:text-royal-gold transition-colors">Our Menu</Link></li>
                <li><Link href="#gallery" className="hover:text-royal-gold transition-colors">Gallery</Link></li>
                <li><Link href="#book" className="hover:text-royal-gold transition-colors">Reservations</Link></li>
                <li><Link href="#" className="hover:text-royal-gold transition-colors">Private Events</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-display text-white mb-6 uppercase tracking-widest">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-royal-gold mt-1 shrink-0" />
                  <span>FC Road, Shivajinagar<br />Pune, Maharashtra 411005</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-royal-gold shrink-0" />
                  <span>+91 20 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-royal-gold shrink-0" />
                  <span>reservations@rassaraaja.com</span>
                </li>
              </ul>
            </div>

            {/* Social & Hours */}
            <div>
              <h4 className="text-lg font-display text-white mb-6 uppercase tracking-widest">Hours</h4>
              <div className="text-sm space-y-2 mb-6">
                <p><span className="text-gray-500">Mon - Thu:</span> 5:00 PM - 10:00 PM</p>
                <p><span className="text-gray-500">Fri - Sat:</span> 5:00 PM - 11:00 PM</p>
                <p><span className="text-gray-500">Sunday:</span> 4:00 PM - 9:00 PM</p>
              </div>

              <h4 className="text-lg font-display text-white mb-4 uppercase tracking-widest">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                  <Instagram size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-royal-gold hover:text-royal-gold transition-all duration-300">
                  <Twitter size={18} />
                </Link>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Rassa Raaja. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-royal-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-royal-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}
