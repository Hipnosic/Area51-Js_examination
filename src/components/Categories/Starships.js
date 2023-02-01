import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Starships = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((starship) => {
                return <Card {...starship} key={starship.name} />
            })}
        </div>
    )
} 

export default Starships;