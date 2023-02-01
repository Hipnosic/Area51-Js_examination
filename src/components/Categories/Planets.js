import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Planets = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((planet) => {
                return <Card {...planet} key={planet.name} />
            })}
        </div>
    )
} 

export default Planets;