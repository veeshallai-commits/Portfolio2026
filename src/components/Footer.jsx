import React from 'react';

const Footer = () => {
    const time = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

    return (
        <footer className="footer" id="contact">
            <div className="footer-inner">
                <div className="footer-top">
                    <div>
                        <span className="footer-availability">Open for collaborations</span>
                        <h2 className="footer-headline">
                            Let's build<br /><em>something</em> real.
                        </h2>
                        <a href="mailto:veeshall.patel@gmail.com" className="footer-email">
                            veeshall.patel@gmail.com
                            <span className="footer-email-icon">↗</span>
                        </a>
                        <p className="footer-phone" style={{marginTop: '12px', fontSize: '0.95rem', opacity: 0.8}}>+91 98250 31357</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://linkedin.com/in/veeshallp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:veeshall.patel@gmail.com">Email</a>
                        <a href="#">Instagram</a>
                        <a href="#">Portfolio</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>
                        <p className="footer-brand">Veeshall<span>.</span></p>
                        <p className="footer-copy">© 2026 Veeshall P. All rights reserved.</p>
                    </div>
                    <div className="footer-meta">
                        <div className="footer-meta-item">
                            <span className="footer-meta-label">Based in</span>
                            <span className="footer-meta-value">Vadodara, Gujarat, India</span>
                        </div>
                        <div className="footer-meta-item">
                            <span className="footer-meta-label">Local Time</span>
                            <span className="footer-meta-value">{time} IST</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
