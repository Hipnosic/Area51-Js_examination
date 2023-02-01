import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Films = ({data}) => {
    return (
        <div className="card-container">
            {data.results.map((film) => {
                return <Card {...film} key={film.title}/>
            })}
        </div>
    )
} 

export default Films;