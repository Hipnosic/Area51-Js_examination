import "./planets.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";

const Planets = ({data}) => {
    console.log(data);
    return (
        <div className="planet-container">
        {data.results.map((planet) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{planet.name}</p>
                    <ul>
                        <li>Population: {planet.population}</li>    
                        <li>Terrain: {planet.terrain}</li>
                        <li>climate: {planet.climate}</li>
                        <li>Diameter: {planet.diameter}</li>
                        <li>Gravity: {planet.gravity}</li>
                        <li>Rotational Period: {planet.rotation_period}</li>
                        <li>Orbital Period: {planet.orbital_period}</li>
                    </ul>
                </Popover>
            )
            return (
                <ButtonToolbar>
                    <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                        <Button>
                            <div className="planet-info">
                                <div className="text-container">
                                    <p>Movie name: {planet.name}</p>
                                    <p>Created: {planet.population}</p>
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

export default Planets;