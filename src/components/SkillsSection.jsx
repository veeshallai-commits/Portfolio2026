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
                    {skillCategories.map((category, idx) => {
                        const pastelColors = [
                            'linear-gradient(135deg, #1a1f2e, #2a2f3e)', // Dark Blue gradient
                            'linear-gradient(135deg, #2a4f2e, #3a6f3e)', // Dark Green gradient
                            'linear-gradient(135deg, #4a2f6e, #6a3f9e)', // Dark Purple gradient
                            'linear-gradient(135deg, #6a3f9e, #8a5fb4)', // Dark Purple gradient
                            'linear-gradient(135deg, #2a4f2e, #3a6f3e)', // Dark Green gradient
                            'linear-gradient(135deg, #0097a7, #00bcd4)', // Dark Cyan gradient
                            'linear-gradient(135deg, #00bcd4, #26c6da)', // Dark Cyan gradient
                            'linear-gradient(135deg, #ff4500, #ff7f50)'  // Dark Orange gradient
                        ];
                        
                        const borderColor = [
                            '#FFB74D', // Peach border
                            '#66BB6A', // Mint border
                            '#4FC3F7', // Sky Blue border
                            '#BA68C8', // Lavender border
                            '#FF9800', // Apricot border
                            '#009688', // Aqua border
                            '#9CCC65', // Lime border
                            '#E91E63'  // Pink border
                        ];

                        const bgColor = pastelColors[idx % pastelColors.length];
                        const bdColor = borderColor[idx % borderColor.length];

                        return (
                            <div key={idx} className="skill-card reveal" style={{ backgroundColor: bgColor, borderRadius: '10px', padding: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#333' }}>
                                <div className="skill-card-header" style={{ paddingBottom: '10px', marginBottom: '15px' }}>
                                    <h3 className="skill-category-title" style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: bdColor }}>{category.title}</h3>
                                </div>
                                <ul className="skill-list" style={{ listStyleType: 'none', padding: 0 }}>
                                    {category.skills.map((skill, i) => (
                                        <li key={i} className="skill-item" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                                            <span className="skill-icon" style={{ fontSize: '14px', marginRight: '10px', color: bdColor }}>•</span>
                                            <span style={{ fontSize: '14px', color: '#333' }}>{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
