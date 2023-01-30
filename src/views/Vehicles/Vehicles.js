import "./vehicles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";

const Vehicles = ({data}) => {
    console.log(data);
    return (
        <div className="vehicles-container">
        {data.results.map((vehicles) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{vehicles.name}</p>
                    <ul>
                        <li>Model: {vehicles.model}</li>
                        <li>Price: {vehicles.cost_in_credits}</li>    
                        <li>Manufacturer: {vehicles.manufacturer}</li>    
                        <li>Length: {vehicles.length}</li>
                        <li>Max Speed: {vehicles.max_atmosphering_speed}</li>
                        <li>Crew: {vehicles.crew}</li>
                        <li>Passengers: {vehicles.passengers}</li>
                        <li>Cargo Capacity: {vehicles.cargo_capacity}</li>

                    </ul>
                </Popover>
            )
            return (
                <ButtonToolbar>
                    <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                        <Button className="btn btn-transparent">
                            <div className="vehicles-info">
                                <div className="text-container">
                                    <p>Vehicles name: {vehicles.name}</p>
                                    <p>Price: {vehicles.cost_in_credits}</p>
                                </div>
                            </div>
                        </Button>
                    </OverlayTrigger>
                </ButtonToolbar>
            )
        })}
        </div>
    )
} 

export default Vehicles;