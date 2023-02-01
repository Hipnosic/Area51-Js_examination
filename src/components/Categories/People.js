import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PeopleCard from "../Card/PeopleCard";

const People = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((people) => {
                return <PeopleCard {...people} />
            })}
        </div>
    )
} 

export default People;