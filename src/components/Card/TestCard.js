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

  homeworld,
  people,
  films,
}) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const [dataHomeworld, setDataHomeworld] = useState("Unknown");
  const [homeworldLoading, setHomeworldLoading] = useState(false);

  const [dataFilms, setDataFilms] = useState([]);
  const [filmsLoading, setFilmsLoading] = useState(false);

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

  useEffect(() => {
    getHomeworld();
    getFilms();
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
                {species && <li>Species: {species}</li>}
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
      {homeworldLoading && filmsLoading && <p>laddar kort..</p>}
    </>
  );
};

export default Card;
