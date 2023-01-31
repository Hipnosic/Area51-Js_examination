import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Species = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((species) => {
                return <Card {...species} />
            })}
        </div>
    )
} 

export default Species;