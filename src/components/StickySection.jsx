import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: 'Spatial Branding',
        category: 'Architecture',
        image: 'https://picsum.photos/seed/arch01/800/1000',
        description: 'Reimagining physical spaces through digital lenses and bold identity.',
    },
    {
        title: 'Zero-Force UX',
        category: 'Interface Design',
        image: 'https://picsum.photos/seed/ux02/800/1000',
        description: 'Interfaces that feel as natural as breathing, crafted for zero friction.',
    },
    {
        title: 'Kinetic Identity',
        category: 'Motion & Brand',
        image: 'https://picsum.photos/seed/motion03/800/1000',
        description: 'Visual systems that evolve in real-time with the brand narrative.',
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
