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

    const [dataPlanets, setDataPlanets] = useState([]);
    const [planetsLoading, setPlanetsLoading] = useState(false);
  
    const [dataStarships, setDataStarships] = useState([]);
    const [starshipsLoading, setStarshipsLoading] = useState(false);

    const [dataSpecies, setDataSpecies] = useState([]);
    const [speciesLoading, setSpeciesLoading] = useState(false);

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

    async function getPlanets() {
        console.log("get planets: ");
        if (planets) {
            setPlanetsLoading(true);
            Promise.all(planets.map((u) => fetch(u)))
            .then((responses) => Promise.all(responses.map((res) => res.json())))
            .then((data) => {
                setDataPlanets(data);
                console.log("planet data: ", data);
            });
            setPlanetsLoading(false);
        }
        }

        async function getStarships() {
        console.log("get starships: ");
        if (starships) {
            setStarshipsLoading(true);
            Promise.all(starships.map((u) => fetch(u)))
            .then((responses) => Promise.all(responses.map((res) => res.json())))
            .then((data) => {
                setDataStarships(data);
                console.log("starship data: ", data);
            });
            setStarshipsLoading(false);
        }
        }

        async function getSpecies() {
        console.log("get species: ");
        if (species) {
            setSpeciesLoading(true);
            Promise.all(species.map((u) => fetch(u)))
            .then((responses) => Promise.all(responses.map((res) => res.json())))
            .then((data) => {
                setDataSpecies(data);
                console.log("species data: ", data);
            });
            setSpeciesLoading(false);
        }
        }

    useEffect(() => {
        getCharacters();
        getPlanets();
        getStarships();
        getSpecies();
      }, []);

    return (
        <>
        {!charactersLoading &&(
          <>
            <ButtonToolbar className="card">
              <Button
                className="btn bg-transparent border-0"
                onClick={handleShow}
              >
                <div className="text-container">
                  <p>{title}</p>
                </div>
              </Button>
            </ButtonToolbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                <ul>
                    {episode_id && <li>episode id: {episode_id}</li>}
                    {release_date && <li>release date: {release_date}</li>}
                    {director && <li>director: {director}</li>}
                    {producer && <li>producer: {producer}</li>}
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
                    {dataPlanets && (
                        <li>
                        Planets:
                        <ul>
                            {dataPlanets.map((planet) => {
                            return <li key={planet.name}>{planet.name}</li>;
                            })}
                        </ul>
                        </li>
                    )}  
                    {dataStarships && (
                        <li>
                        Starships:
                        <ul>
                            {dataStarships.map((starship) => {
                            return <li key={starship.name}>{starship.name}</li>;
                            })}
                        </ul>
                        </li>
                    )}
                    {dataSpecies && (
                        <li>
                        Species:
                        <ul>
                            {dataSpecies.map((species) => {
                            return <li key={species.name}>{species.name}</li>;
                            })}
                        </ul>
                        </li>
                    )}
                    {opening_crawl && <li>opening: {opening_crawl}</li>}
                </ul>
              </Modal.Body>
              <Modal.Footer className="modal-footer">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
        {charactersLoading && <p className="loading">laddar kort..</p>}
      </>
    );


};

export default FilmCard;
