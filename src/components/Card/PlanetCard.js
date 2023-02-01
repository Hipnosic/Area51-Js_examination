import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const PlanetCard = ({
    //Planet Parameters:
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    residents,

    films
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataResidents, setDataResidents] = useState([]);
    const [ResidentsLoading, setResidentsLoading] = useState(false);

    const [dataFilms, setDataFilms] = useState([]);
    const [filmsLoading, setFilmsLoading] = useState(false);

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
        getResidents();
        getFilms();
      }, []);

    return (
        <>
        {!ResidentsLoading && (
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
            {rotation_period && <li>rotation_period: {rotation_period}</li>}
            {orbital_period && <li>orbital_period: {orbital_period}</li>}
            {diameter && <li>diameter: {diameter}</li>}
            {climate && <li>climate: {climate}</li>}
            {gravity && <li>gravity: {gravity}</li>}
            {terrain && <li>terrain: {terrain}</li>}
            {surface_water && <li>surface_water: {surface_water}</li>}
            {population && <li>population: {population}</li>}
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
          {ResidentsLoading && filmsLoading &&<p>laddar kort..</p>}
      </> 
    );
};
export default PlanetCard;