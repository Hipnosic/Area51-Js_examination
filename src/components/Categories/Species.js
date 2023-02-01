import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SpeciesCard from "../Card/SpeciesCard";

const Species = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((species) => {
                return <SpeciesCard {...species} key={species.name}/>
            })}
        </div>
    )
} 

export default Species;