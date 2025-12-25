import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let animationFrameId;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            currentX += (mouseX - currentX) * 1;
            currentY += (mouseY - currentY) * 1;
            setPosition({ x: currentX, y: currentY });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const size = 15;
    const offset = size / 2;

    return (
        <div
            className={`fixed top-0 left-0 w-[${size}px] aspect-square border-2 border-solid border-[hsl(0,0%,15%)]
            rounded-full z-50`}
            style={{
                transform: `translate(${position.x - offset}px, ${position.y - offset}px)`,
                transition: 'background 0.05s, transform 0.05s',
                pointerEvents: 'none'
            }}
        />
    );
};

export default Cursor;