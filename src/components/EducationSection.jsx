import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        title: 'Generative AI, AI Automation & Agentic AI',
        institution: 'Outskill',
        year: 'Recent',
        type: 'Certification',
        focus: 'Advanced AI implementation, automation workflows, and agentic systems'
    },
    {
        title: 'Google Professional Certification',
        institution: 'Google',
        year: 'Completed',
        type: 'Certification',
        focus: 'Digital Marketing & E-Commerce'
    },
    {
        title: 'Advance Diploma in Software Engineering',
        institution: 'Aptech',
        year: 'Completed',
        type: 'Diploma',
        focus: 'Software Development & Systems Design'
    },
];

const EducationSection = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.edu-item');
        items.forEach((item) => {
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
        <section className="education-section" id="education">
            <div className="education-inner">
                <div className="education-left">
                    <span className="section-eyebrow">Learning</span>
                    <h2 className="education-title">
                        Education &<br /><em>Certifications</em>
                    </h2>
                    <p className="education-intro">
                        Continuous learning focused on design fundamentals, emerging technologies, and AI-driven creative systems.
                    </p>
                </div>

                <div className="education-right">
                    {educationData.map((edu, i) => (
                        <div key={i} className="edu-item">
                            <div className="edu-item-header">
                                <div className="edu-dot" />
                                <div className="edu-meta">
                                    <span className="edu-type">{edu.type}</span>
                                    <span className="edu-year">{edu.year}</span>
                                </div>
                            </div>
                            <div className="edu-body">
                                <div className="edu-title-row">
                                    <h3 className="edu-title">{edu.title}</h3>
                                    <span className="edu-arrow">↗</span>
                                </div>
                                <p className="edu-institution">{edu.institution}</p>
                                <p className="edu-focus">{edu.focus}</p>
                            </div>
                            {i < educationData.length - 1 && <div className="edu-divider" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
