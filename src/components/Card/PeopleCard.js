import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const PeopleCard = ({
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataHomeworld, setDataHomeworld] = useState("Unknown");
    const [homeworldLoading, setHomeworldLoading] = useState(false);

    const [dataFilms, setDataFilms] = useState([]);
    const [filmsLoading, setFilmsLoading] = useState(false);

   
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

    return (
        <>
        {!homeworldLoading &&(
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
                    {height && <li>Height: {height}</li>}
                    {mass && <li>Mass: {mass}</li>}
                    {hair_color && <li>Hair Color: {hair_color}</li>}
                    {skin_color && <li>Skin Color: {skin_color}</li>}
                    {eye_color && <li>Eye Color: {eye_color}</li>}
                    {birth_year && <li>birth_year: {birth_year}</li>}
                    {gender && <li>gender: {gender}</li>}
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
          {filmsLoading && <p className="loading">laddar kort..</p>}
      </>
    );


};

export default PeopleCard;
