import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const VehicleCard = ({
    name,
    films,
    pilots,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    starship_class,
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataFilms, setDataFilms] = useState([]);
    const [filmsLoading, setFilmsLoading] = useState(false);

    const [dataPilots, setDataPilots] = useState([]);
    const [PilotsLoading, setPilotsLoading] = useState(false);

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

    useEffect(() => {
      getFilms();
      getPilots();
      }, []);

    return (
        <>
        {!filmsLoading &&(
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
                {model && <li>model: {model}</li>}
                {starship_class && <li>class: {starship_class}</li>}
                {manufacturer && <li>manufacturer: {manufacturer}</li>}
                {cost_in_credits && <li>price: {cost_in_credits}</li>}
                {length && <li>length: {length}</li>}
                {max_atmosphering_speed && <li>max speed: {max_atmosphering_speed}</li>}
                {crew && <li>crew capacity: {crew}</li>}
                {passengers && <li>passenger capacity: {passengers}</li>}
                {cargo_capacity && <li>cargo capacity: {cargo_capacity}</li>}
                {consumables && <li>consumables: {consumables}</li>}
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

export default VehicleCard;
