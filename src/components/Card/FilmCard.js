import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const FilmCard = ({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataCharacters, setDataCharacters] = useState([]);
    const [charactersLoading, setCharactersLoading] = useState(false);

    async function getCharacters() {
        console.log("get characters: ");
        if (characters) {
            setCharactersLoading(true);
            Promise.all(characters.map((u) => fetch(u)))
                .then((responses) => Promise.all(responses.map((res) => res.json())))
                .then((data) => {
                setDataCharacters(data);
                console.log("character data: ", data);
                });
            setCharactersLoading(false);
        }
    }

    useEffect(() => {
        getCharacters();
      }, []);

    return (
        <ul>
            {dataCharacters && (
                <li>
                Characters:
                <ul>
                    {dataCharacters.map((character) => {
                    return <li key={character.name}>{character.name}</li>;
                    })}
                </ul>
                </li>
            )}
            {episode_id && <li>Episode id: {episode_id}</li>}
            {opening_crawl && <li>Opening: {opening_crawl}</li>}
            {director && <li>Director: {director}</li>}
            {producer && <li>Producer: {producer}</li>}
            {release_date && <li>release_date: {release_date}</li>}
        </ul>
    );


};

export default FilmCard;
