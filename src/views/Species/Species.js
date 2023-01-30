import "./species.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";

const Species = ({data}) => {
    console.log(data);
    return (
        <div className="species-container">
        {data.results.map((species) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{species.name}</p>
                    <ul>
                        <li>classification: {species.classification}</li>    
                    </ul>
                </Popover>
            )
            return (
                <ButtonToolbar>
                    <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                        <Button>
                            <div className="species-info">
                                <div className="text-container">
                                    <p>Species name: {species.name}</p>
                                    <p>homeworld: {species.homeworld}</p>
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

export default Species;