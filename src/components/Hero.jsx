import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Image sequence: Load all frames from assets/hero-sequence
        const imageModules = import.meta.glob('../assets/hero-sequence/*.png');
        const frameCount = Object.keys(imageModules).length;
        const images = [];
        const state = { frame: 0 };

        const framePromises = Object.entries(imageModules)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([path, importModule], index) => {
                return importModule().then((module) => {
                    const img = new Image();
                    img.src = module.default;
                    images[index] = img;
                });
            });

        Promise.all(framePromises).then(() => {
            images.forEach(img => { img.onload = drawFrame; });
            drawFrame();
        });

        function drawFrame() {
            const img = images[Math.round(state.frame)];
            if (!img || !img.complete || img.naturalWidth === 0) return;
            const cw = canvas.width, ch = canvas.height;
            const ratio = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
            const dx = (cw - img.naturalWidth * ratio) / 2;
            const dy = (ch - img.naturalHeight * ratio) / 2;
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, dx, dy, img.naturalWidth * ratio, img.naturalHeight * ratio);
        }

        // Scroll-based frame scrubbing
        gsap.to(state, {
            frame: frameCount - 1,
            snap: 'frame',
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.6,
                onUpdate: drawFrame,
            },
        });

        // Hero content fade on scroll
        gsap.to(contentRef.current, {
            opacity: 0,
            y: -80,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '25% top',
                scrub: 1,
            },
        });

        return () => {
            window.removeEventListener('resize', setSize);
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <section className="hero-section" ref={containerRef}>
            <div className="hero-sticky">
                <canvas className="hero-canvas" ref={canvasRef} />
                <div className="hero-overlay" />
                <div className="hero-content" ref={contentRef}>
                    <p className="hero-eyebrow">Portfolio — 2026</p>
                    <h1 className="hero-title">
                        Veeshall <em>P.</em>
                    </h1>
                    <p className="hero-subtitle">
                        Creative Director with 29+ years driving <em>visual</em> design, brand systems & AI-powered creativity.
                    </p>
                    <div className="hero-cta-row">
                        <a href="#work" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-ghost">Start a Project</a>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll</span>
                    <div className="scroll-line" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
