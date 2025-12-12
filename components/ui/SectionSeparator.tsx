import React from 'react';

interface SectionSeparatorProps {
    position?: 'top' | 'bottom';
    color?: string;
    height?: string;
    className?: string;
    variant?: 'gentle' | 'deep' | 'asymmetrical';
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
    position = 'bottom',
    color = '#0a0a0a',
    height = '120px',
    className = '',
    variant = 'deep'
}) => {
    // Wave paths for 1440x320 viewBox
    const strategies = {
        gentle: "M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,128C672,117,768,107,864,112C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        deep: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
        asymmetrical: "M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,197.3C840,224,960,224,1080,202.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    };

    const wavePath = strategies[variant];

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
                    fillOpacity="1"
                    d={wavePath}
                ></path>
            </svg>
        </div>
    );
};

export default SectionSeparator;
