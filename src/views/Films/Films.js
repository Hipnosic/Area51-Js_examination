// import React, { useState } from 'react';
import "./films.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button, Modal } from "react-bootstrap";

const FilmDesc = ({data}) => {
    console.log(data);
    return (
        <div className="info-container">
        {data.results.map((film) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{film.title}</p>
                    <ul>
                        <li>Episode: {film.episode_id}</li>    
                        <li>Created: {film.release_date}</li>
                        <li>Director: {film.director}</li>
                        <li>Producer: {film.producer}</li>
                        <li class="opening">{film.opening_crawl}</li>
                    </ul>
                </Popover>
            )
            return (
                <>
                    <ButtonToolbar>
                        <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                            <Button class="btn btn-transparent">
                                <div className="planet-info">
                                    <div className="text-container">
                                        <p>Movie name: {film.title}</p>
                                        <p>Created: {film.release_date}</p>
                                    </div>
                                </div>
                            </Button>
                        </OverlayTrigger>
                    </ButtonToolbar>
                </>
            )
        })}
        </div>
    )
} 

export default FilmDesc;




















// const FilmDesc = ({data}) => {
//     const [show, setShow] = useState(false)
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     console.log(data);
//     return (
//         <div className="info-container">
//         {data.results.map((film) => {
//             return (
//                 <>
//                     <Button  variant="primary" onClick={handleShow}>
//                         <div className="planet-info">
//                             <div className="text-container">
//                                 <p>Movie name: {film.title}</p>
//                                 <p>Created: {film.release_date}</p>
//                             </div>
//                         </div>
//                     </Button>
//                     <Modal show={show} onHide={handleClose} scrollable={true}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>{film.title}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>{film.release_date}</Modal.Body>
//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={handleClose}>
//                                 Close
//                             </Button>
//                             <Button variant="primary" onClick={handleClose}>
//                                 Save Changes
//                             </Button>
//                         </Modal.Footer>
//                     </Modal>
//                 </>
//             )
//         })}
//         </div>
//     )
// }