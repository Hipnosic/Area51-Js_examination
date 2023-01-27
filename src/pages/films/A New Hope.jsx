import React from 'react';
import ".films.scss"

const ANewHope = ({data}) => {
    console.log(data);
    return (
        <div className="films-container">
        {data.results.map((film) => {
            return (
                <div className="film">
                    <p>Movie name: {film.title}</p>
                    <p>Created: {film.created}</p>
                </div>
            )
        })}
        </div>
    )
} 

export default ANewHope;