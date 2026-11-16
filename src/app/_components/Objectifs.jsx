const Objectifs = (props) => {
    console.log(props.titre);
    return (
        <li>
            <h3><i>{props.no} - {props.titre}</i></h3>
            <p>{props.description}</p>
        </li>
    )
};

export default Objectifs;