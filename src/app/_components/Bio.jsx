import './bio.css';

const Bio = (props) => {
  return (
    <div className="bio">
      <img src={"/img" + props.image} alt={props.name} className="bio-photo" />

      <div className="bio-content">
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
        <h4 className="bio-species">{props.species}</h4>

        <p><b>Spécialité :</b> {props.specialty}</p>
        <p><b>Expérience :</b> {props.experience} ans</p>
        <p><b>Missions :</b> {props.missions}</p>
        <p><b>Origine :</b> {props.origin}</p>
        <p><b>Personnalité :</b> {props.personality}</p>
        <p>{props.description}</p>
        <p>{props.particularity}</p>

        <a href="/equipage" className="cta">← Retour à l'équipage</a>
      </div>
    </div>
  );
};

export default Bio;