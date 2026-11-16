import Membres from '../_components/Membres';
import crew from "../data/crew";
import './equipage.css';

const Equipage = () => {
  return (
    <main className="equipage">
      <h3>Membres de l'équipage</h3>

      <ul className="equipage-grid">
        <Membres id={crew[0].id} name={crew[0].name} image={crew[0].image} role={crew[0].role} slug={crew[0].slug}/>
        <Membres id={crew[1].id} name={crew[1].name} image={crew[1].image} role={crew[1].role} slug={crew[1].slug}/>
        <Membres id={crew[2].id} name={crew[2].name} image={crew[2].image} role={crew[2].role} slug={crew[2].slug}/>
        <Membres id={crew[3].id} name={crew[3].name} image={crew[3].image} role={crew[3].role} slug={crew[3].slug}/>
        <Membres id={crew[4].id} name={crew[4].name} image={crew[4].image} role={crew[4].role} slug={crew[4].slug}/>
        <Membres id={crew[5].id} name={crew[5].name} image={crew[5].image} role={crew[5].role} slug={crew[5].slug}/>
        <Membres id={crew[6].id} name={crew[6].name} image={crew[6].image} role={crew[6].role} slug={crew[6].slug}/>
        <Membres id={crew[7].id} name={crew[7].name} image={crew[7].image} role={crew[7].role} slug={crew[7].slug}/>
        <Membres id={crew[8].id} name={crew[8].name} image={crew[8].image} role={crew[8].role} slug={crew[8].slug}/>
        <Membres id={crew[9].id} name={crew[9].name} image={crew[9].image} role={crew[9].role} slug={crew[9].slug}/>
        <Membres id={crew[10].id} name={crew[10].name} image={crew[10].image} role={crew[10].role} slug={crew[10].slug}/>
        <Membres id={crew[11].id} name={crew[11].name} image={crew[11].image} role={crew[11].role} slug={crew[11].slug}/>
      </ul>
    </main>
  );
};

export default Equipage;