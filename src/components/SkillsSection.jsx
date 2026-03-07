import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
    {
        title: 'Creative Direction',
        skills: ['Brand Strategy', 'Visual Leadership', 'Design Systems', 'Creative Concept Development', 'Art Direction']
    },
    {
        title: 'Design & UI/UX',
        skills: ['Brand Identity', 'UI/UX Design', 'Packaging Design', 'Print Design', 'Digital Experience', 'Design Systems']
    },
    {
        title: 'Motion & Animation',
        skills: ['Motion Graphics', '2D Animation', 'Video Production', 'Storytelling', 'Character Animation', 'After Effects']
    },
    {
        title: 'AI & Automation',
        skills: ['AI Creative Automation', 'Prompt Engineering', 'AI Content Generation', 'Generative Design', 'Large Language Models']
    },
    {
        title: 'Design Tools',
        skills: ['Adobe Creative Suite', 'Figma', 'Adobe XD', 'CorelDraw', 'SketchUp', 'AutoCAD', '3DS Max']
    },
    {
        title: 'Web & Tech',
        skills: ['WordPress', 'Shopify', 'Web Design', 'E-Commerce', 'CMS Platforms', 'Microsoft 365']
    },
    {
        title: 'AI Platforms',
        skills: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Perplexity', 'HuggingFace']
    },
    {
        title: 'Leadership',
        skills: ['Team Management', 'Mentorship', 'Cross-functional Leadership', 'Strategic Planning', 'Project Management']
    },
];

const SkillsSection = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.skill-card');
        items.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <section className="skills-section" id="skills">
            <div className="skills-inner">
                <div className="skills-header">
                    <span className="section-eyebrow">Expertise</span>
                    <h2 className="skills-title">
                        Core<br /><em>Competencies</em>
                    </h2>
                    <p className="skills-intro">
                        A comprehensive set of skills developed across 29+ years of creative leadership, design thinking, and technology integration.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="skill-card reveal">
                            <h3 className="skill-category-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        <span className="skill-dot">●</span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
