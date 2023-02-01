import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PlanetCard from "../Card/PlanetCard";

const Planets = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((planet) => {
                return <PlanetCard {...planet} key={planet.name} />
            })}
        </div>
    )
} 

export default Planets;