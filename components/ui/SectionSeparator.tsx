import React from 'react';

interface SectionSeparatorProps {
    position?: 'top' | 'bottom';
    color?: string;
    height?: string;
    className?: string;
    stroke?: string;
    strokeWidth?: number;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
    position = 'bottom',
    color = '#0a0a0a',
    height = '60px',
    className = '',
    stroke = 'none',
    strokeWidth = 2
}) => {
    // Elegant organic wave - deeper curve matching the 1440x320 viewBox
    const wavePath = "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

    // Invert path for top position if needed, or just rotate the SVG container
    const isTop = position === 'top';

    return (
        <div
            className={`absolute left-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${isTop ? 'top-0 rotate-180' : 'bottom-0'} ${className}`}
            style={{ height }}
        >
            <svg
                className="relative block w-[calc(100%+1.3px)] h-full"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    fillOpacity="1"
                    d={wavePath}
                ></path>
            </svg>
        </div>
    );
};

export default SectionSeparator;
