import React, { useState } from 'react';
import "./species.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Popover, OverlayTrigger, ButtonToolbar, Button, Modal } from "react-bootstrap";

const Species = ({data}) => {
    console.log(data);
    return (
        <div className="species-container">
        {data.results.map((species) => {
            const popoverRight = (
                <Popover id="popover" title="Popover right">
                    <p>{species.name}</p>
                    <ul>
                        <li>classification: {species.classification}</li>    
                    </ul>
                </Popover>
            )
            return (
                <ButtonToolbar>
                    <OverlayTrigger trigger="focus" placement="top" overlay={popoverRight}>
                        <Button class="btn btn-transparent">
                            <div className="species-info">
                                <div className="text-container">
                                    <p>Species name: {species.name}</p>
                                    <p>homeworld: {species.homeworld}</p>
                                </div>
                            </div>
                        </Button>
                    </OverlayTrigger>
                </ButtonToolbar>
            )
        })}
        </div>
    )
} 

export default Species;





















// const Species = ({data}) => {
//     const [show, setShow] = useState(false)
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     console.log(data);
//     return (
//         <div className="species-container">
//         {data.results.map((species) => {
//             return (
//                 <>
//                     <Button variant="primary" onClick={handleShow}>
//                         <div className="species-info">
//                             <div className="text-container">
//                                 <p>Species name: {species.name}</p>
//                                 <p>homeworld: {species.homeworld}</p>
//                             </div>
//                         </div>
//                     </Button>
//                     <Modal show={show} onHide={handleClose} scrollable={true}>
//                         <Modal.Header closeButton>
//                             <Modal.Title>{species.name}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>{species.classification}</Modal.Body>
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