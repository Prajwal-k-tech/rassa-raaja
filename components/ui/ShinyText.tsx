"use client";

import { motion } from 'framer-motion';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    goldShimmer?: boolean;
}

export default function ShinyText({
    text,
    disabled = false,
    speed = 5,
    className = '',
    goldShimmer = true
}: ShinyTextProps) {
    const animationDuration = `${speed}s`;

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`shiny-text ${goldShimmer ? 'gold' : ''} ${disabled ? 'disabled' : ''} ${className}`}
            style={{ animationDuration }}
        >
            {text}
        </motion.span>
    );
}
