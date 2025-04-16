import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import "./Archive.css";

const archiveData = [
  {
    year: "2024",
    title: "Marvel Comics",
    madeAt: "Formation Le Reacteur",
    builtWith: ["React.js", "Node.js", "Express", "MongoDB", "Axios"],
    links: {
      github: {
        frontend: "https://github.com/votre-username/marvel-frontend",
        backend: "https://github.com/votre-username/marvel-backend",
      },
      external: "https://replique-marvel-cedrinemilesi.netlify.app/",
    },
  },
  {
    year: "2024",
    title: "GiftSquad",
    madeAt: "Formation Le Reacteur",
    builtWith: ["React Native", "Node.js", "Express", "MongoDB", "Expo"],
    links: {
      github: {
        frontend: "https://github.com/votre-username/giftsquad-frontend",
        backend: "https://github.com/votre-username/giftsquad-backend",
      },
    },
  },
  {
    year: "2024",
    title: "Réplique mobile d'Airbnb",
    madeAt: "Formation Le Reacteur",
    builtWith: ["React Native", "Expo"],
    links: {
      github: {
        frontend: "https://github.com/votre-username/airbnb-replique",
      },
    },
  },
];

const Archive = () => {
  return (
    <main className="main__archive">
      <section className="archive">
        <div className="archive__header">
          <Link to="/" className="archive-link">
            <span className="archive-link__arrow">
              <HiArrowLeft size={20} />
            </span>
            <span className="archive-link__text">Cédrine MILESI</span>
          </Link>
          <h1 className="archive__title">Tous les Projets</h1>
        </div>

        <table className="archive__table">
          <thead>
            <tr>
              <th>Année</th>
              <th>Projet</th>
              <th>Réalisé à</th>
              <th>Technologies</th>
              <th>Liens</th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((project, index) => (
              <tr key={index}>
                <td className="archive__year">{project.year}</td>
                <td className="archive__title-cell">{project.title}</td>
                <td className="archive__made-at">{project.madeAt}</td>
                <td className="archive__built-with">
                  {project.builtWith.join(" · ")}
                </td>
                <td className="archive__links">
                  {project.links.github && (
                    <>
                      {project.links.github.frontend && (
                        <a
                          href={project.links.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive__link"
                          title="Frontend Repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.links.github.backend && (
                        <a
                          href={project.links.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="archive__link"
                          title="Backend Repository"
                        >
                          <FaGithub />
                        </a>
                      )}
                    </>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive__link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Archive;
