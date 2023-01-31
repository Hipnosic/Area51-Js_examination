import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const People = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((people) => {
                return <Card {...people} />
            })}
        </div>
    )
} 

export default People;