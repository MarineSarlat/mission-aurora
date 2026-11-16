import './page.css';

const AccueilPage = () => {
  return (
    <main className="accueil">
      <section className="hero">
        <div className="hero-text">
          <h1>AURORA-12</h1>
          <h2>Mission d'exploration et d'installation martienne</h2>
        </div>

        <div className="hero-visual">
          <img src="/img/mars.png" alt="Planète Mars" className="hero-mars" />
        </div>
      </section>

      <section className="contexte">
        <h3>Contexte de la mission</h3>
        <p>
          En 2047, la Terre lance AURORA-12, la première mission habitée
          destinée à établir une présence permanente sur Mars.
        </p>
        <p>
          Cinq explorateurs sont envoyés sur la planète rouge avec une mission
          qui doit durer 18 mois. Leur objectif : explorer le territoire,
          étudier son environnement, installer une base autonome et déterminer
          si Mars peut un jour accueillir une colonie permanente.
        </p>
        <p>
          À plus de 200 millions de kilomètres de la Terre, l'équipage devra
          fonctionner presque entièrement de façon autonome. Chaque membre
          possède une spécialité essentielle à la survie de la mission.
        </p>
      </section>

      <section className="en-bref">
        <h3>En bref</h3>
        <ul>
          <li>5 membres d'équipage</li>
          <li>Départ le 28 août 2047</li>
          <li>Durée de 18 mois</li>
          <li>Construction de la base Station Aurora</li>
          <li>Premier déploiement de la navette Horizon</li>
        </ul>
      </section>

      <section className="cta-section">
        <a href="/mission" className="cta">Détails de la mission</a>
      </section>
    </main>
  );
};

export default AccueilPage;