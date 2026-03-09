import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Brand Identity & Logo Design',
        category: 'B R A N D I N G',
        image: '/Images/projects01.jpg',
        description: 'Creating distinctive logos and brand systems that define how businesses look, feel, and communicate.',
    },
    {
        title: 'Marketing & Communication Design',
        category: 'M A R K E T I N G  D E S I G N',
        image: '/Images/projects02.jpg',
        description: 'Designing brochures, banners, hoardings, and promotional materials that capture attention and deliver messages effectively.',
    },
    {
        title: 'Branded Merchandise & Collateral',
        category: 'B R A N D  C O L L A T E R A L',
        image: '/Images/projects03.jpg',
        description: 'Extending brand identity across physical products like caps, t-shirts, cups, packaging, and corporate merchandise.',
    },
    {
        title: 'Online Presence & Digital Assets',
        category: 'D I G I T A L  D E S I G N',
        image: '/Images/projects04.jpg',
        description: 'Designing cohesive digital experiences including website layouts, mobile app interfaces, and social media visuals that help brands maintain a strong and consistent presence across digital platforms.',
    },
];

const StickySection = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <section className="sticky-section" id="work">
            <div className="sticky-inner">
                <div className="sticky-left">
                    <span className="section-eyebrow">Selected Archive</span>
                    <h2>Works that <em>move</em> minds.</h2>
                    <p>A curated selection of experiments in branding, spatial design, and digital experiences.</p>
                    <a href="#contact" className="btn-outline">Start a Collaboration ↗</a>
                </div>
                <div className="sticky-right">
                    {projects.map((project, i) => (
                        <div key={i} className="project-card">
                            <div className="project-img-wrap">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-meta">
                                <div>
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                </div>
                                <p className="project-desc">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StickySection;
