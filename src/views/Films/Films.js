import "./films.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button } from "react-bootstrap";

const FilmDesc = ({data}) => {
    console.log(data);
    return (
        <div className="info-container">
        {data.results.map((film) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{film.title}</p>
                    <ul>
                        <li >Episode: {film.episode_id}</li>    
                        <li>Created: {film.release_date}</li>
                        <li>Director: {film.director}</li>
                        <li>Producer: {film.producer}</li>
                        <li className="opening">{film.opening_crawl}</li>
                    </ul>
                </Popover>
            )
            return (
                <>
                    <ButtonToolbar>
                        <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                            <Button className="btn btn-transparent">
                                <div className="planet-info">
                                    <div className="text-container">
                                        <p>Movie name: {film.title}</p>
                                        <p>Created: {film.release_date}</p>
                                    </div>
                                </div>
                            </Button>
                        </OverlayTrigger>
                    </ButtonToolbar>
                </>
            )
        })}
        </div>
    )
} 

export default FilmDesc;