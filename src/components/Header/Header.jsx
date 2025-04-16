import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "about";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (
          scrollY >= sectionTop - 100 &&
          scrollY < sectionTop + sectionHeight - 100
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial pour définir la section active

    return () => window.removeEventListener("scroll", handleScroll);
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
                onClick={(e) => handleClick(e, "about")}
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
                onClick={(e) => handleClick(e, "experience")}
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
                onClick={(e) => handleClick(e, "projects")}
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
          href="https://github.com/CedrineM"
          target="_blank"
          rel="noopener noreferrer"
          className="header__social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/cedrine-milesi/"
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
