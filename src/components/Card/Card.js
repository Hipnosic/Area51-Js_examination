import React, {useEffect, useState} from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const Card = ({name, homeworld, species, gender, height, mass, hair_color, skin_color, eye_color, birth_year, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, language, people, films}) => {
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [urls, setUrls] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function getData() {
        setLoading(true);
        const response = await fetch(homeworld)
        if (!response.ok) throw new Error(response.status)
        const data = await response.json();
        setData(data);
        console.log(urls);
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {!loading && (
                <>
                        <ButtonToolbar className="card">
                            <Button className="btn bg-transparent border-0" onClick={handleShow}>
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
                                    {data.name && <li>Homeworld: {data.name}</li>}
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
                                    {average_lifespan && <li>average lifespan: {average_lifespan}</li>}
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
            {loading && (
                <p>laddar kort..</p>
            )}
        </>
        
    )
}

export default Card;

