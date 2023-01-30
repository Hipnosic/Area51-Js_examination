import React, { useEffect, useState } from "react";
import "./people.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "../../components/Card/Card";
// function getHomeworld(world) {
//     fetch(world)
//     .then(res => {
//        return res.json();
//     })
// }

const People = ({data}) => {
    return (
        <div className="people-container">
        {data.results.map((people) => {
            return <Card {...people} />
        })}
        </div>
    )
} 

export default People;


// function getHomeworld(world) {
//     fetch(world)
//     .then(response => response.json())
//     .then(json => {
//         json.results.map((homeworld) => {
//             return homeworld.name
//         })
//     })
// }