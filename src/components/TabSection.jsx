import React, { useState } from 'react';

const tabs = [
    {
        id: 'design',
        title: 'Design Philosophy',
        icon: '✦',
        gradient: 'linear-gradient(135deg, #1a1f2e, #2a2f3e)', // Dark blue
        content:
            'I believe great design is not just visual — it’s intentional. Every layout, color, and interaction should serve a purpose. My approach focuses on clarity, emotional impact, and creating interfaces that feel natural and effortless to use.',
    },
    {
        id: 'tech',
        title: 'Brand Identity & Visual Design',
        icon: '◈',
        gradient: 'linear-gradient(135deg, #ff7f50, #ff4500)', // Orange gradient
        content:
            'Strong digital products are rooted in strong brand foundations. I approach every project by understanding the brand’s voice, positioning, and audience to ensure the design communicates identity, trust, and long-term value.',
    },
    {
        id: 'strategy',
        title: 'Craft & Quality Standards',
        icon: '◎',
        gradient: 'linear-gradient(135deg, #2a4f2e, #3a6f3e)', // Bottle green gradient
        content:
            'Quality is in the details. From typography and spacing to interaction feedback, I hold every element to a high standard of precision to create polished experiences that feel refined and professional.',
    },
    {
        id: 'ux',
        title: 'Structured Planning & Execution',
        icon: '✧',
        gradient: 'linear-gradient(135deg, #4a2f6e, #6a3f9e)', // Purple gradient
        content:
            'Great outcomes come from thoughtful process. I approach projects with clear planning, defined milestones, and iterative feedback, ensuring ideas move smoothly from concept to implementation.',
    },
    {
        id: 'innovation',
        title: 'Automation & AI Integration',
        icon: '◈',
        gradient: 'linear-gradient(135deg, #00bcd4, #0097a7)', // Cyan gradient
        content:
            'I leverage AI and automation to streamline repetitive tasks, accelerate workflows, and focus more energy on creative problem-solving. This allows projects to move faster while maintaining high quality and consistency.',
    },
];

const TabSection = () => {
    const [active, setActive] = useState(tabs[0]);

    return (
        <section className="tab-section" id="about">
            <div className="tab-header">
                <span className="section-eyebrow">Methodology</span>
                <h2>How I <em>think</em> about<br />digital creation.</h2>
                <div style={{ marginBottom: '40px' }}></div> {/* Added spacing below the title */}
            </div>
            <div className="tab-layout">
                <nav className="tab-nav">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`tab-btn${active.id === tab.id ? ' active' : ''}`}
                            onClick={() => setActive(tab)}
                        >
                            <span className="tab-icon">{tab.icon}</span>
                            {tab.title}
                        </button>
                    ))}
                </nav>
                <div className="tab-content" style={{ background: active.gradient }}> {/* Dynamically apply gradient */}
                    <h3>{active.title}</h3>
                    <p>{active.content}</p>
                    <div className="tab-progress">
                        <div className="tab-progress-bar">
                            <div className="tab-progress-fill" />
                        </div>
                        <span className="tab-progress-label">Phase 01 / Discovery</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TabSection;
