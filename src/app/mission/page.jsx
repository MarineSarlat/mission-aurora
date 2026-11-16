import './mission.css';
import Objectifs from '../_components/Objectifs';

const MissionPage = () => {
  return (
    <main className="mission">
      <section className="mission-intro">
        <h2>Les quatre objectifs d'AURORA-12</h2>
      </section>

      <section className="objectifs-wrapper">
        <ol className="objectifs">
          <Objectifs
            titre="EXPLORER"
            no="01"
            description="Cartographier le secteur Ares-7 et identifier les zones présentant un intérêt scientifique."
          />
          <Objectifs
            titre="ANALYSER"
            no="02"
            description="Collecter des échantillons de sol, de glace et de roches afin de mieux comprendre l'histoire géologique de Mars."
          />
          <Objectifs
            titre="S'INSTALLER"
            no="03"
            description="Déployer les premiers modules de la base AURORA et tester leur capacité à fonctionner de façon autonome."
          />
          <Objectifs
            titre="PRÉPARER L'AVENIR"
            no="04"
            description="Déterminer si les conditions martiennes permettent d'envisager une présence humaine permanente."
          />
        </ol>

        <img
          src="/img/aurora_station.png"
          alt="Station Aurora installée sur Mars"
          className="objectifs-image"
        />
      </section>

      <section className="secteur">
        <h3>Secteur Ares-7</h3>
        <p>Une vaste région désertique composée de :</p>
        <ul>
          <li>Canyons</li>
          <li>Anciennes formations rocheuses</li>
          <li>Plaines poussiéreuses</li>
          <li>Tunnels de lave</li>
          <li>Anciennes traces d'eau</li>
        </ul>
        <p>
          Le site d'atterrissage a été choisi parce que les sondes précédentes
          ont détecté <b>des dépôts minéraux inhabituels</b> et des traces
          suggérant que de l'eau liquide aurait autrefois circulé dans cette
          région.
        </p>
      </section>

      <section className="cta-section">
        <a href="/equipage" className="cta">Présentation de l'équipe</a>
      </section>
    </main>
  );
};

export default MissionPage;