import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header role="banner">
      <nav
        className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
        aria-label="Primary navigation"
      >
        <a href="/" className="navbar-logo" aria-label="Veeshall P — Home">
          Veeshall P<span aria-hidden="true">.</span>
        </a>

        <ul className="navbar-links" role="list">
          <li><a href="#work" aria-label="View selected work">Work</a></li>
          <li><a href="#experience" aria-label="View work experience">Experience</a></li>
          <li><a href="#skills" aria-label="View core competencies">Skills</a></li>
          <li><a href="#projects" aria-label="View AI products and projects">Projects</a></li>
          <li><a href="#about" aria-label="About Veeshall's methodology">About</a></li>
          <li><a href="#contact-qr" aria-label="Quick connect and QR codes">Connect</a></li>
        </ul>

        <a href="#contact" className="navbar-cta" aria-label="Start a project with Veeshall">
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
