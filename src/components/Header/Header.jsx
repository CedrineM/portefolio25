import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observer chaque section
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__title-container">
          <h1 className="header__title">Cédrine MILESI</h1>
          <h2 className="header__subtitle">
            Développeuse Web et Mobile FullStack
          </h2>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              <a
                href="#about"
                className={`header__nav-link ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`header__nav-link ${
                  activeSection === "experience" ? "active" : ""
                }`}
              >
                Expériences et Formations
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`header__nav-link ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                Projets
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="header__social">
        <a
          href="https://github.com/votre-username"
          target="_blank"
          rel="noopener noreferrer"
          className="header__social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/votre-username"
          target="_blank"
          rel="noopener noreferrer"
          className="header__social-link"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
};

export default Header;
