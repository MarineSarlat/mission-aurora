import crew from "@/app/data/crew";
import Bio from "@/app/_components/Bio";
 
const MiloPage = () => {
    const info = crew[11];
    return (
        <Bio role={info.role}
        id={info.id}
        slug={info.slug}
        name={info.name}
        species={info.species}
        specialty={info.specialty}
        experience={info.experience}
        missions={info.missions}
        origin={info.origin}
        personality={info.personality}
        description={info.description}
        particularity={info.particularity}
        image={info.image}
        />
       
    );
};
 
export default MiloPage;