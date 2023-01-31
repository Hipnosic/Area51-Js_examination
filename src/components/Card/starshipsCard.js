import React, {useEffect, useState} from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const StarshipsCard = ({name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, pilots, films}) => {
    
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function getData() {
        setLoading(true);
        console.log(films.children);
        const response = await fetch(films.children)
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
                    <li>name: {data.name}</li>
                    <li>model: {model}</li>
                    <li>manufacturer: {manufacturer}</li>
                    <li>cost in credits: {cost_in_credits}</li>
                    <li>length: {length}</li>
                    <li>max_atmosphering_speed: {max_atmosphering_speed}</li>
                    <li>crew: {crew}</li>
                    <li>passengers: {passengers}</li>
                    <li>consumables: {consumables}</li>
                    <li>hyperdrive_rating: {hyperdrive_rating}</li>
                    <li>MGLT: {MGLT}</li>
                    <li>starship_class: {starship_class}</li>
                    <li>pilots: {pilots}</li>
                    <li>films: {films}</li>
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

export default StarshipsCard;