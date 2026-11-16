const Membres = (props) => {
  return (
    <li className="membre-card">
      <a href={"/equipage/" + props.slug}>
        <img src={"/img" + props.image} alt={props.name} className="membre-photo" />
        <h3>{props.name}</h3>
        <h4>{props.role}</h4>
      </a>
    </li>
  );
};

export default Membres;