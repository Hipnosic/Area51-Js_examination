import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const Card = ({
  name,
  species,
  gender,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  classification,
  designation,
  average_height,
  skin_colors,
  hair_colors,
  eye_colors,
  average_lifespan,
  language,
  rotation_period,
  orbital_period,
  diameter,
  climate,
  gravity,
  terrain,
  surface_water,
  population,
  residents,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  MGLT,
  starship_class,
  pilots,

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

  homeworld,
  people,
  films,
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([])

  const [dataResidents, setDataResidents] = useState([]);
  const [ResidentsLoading, setResidentsLoading] = useState(false);

  const [dataPilots, setDataPilots] = useState([]);
  const [PilotsLoading, setPilotsLoading] = useState(false);

  const [dataHomeworld, setDataHomeworld] = useState("Unknown");
  const [homeworldLoading, setHomeworldLoading] = useState(false);

  const [dataFilms, setDataFilms] = useState([]);
  const [filmsLoading, setFilmsLoading] = useState(false);

  const [dataSpecies, setDataSpecies] = useState([]);
  const [speciesLoading, setSpeciesLoading] = useState(false);

  const [dataCharacters, setDataCharacters] = useState([]);
  const [charactersLoading, setCharactersLoading] = useState(false);

  const [dataPlanets, setDataPlanets] = useState([]);
  const [planetsLoading, setPlanetsLoading] = useState(false);

  const [dataStarships, setDataStarships] = useState([]);
  const [starshipsLoading, setStarshipsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function getHomeworld() {
    console.log("get homeworld: ");
    if (homeworld) {
      setHomeworldLoading(true);
      const response = await fetch(homeworld);
      if (!response.ok) throw new Error(response.status);
      const data = await response.json();
      setDataHomeworld(data.name);
      setHomeworldLoading(false);
      console.log("homeworld data: ", data);
    }
  }


  async function getFilms() {
    console.log("get films: ");
    if (films) {
      setFilmsLoading(true);
      Promise.all(films.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setDataFilms(data);
          console.log("films data: ", data);
        });
      setFilmsLoading(false);
    }
  }
   
  async function getResidents() {
    console.log("get residents: ");
    if (residents) {
      setResidentsLoading(true);
      Promise.all(residents.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setDataResidents(data);
          console.log("residents data: ", data);
        });
      setResidentsLoading(false);
    }
  }

  async function getPilots() {
    console.log("get pilots: ");
    if (pilots) {
      setPilotsLoading(true);
      Promise.all(pilots.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((data) => {
          setDataPilots(data);
          console.log("pilots data: ", data);
        });
      setPilotsLoading(false);
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

  useEffect(() => {
    getHomeworld();
    getFilms();
    getResidents();
    getPilots();
    getSpecies();
    getCharacters();
    getPlanets();
    getStarships();
  }, []);

  //   async function getData() {
  //     if (homeworld) {
  //       setLoading(true);
  //       const response = await fetch(homeworld);
  //       if (!response.ok) throw new Error(response.status);
  //       const data = await response.json();
  //       setData(data);
  //       console.log("homeworld: ", data);
  //       setLoading(false);
  //     } else {
  //       setData({ name: "unknown" });
  //     }
  //   }

  //   async function getAllData() {
  //     setLoading(true);
  //     const requests = urls.map((url) => fetch(url).then((res) => res.json()));
  //     Promise.all(requests).then((members) => console.log(members));
  //     setLoading(false);
  //   }

  //   const initUrls = () => {
  //     console.log("urls");
  //     if (homeworld) {
  //       setUrls((urls) => [...urls, homeworld]);
  //     }
  //     if (films) {
  //       films.forEach((film) => {
  //         setUrls((urls) => [...urls, film]);
  //       });
  //     }
  //     setUrlsReady(true);
  //   };

  //   useEffect(() => {
  //     getAllData();
  //   }, [urlsReady]);

  //   useEffect(() => {
  //     initUrls();
  //   }, []);

  return (
    <>
      {!homeworldLoading && !filmsLoading && (
        <>
          <ButtonToolbar className="card">
            <Button
              className="btn bg-transparent border-0"
              onClick={handleShow}
            >
              <div className="text-container">
                <p>{name}</p>
              </div>
            </Button>
          </ButtonToolbar>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header">
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <ul>
                {dataHomeworld && <li>Homeworld: {dataHomeworld}</li>}
                {dataFilms && (
                  <li>
                    Films:
                    <ul>
                      {dataFilms.map((film) => {
                        return <li key={film.title}>{film.title}</li>;
                      })}
                    </ul>
                  </li>
                )}
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
                {dataResidents && (
                  <li>
                    Residents:
                    <ul>
                      {dataResidents.map((residents) => {
                        return <li key={residents.name}>{residents.name}</li>;
                      })}
                    </ul>
                  </li>
                )}
                {dataPilots && (
                  <li>
                    Pilots:
                    <ul>
                      {dataPilots.map((pilots) => {
                        return <li key={pilots.name}>{pilots.name}</li>;
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
                {birth_year && <li>Birth year: {birth_year}</li>}
                {gender && <li>Gender: {gender}</li>}
                {height && <li>Height: {height}</li>}
                {mass && <li>Mass: {mass}</li>}
                {hair_color && <li>Hair Color: {hair_color}</li>}
                {skin_color && <li>Skin Color: {skin_color}</li>}
                {eye_color && <li>Eye Color: {eye_color}</li>}
                {classification && <li>classification: {classification}</li>}
                {designation && <li>designation: {designation}</li>}
                {average_height && <li>average height: {average_height}</li>}
                {skin_colors && <li>skin colors: {skin_colors}</li>}
                {hair_colors && <li>hair colors: {hair_colors}</li>}
                {eye_colors && <li>eye colors: {eye_colors}</li>}
                {average_lifespan && (
                  <li>average lifespan: {average_lifespan}</li>
                )}
                {language && <li>language: {language}</li>}

                {name && <li>Name: {name}</li>}
                {rotation_period && <li>rotation_period: {rotation_period}</li>}
                {orbital_period && <li>orbital_period: {orbital_period}</li>}
                {diameter && <li>diameter: {diameter}</li>}
                {climate && <li>climate: {climate}</li>}
                {gravity && <li>gravity: {gravity}</li>}
                {terrain && <li>terrain: {terrain}</li>}
                {surface_water && <li>surface_water: {surface_water}</li>}
                {population && <li>population: {population}</li>}

                {model && <li>model: {model}</li>}
                {manufacturer && <li>manufacturer: {manufacturer}</li>}
                {cost_in_credits && <li>cost_in_credits: {cost_in_credits}</li>}
                {length && <li>length: {length}</li>}
                {max_atmosphering_speed && <li>max_atmosphering_speed: {max_atmosphering_speed}</li>}
                {crew && <li>crew: {crew}</li>}
                {passengers && <li>passengers: {passengers}</li>}
                {cargo_capacity && <li>cargo_capacity: {cargo_capacity}</li>}
                {consumables && <li>consumables: {consumables}</li>}
                {hyperdrive_rating && <li>hyperdrive_rating: {hyperdrive_rating}</li>}
                {MGLT && <li>MGLT: {MGLT}</li>}
                {starship_class && <li>starship_class: {starship_class}</li>}
                
                {episode_id && <li>Episode id: {episode_id}</li>}
                {opening_crawl && <li>Opening: {opening_crawl}</li>}
                {director && <li>Director: {director}</li>}
                {producer && <li>Producer: {producer}</li>}
                {release_date && <li>{release_date}</li>}

                
                

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
      {homeworldLoading && filmsLoading && ResidentsLoading && PilotsLoading &&<p>laddar kort..</p>}
    </>
  );
};

export default Card;
