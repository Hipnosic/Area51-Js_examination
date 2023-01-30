import React, {useEffect, useState} from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const Card = ({name, homeworld, species, gender, height, mass, hair_color, skin_color, eye_color, birth_year}) => {
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function getData() {
        setLoading(true);
        const response = await fetch(homeworld)
        if (!response.ok) throw new Error(response.status)
        const data = await response.json();
        setData(data);
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
                        <ButtonToolbar>
                <Button class="btn btn-transparent" onClick={handleShow}>
                    <div className="people-info">
                        <div className="text-container">
                            <p>Full Name: {name}</p>
                        </div>
                    </div>
                </Button>
        </ButtonToolbar>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Homeworld: {data.name}</li>
                    <li>Species: {species}</li>
                    <li>Birth year: {birth_year}</li>
                    <li>Gender: {gender}</li>
                    <li>Height: {height}</li>
                    <li>Mass: {mass}</li>
                    <li>Hair Color: {hair_color}</li>
                    <li>Skin Color: {skin_color}</li>
                    <li>Eye Color: {eye_color}</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
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