import React from "react";
import "./people.scss";

const People = ({data}) => {
    console.log(data);
    return (
        <div className="people-container">
        {data.results.map((people) => {
            return (
                <div className="people">
                    <p>Full name: {people.name}</p>
                    <p>Created: {people.homeworld}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default People;