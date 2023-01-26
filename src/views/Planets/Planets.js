import React from "react";
import "./planets.scss";

const Films = ({data}) => {
    console.log(data);
    return (
        <div className="planet-container">
        {data.results.map((planet) => {
            return (
                <div className="planets">
                    <p>Planet name: {planet.name}</p>
                    <p>Population: {planet.population}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default Films;