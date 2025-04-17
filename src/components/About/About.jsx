import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <span className="about__number">01.</span>
        <h2 className="about__title">À Propos</h2>
      </div>
      <div className="about__content">
        <p>
          Développeuse en reconversion, j'ai découvert dans le code un espace où
          je peux exprimer ma créativité autant que ma logique. Après une
          formation intensive en Conception et Développement d'Applications, je
          cherche aujourd'hui une alternance qui me permettra de continuer à
          progresser tout en contribuant à des projets concrets.
        </p>
        <p>
          Avant cette reconversion, j’ai obtenu un master en biologie et
          travaillé pendant 5 ans dans la recherche scientifique. Cette
          expérience m’a appris la rigueur, l’analyse et le travail d’équipe —
          des qualités que j’applique aujourd’hui dans le développement web.
        </p>
        <p>
          Curieuse et investie, j'aime comprendre ce que je fais en profondeur
          et apprendre de nouvelles technos dès que j'en ai l'occasion. J'ai un
          vrai plaisir à travailler en équipe, à trouver des solutions ensemble
          et à partager les avancées.
        </p>
        <p>
          En dehors du dev, je suis passionnée par les jeux vidéo, le dessin et
          la peinture sur figurine. Ces loisirs nourrissent mon sens du détail,
          ma créativité… et ma patience.
        </p>
      </div>
    </section>
  );
};

export default About;
