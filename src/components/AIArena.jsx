import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// QR codes point to the actual AI tool URLs (free QR API used for generation)
const arenaCards = [
    {
        id: 1,
        name: 'LinkedIn Post Generator',
        maker: 'Veeshall\'s AI',
        accent: '#0A66C2',
        emoji: '💼',
        url: '#',
        shortDesc: 'Generates professional, brand-aligned LinkedIn content for thought leadership and engagement.',
        use: 'Content Creation',
    },
    {
        id: 2,
        name: 'Storytelling & Animation Generator',
        maker: 'Veeshall\'s AI',
        accent: '#FF6B6B',
        emoji: '🎬',
        url: '#',
        shortDesc: 'End-to-end system for story scripts, character visuals, scenes, and voice-over creation.',
        use: 'Animation & Story',
    },
    {
        id: 3,
        name: 'Instagram Post Generator',
        maker: 'Veeshall\'s AI',
        accent: '#E1306C',
        emoji: '✨',
        url: '#',
        shortDesc: 'Personalized AI-driven content system with face characters for consistent personal branding.',
        use: 'Social Media',
    },
    {
        id: 4,
        name: 'Product Ad Generator',
        maker: 'Veeshall\'s AI',
        accent: '#1877F2',
        emoji: '📱',
        url: '#',
        shortDesc: 'Creates customized, conversion-focused ad creatives for Instagram & Facebook platforms.',
        use: 'Ad Creative',
    },
    {
        id: 5,
        name: 'SEO Blog Writer',
        maker: 'Veeshall\'s AI',
        accent: '#F59E0B',
        emoji: '✍️',
        url: '#',
        shortDesc: 'Produces trend-driven, search-intent–aligned, SEO-optimized long-form content.',
        use: 'Content Marketing',
    },
    {
        id: 6,
        name: 'Testimonials Generator',
        maker: 'Veeshall\'s AI',
        accent: '#8B5CF6',
        emoji: '⭐',
        url: '#',
        shortDesc: 'Creates authentic, industry-specific testimonials to enhance brand trust and credibility.',
        use: 'Social Proof',
    },
    {
        id: 7,
        name: 'Song Lyrics Generator',
        maker: 'Veeshall\'s AI',
        accent: '#EC4899',
        emoji: '🎵',
        url: '#',
        shortDesc: 'Generates emotionally coherent lyrics across multiple languages with cultural nuance.',
        use: 'Creative Writing',
    },
    {
        id: 8,
        name: 'Service Sector Posts',
        maker: 'Veeshall\'s AI',
        accent: '#10B981',
        emoji: '🎨',
        url: '#',
        shortDesc: 'Illustration-based and realistic visual generators for Facebook & Instagram campaigns.',
        use: 'Visual Design',
    },
];

// QR code via public API (no install needed)
const qrSrc = (url) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=140x140&color=000000&bgcolor=ffffff&margin=6&data=${encodeURIComponent(url)}`;

const AIArena = () => {
    const [hovered, setHovered] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const sectionRef = useRef(null);

    const handleCardClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const cards = sectionRef.current.querySelectorAll('.ai-card');
        cards.forEach((card, i) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.75,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 88%',
                        toggleActions: 'play none none reverse',
                    },
                    delay: (i % 4) * 0.1,
                }
            );
        });
    }, []);

    return (
        <section className="ai-section" ref={sectionRef} id="ai-arena">
            {/* Header */}
            <div className="ai-header">
                <span className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    AI-Powered Solutions
                </span>
                <h2 className="ai-title">
                    My AI <em>Arena</em>
                </h2>
                <p className="ai-subtitle">
                    A collection of custom AI products and creative systems I've built to streamline production and amplify impact.
                </p>
            </div>

            {/* Cards grid */}
            <div className="ai-grid">
                {arenaCards.map((card) => (
                    <div
                        key={card.id}
                        className="ai-card"
                        style={{ '--card-accent': card.accent }}
                        onMouseEnter={() => setHovered(card.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        {/* Top row */}
                        <div className="ai-card-top">
                            <div className="ai-card-icon" style={{ background: card.accent + '22', color: card.accent }}>
                                {card.emoji}
                            </div>
                            <div className="ai-use-badge">{card.use}</div>
                        </div>

                        {/* Name & maker */}
                        <div className="ai-card-body">
                            <h3 className="ai-name">{card.name}</h3>
                            <p className="ai-maker">{card.maker}</p>
                            <p className="ai-desc">{card.shortDesc}</p>
                        </div>

                        {/* QR footer */}
                        <div className="ai-card-footer">
                            <div className="ai-qr-wrap" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                                <img
                                    src={qrSrc(card.url)}
                                    alt={`QR for ${card.name}`}
                                    className="ai-qr"
                                    loading="lazy"
                                    style={{ cursor: 'pointer' }}
                                />
                                <span className="ai-scan-hint">Scan to visit</span>
                            </div>
                            <a
                                href="#"
                                onClick={handleCardClick}
                                className="ai-link"
                                style={{ background: card.accent }}
                            >
                                Open ↗
                            </a>
                        </div>

                        {/* Accent line on hover */}
                        <div className="ai-card-accent-line" />
                    </div>
                ))}
            </div>

            {/* Beautiful Modal Overlay */}
            {showModal && (
                <div className="ai-modal-overlay" onClick={closeModal}>
                    <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="ai-modal-close" onClick={closeModal}>×</button>
                        
                        <div className="ai-modal-icon">✉️</div>
                        
                        <h2 className="ai-modal-title">Access Coming Soon</h2>
                        
                        <p className="ai-modal-text">
                            These are custom AI applications I've built. I'd love to give you a test link!
                        </p>
                        
                        <p className="ai-modal-highlight">
                            Contact Veeshall for test link
                        </p>
                        
                        <div className="ai-modal-actions">
                            <a href="mailto:veeshall.patel@gmail.com" className="ai-modal-button ai-modal-button-primary">
                                Send Email
                            </a>
                            <a href="https://linkedin.com/in/veeshallp" target="_blank" rel="noopener noreferrer" className="ai-modal-button ai-modal-button-secondary">
                                Connect on LinkedIn
                            </a>
                        </div>
                        
                        <button className="ai-modal-button ai-modal-button-ghost" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AIArena;
