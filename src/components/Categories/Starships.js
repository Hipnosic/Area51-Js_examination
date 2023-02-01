import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import StarshipCard from "../Card/StarshipCard";

const Starships = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((starship) => {
                return <StarshipCard {...starship} key={starship.name}/>
            })}
        </div>
    )
} 

export default Starships;