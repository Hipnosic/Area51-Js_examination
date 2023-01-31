import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Planets = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((planets) => {
                return <Card {...planets} />
            })}
        </div>
    )
} 

export default Planets;