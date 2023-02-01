import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import VehicleCard from "../Card/VehicleCard";

const Vehicles = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((vehicle) => {
                return <VehicleCard {...vehicle} key={vehicle.name}/>
            })}
        </div>
    )
} 

export default Vehicles;