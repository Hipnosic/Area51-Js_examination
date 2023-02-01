import "./cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../Card/Card";

const Species = ({ data }) => {
  return (
    <div className="card-container">
      {data.results.map((specie) => {
        return <Card {...specie} key={specie.name} />;
      })}
    </div>
  );
};

export default Species;
