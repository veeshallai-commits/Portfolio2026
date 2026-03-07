import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactQRSection = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.contact-qr-card');
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, scale: 0.95 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    const qrCodes = [
        {
            title: 'Connect on LinkedIn',
            description: 'Professional network & work updates',
            link: 'https://linkedin.com/in/veeshallp',
            icon: '💼',
            qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/in/veeshallp'
        },
        {
            title: 'Send Email',
            description: 'Start a conversation or collaboration',
            link: 'mailto:veeshall.patel@gmail.com',
            icon: '✉️',
            qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:veeshall.patel@gmail.com'
        },
        {
            title: 'Call or WhatsApp',
            description: 'Direct communication',
            link: 'tel:+919825031357',
            icon: '📱',
            qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=+919825031357'
        },
    ];

    return (
        <section className="contact-qr-section" id="contact-qr">
            <div className="contact-qr-header">
                <span className="section-eyebrow">Connect</span>
                <h2 className="contact-qr-title">
                    Quick<br /><em>Connect</em>
                </h2>
                <p className="contact-qr-intro">
                    Scan to reach out or follow my work. Available for discussions, collaborations, and opportunities.
                </p>
            </div>

            <div className="contact-qr-grid">
                {qrCodes.map((item, idx) => (
                    <div key={idx} className="contact-qr-card reveal">
                        <div className="contact-qr-icon">{item.icon}</div>
                        <h3 className="contact-qr-cardTitle">{item.title}</h3>
                        <p className="contact-qr-description">{item.description}</p>
                        <div className="contact-qr-code">
                            <img src={item.qrUrl} alt={`QR Code for ${item.title}`} />
                        </div>
                        <a href={item.link} className="contact-qr-link">
                            Open Link ↗
                        </a>
                    </div>
                ))}
            </div>

            <div className="contact-qr-footer">
                <p>Or reach out directly: <strong>+91 98250 31357</strong> • <strong>veeshall.patel@gmail.com</strong></p>
            </div>
        </section>
    );
};

export default ContactQRSection;
