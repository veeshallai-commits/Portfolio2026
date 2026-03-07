import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        role: 'Creative Director',
        company: 'Bhamasha World Pvt. Ltd.',
        period: '2023 — 2025',
        type: 'Full-time',
        location: 'Vadodara, India',
        description:
            'Leading entire creative and digital ecosystem across branding, packaging, web, e-commerce, print, and marketing. Directing brand identity systems, UI/UX for websites, and managing product photoshoots, videography, and integrated digital marketing initiatives.',
        tags: ['Creative Direction', 'Brand Systems', 'UI/UX', 'Packaging', 'E-Commerce'],
    },
    {
        role: 'Creative Consultant',
        company: 'Shrishaa Fashion Studio',
        period: '2020 — 2023',
        type: 'Full-time',
        location: 'Vadodara, India',
        description:
            'Led creative modernization and brand repositioning. Integrated digital tools, contemporary design systems, and marketing strategies. Directed exhibitions and promotional campaigns.',
        tags: ['Brand Strategy', 'Digital Tools', 'Marketing'],
    },
    {
        role: 'Consulting Professor – Design & Multimedia',
        company: 'Baroda Institute of Technology',
        period: '2019 — 2020',
        type: 'Part-time',
        location: 'Vadodara, India',
        description:
            'Designed and delivered curriculum across Graphic Design, Multimedia, CAD, and 3D Visualization. Focused on real-world application, design thinking, and mentored students for industry readiness.',
        tags: ['Education', 'CAD', '3D Visualization', 'Mentorship'],
    },
    {
        role: 'Co-Founder & Creative Director',
        company: 'Shrishaa Fashion Studio',
        period: '2012 — 2019',
        type: 'Full-time',
        location: 'Vadodara, India',
        description:
            'Built the brand from concept to execution. Led brand identity, product design, and creative strategy. Conducted market research, trend analysis, and established a professional design studio with strong brand consistency.',
        tags: ['Co-Founder', 'Brand Building', 'Product Design', 'Leadership'],
    },
    {
        role: 'Art Director',
        company: 'Ishi Information Systems',
        period: '2010 — 2012',
        type: 'Full-time',
        location: 'Ahmedabad, India',
        description:
            'Directed UI/UX and visual design for web, mobile, and touchscreen applications. Led interface design from concept to pixel-perfect execution and collaborated with development teams.',
        tags: ['UI/UX Design', 'Interface Design', 'Mobile', 'Web'],
    },
    {
        role: 'Web Master / Design Lead',
        company: 'Paul Mason Consulting',
        period: '2009 — 2010',
        type: 'Full-time',
        location: 'Vadodara, India',
        description:
            'Designed websites, intranet portals, branding assets, infographics, and presentations for global clients. Led concept-to-execution creative delivery and mentored junior designers.',
        tags: ['Web Design', 'Branding', 'Infographics', 'Mentoring'],
    },
    {
        role: 'Assistant Manager – Design & Operations',
        company: 'Contakt Tech Solutions (I) Pvt. Ltd.',
        period: '2008 — 2009',
        type: 'Full-time',
        location: 'Vadodara, India',
        description:
            'Established office infrastructure and IT systems. Managed 36-member cross-functional team across operations, QA, and content. Led branding and communication design for group companies.',
        tags: ['Operations Management', 'Team Leadership', 'Branding', '36-Member Team'],
    },
];

const ExperienceSection = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.exp-item');
        items.forEach((item, i) => {
            gsap.fromTo(
                item,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.9,
                    delay: 0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <section className="exp-section" id="experience">
            <div className="exp-inner">
                {/* Left header — sticky */}
                <div className="exp-left">
                    <span className="section-eyebrow">Career</span>
                    <h2 className="exp-title">
                        Work<br /><em>Experience</em>
                    </h2>
                    <p className="exp-intro">
                        A timeline of roles that shaped my perspective on design, craft, and storytelling.
                    </p>
                    <div className="exp-years-badge">
                        <span className="exp-years-num">29+</span>
                        <span className="exp-years-label">Years of<br />Experience</span>
                    </div>
                </div>

                {/* Right — timeline */}
                <div className="exp-right">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-item">
                            <div className="exp-item-header">
                                <div className="exp-dot" />
                                <div className="exp-meta">
                                    <span className="exp-period">{exp.period}</span>
                                    <span className="exp-type">{exp.type}</span>
                                </div>
                            </div>
                            <div className="exp-body">
                                <div className="exp-role-row">
                                    <div>
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <p className="exp-company">{exp.company} · {exp.location}</p>
                                    </div>
                                    <span className="exp-arrow">↗</span>
                                </div>
                                <p className="exp-desc">{exp.description}</p>
                                <div className="exp-tags">
                                    {exp.tags.map((tag, j) => (
                                        <span key={j} className="exp-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            {i < experiences.length - 1 && <div className="exp-divider" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
