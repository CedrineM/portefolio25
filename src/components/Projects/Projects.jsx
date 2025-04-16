import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import "./Projects.css";
import marvel from "../../assets/img/MarvelComics.png";
import giftsquad from "../../assets/img/GiftSquad.png";
import airbnb from "../../assets/img/Airbnb.png";

const projectsData = [
  {
    id: 1,
    title: "Marvel Comics",
    featured: true,
    description:
      "Application web permettant d'explorer l'univers Marvel grâce à l'API publique de Marvel. Les utilisateurs peuvent rechercher des personnages, des comics, gérer leurs favoris et créer un compte. Ce projet full-stack a été réalisé en totale autonomie, comprenant la mise en place de la logique frontend et backend.",
    image: marvel,
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Axios"],
    githubLinks: {
      frontend: "https://github.com/votre-username/marvel-frontend",
      backend: "https://github.com/votre-username/marvel-backend",
    },
    liveLink: "https://replique-marvel-cedrinemilesi.netlify.app/",
    isMobile: false,
  },
  {
    id: 2,
    title: "GiftSquad",
    featured: true,
    description:
      "Application mobile pour organiser des événements cadeaux entre amis (Secret Santa, anniversaires, etc.). Gestion des utilisateurs, des événements et des listes de souhaits. En tant que lead développeuse, j'ai dirigé l'architecture du projet et le développement des fonctionnalités clés.",
    image: giftsquad,
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Expo"],
    githubLinks: {
      frontend: "https://github.com/votre-username/giftsquad-frontend",
      backend: "https://github.com/votre-username/giftsquad-backend",
    },
    isMobile: true,
  },
  {
    id: 3,
    title: "Réplique mobile d'Airbnb",
    featured: false,
    description:
      "Reproduction de l'interface mobile d'Airbnb, incluant la navigation entre écrans, l'affichage dynamique des offres, les détails de logement et une mise en page responsive. Un exercice personnel pour approfondir mes compétences en développement mobile avec React Native.",
    image: airbnb,
    technologies: ["React Native", "Expo"],
    githubLinks: {
      frontend: "https://github.com/votre-username/airbnb-replique",
    },
    isMobile: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <span className="projects__number">03.</span>
        <h2 className="projects__title">Quelques Projets Réalisés</h2>
      </div>

      <div className="projects__container">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className={`project ${project.featured ? "project--featured" : ""}`}
          >
            <div className="project__content">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>

              <ul className="project__technologies">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="project__technology">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project__links">
                {project.githubLinks && (
                  <>
                    <a
                      href={project.githubLinks.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__link"
                      title="Frontend Repository"
                    >
                      <FaGithub />
                      <span className="project__link-text">Frontend</span>
                    </a>
                    {project.githubLinks.backend && (
                      <a
                        href={project.githubLinks.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__link"
                        title="Backend Repository"
                      >
                        <FaGithub />
                        <span className="project__link-text">Backend</span>
                      </a>
                    )}
                  </>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>

            <div
              className={`project__image ${
                project.isMobile ? "project__image--mobile" : ""
              }`}
            >
              <img src={project.image} alt={project.title} />
            </div>
          </article>
        ))}
      </div>

      <div className="projects__footer">
        <a href="/archive" className="projects__archive-link">
          <span className="projects__archive-link__text">
            Voir tous les projets
          </span>
          <span className="projects__archive-link__arrow">
            <HiArrowRight size={20} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
