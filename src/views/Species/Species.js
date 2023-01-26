import React from "react";
import "./species.scss";

const Species = ({data}) => {
    console.log(data);
    return (
        <div className="species-container">
        {data.results.map((species) => {
            return (
                <div className="species">
                    <p>Movie name: {species.name}</p>
                    <p>Created: {species.homeworld}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default Species;