import React, { useState } from 'react';

const tabs = [
    {
        id: 'design',
        title: 'Design Philosophy',
        icon: '✦',
        gradient: 'linear-gradient(135deg, #1a1f2e, #2a2f3e)', // Dark blue
        content:
            'I believe in design that is not just seen, but felt. Every pixel should serve a purpose, and every interaction should feel like a natural extension of the user\'s intent. My approach blends cinematic aesthetics with functional precision.',
    },
    {
        id: 'tech',
        title: 'Core Tech Stack',
        icon: '◈',
        gradient: 'linear-gradient(135deg, #ff7f50, #ff4500)', // Orange gradient
        content:
            'Building with React, GSAP, and Three.js to create performant, highly-animated digital experiences. I focus on optimising load times while pushing the boundaries of what the browser can do.',
    },
    {
        id: 'strategy',
        title: 'Brand Strategy',
        icon: '◎',
        gradient: 'linear-gradient(135deg, #2a4f2e, #3a6f3e)', // Bottle green gradient
        content:
            'Branding is the narrative that connects a vision to its audience. I help brands find their unique voice through Luxury Tech Spatialism — a blend of high-end aesthetics and futuristic thinking.',
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
