import React from "react";
import "./starship.scss";

const Starships = ({data}) => {
    console.log(data);
    return (
        <div className="starship-container">
        {data.results.map((starships) => {
            return (
                <div className="starships">
                    <p>Starship name: {starships.name}</p>
                    <p>Price: {starships.cost_in_credits}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default Starships;