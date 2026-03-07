import React from 'react';

const tools = [
    // AI Models
    { name: 'ChatGPT' },
    { name: 'Claude' },
    { name: 'Perplexity' },
    { name: 'Qwen' },
    { name: 'Gemini' },
    { name: 'Grok' },
    { name: 'MetaAI' },
    
    // Code & Development
    { name: 'VS Code' },
    { name: 'Antigravity' },
    
    // Adobe Suite
    { name: 'Photoshop' },
    { name: 'Illustrator' },
    { name: 'InDesign' },
    { name: 'XD' },
    { name: 'Premiere' },
    { name: 'Audition' },
    { name: 'Character Animator' },
    { name: 'Animate' },
    { name: 'Dimensions' },
    { name: 'Dreamweaver' },
    
    // Other Design Tools
    { name: 'Corel Draw' },
    { name: 'Wondershare Filmora' },
    { name: 'Fruity Loops' },
    { name: '3DS Max' },
    { name: 'AutoCAD' },
    { name: 'MiniCAD' },
    { name: 'Google SketchUp' },
    { name: 'and more' },
];

// Duplicate for seamless looping
const doubled = [...tools, ...tools];

const ToolsMarquee = () => (
    <section className="tools-section">
        <div className="tools-header">
            <span className="section-eyebrow">Toolkit</span>
            <h2 className="tools-title">Softwares &amp; <em>Tools</em> Worked On</h2>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="marquee-wrapper">
            <div className="marquee-track marquee-left">
                {doubled.map((tool, i) => (
                    <div key={i} className="tool-chip">
                        <span className="tool-chip-name">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Row 2 — scrolls right (offset for visual depth) */}
        <div className="marquee-wrapper">
            <div className="marquee-track marquee-right">
                {[...doubled].reverse().map((tool, i) => (
                    <div key={i} className="tool-chip">
                        <span className="tool-chip-name">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ToolsMarquee;
