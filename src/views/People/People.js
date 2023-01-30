import "./people.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";

const People = ({data}) => {
    console.log(data);
    return (
        <div className="people-container">
        {data.results.map((people) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{people.name}</p>
                    <ul>
                        <li>Homeworld: {people.homeworld}</li>
                        <li>Species: {people.species}</li>
                        <li>Birth year: {people.birth_year}</li>
                        <li>Gender: {people.gender}</li>
                        <li>Height: {people.height}</li>
                        <li>Mass: {people.mass}</li>
                        <li>Hair Color: {people.hair_color}</li>
                        <li>Skin Color: {people.skin_color}</li>
                        <li>Eye Color: {people.eye_color}</li>
                    </ul>
                </Popover>
            )
            return (
                <ButtonToolbar>
                    <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                        <Button class="btn btn-transparent">
                            <div className="people-info">
                                <div className="text-container">
                                    <p>people name: {people.name}</p>
                                    <p>Price: {people.homeworld}</p>
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

export default People;