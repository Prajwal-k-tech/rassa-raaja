"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
    color: string;
}

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth main cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Canvas for Gold Dust
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationFrameId = useRef<number>(0);
    const mousePosition = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            mousePosition.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            // Spawn particles on move
            if (Math.random() > 0.5) { // Limit spawn rate
                spawnParticle(e.clientX, e.clientY);
            }
        };

        const handleMouseDown = () => {
            // Burst on click
            for (let i = 0; i < 8; i++) spawnParticle(mousePosition.current.x, mousePosition.current.y, true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mouseleave", handleMouseLeave);
        // Resize canvas
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Init

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, [cursorX, cursorY, isVisible]);

    const spawnParticle = (x: number, y: number, burst = false) => {
        const speed = burst ? 2 : 0.5;
        particles.current.push({
            x,
            y,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed + (Math.random() * 0.5), // Slight gravity/fall
            life: 1,
            size: Math.random() * 2 + 1,
            color: `rgba(212, 175, 55, ${Math.random() * 0.5 + 0.5})` // Variations of Gold
        });
    };

    // Animation Loop
    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02; // Decay rate

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fillStyle = p.color.replace(')', `, ${p.life})`); // Fade out alpha
                ctx.fill();
            }

            animationFrameId.current = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationFrameId.current);
    }, []);

    // Hide on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
            />

            {/* Main Dot */}
            <motion.div
                className="absolute h-2 w-2 rounded-full bg-royal-gold shadow-[0_0_10px_#d4af37]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="absolute h-8 w-8 rounded-full border border-royal-gold/30"
                style={{
                    x: cursorX, // Slight lag is fine, or use spring for both
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </div>
    );
}
