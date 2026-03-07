import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const qrSrc = (url) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=140x140&color=000000&bgcolor=ffffff&margin=6&data=${encodeURIComponent(url)}`;

const projects = [
    {
        name: 'AI YouTube Story Channel',
        category: 'AI Product',
        description: 'An AI-powered storytelling channel that produces engaging narrative videos using automated script generation, voice synthesis, and visual storytelling workflows designed for scalable YouTube content production.',
        tags: ['AI Automation', 'Video Production', 'Storytelling', 'YouTube'],
        url: 'https://www.youtube.com/@thedivinespark-veep',
        linkText: 'Visit Channel'
    },
    {
        name: 'AI Influencer & Social Content Engine',
        category: 'AI Product',
        description: 'A virtual AI influencer system designed to generate Instagram reels, posts, and promotional ads using AI-generated characters, automated content scripting, and social media optimization workflows.',
        tags: ['AI Characters', 'Social Media', 'Content Creation', 'Instagram'],
        url: 'https://instagram.com/iamshrishaa',
        linkText: 'View Profile'
    },
];

const ProjectsSection = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
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

    return (
        <section className="projects-section" id="projects">
            <div className="projects-header">
                <span className="section-eyebrow">Innovation</span>
                <h2 className="projects-title">
                    AI Content Systems &<br /><em>Creative IP</em>
                </h2>
                <p className="projects-intro">
                    A collection of AI-powered content systems and digital characters designed to automate storytelling, social media content, and scalable creative media production.
                </p>
            </div>

            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card reveal">
                        <div className="project-header">
                            <h3 className="project-name">{project.name}</h3>
                            <span className="project-category">{project.category}</span>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-image-placeholder">
                            <img src="" alt={project.name} className="project-image" />
                        </div>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                            ))}
                        </div>
                        <div className="project-footer">
                            <div className="project-qr-wrap">
                                <img
                                    src={qrSrc(project.url)}
                                    alt={`QR for ${project.name}`}
                                    className="project-qr"
                                    loading="lazy"
                                />
                                <span className="project-qr-hint">Scan</span>
                            </div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                {project.linkText} ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;
