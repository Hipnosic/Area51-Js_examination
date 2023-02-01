import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const SpeciesCard = ({
    name,
    films,
    people,
    classification,
    designation,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    homeworld,
    language
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataFilms, setDataFilms] = useState([]);
    const [filmsLoading, setFilmsLoading] = useState(false);

    const [dataPeople, setDataPeople] = useState([]);
    const [peopleLoading, setPeopleLoading] = useState(false);

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

    async function getPeople() {
      console.log("people films: ");
      if (people) {
        setPeopleLoading(true);
        Promise.all(people.map((u) => fetch(u)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            setDataPeople(data);
            console.log("people data: ", data);
          });
        setPeopleLoading(false);
      }
    }


    useEffect(() => {
      getFilms();
      getPeople();
      }, []);

    return (
        <>
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
                {dataPeople && (
                  <li>
                    Films:
                    <ul>
                      {dataPeople.map((people) => {
                        return <li key={people.name}>{people.name}</li>;
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
      </>
    );


};

export default SpeciesCard;
