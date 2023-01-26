import React from "react";
import "./vehicles.scss";

const Vehicles = ({data}) => {
    console.log(data);
    return (
        <div className="vehicles-container">
        {data.results.map((vehicles) => {
            return (
                <div className="vehicles">
                    <p>Vehicle name: {vehicles.name}</p>
                    <p>Price: {vehicles.cost_in_credits}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default Vehicles;