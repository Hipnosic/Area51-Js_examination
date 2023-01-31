import React, {useEffect, useState} from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const SpeciesCard = ({name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people}) => {
    
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
                    <li>classification: {classification}</li>
                    <li>designation: {designation}</li>
                    <li>average lifespan: {average_lifespan}</li>
                    <li>language: {language}</li>
                    <li>average height: {average_height}</li>
                    <li>Hair Color: {hair_colors}</li>
                    <li>Skin Color: {skin_colors}</li>
                    <li>Eye Color: {eye_colors}</li>
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
export default SpeciesCard;