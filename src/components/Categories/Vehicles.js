import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Vehicles = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((vehicle) => {
                return <Card {...vehicle} />
            })}
        </div>
    )
} 

export default Vehicles;