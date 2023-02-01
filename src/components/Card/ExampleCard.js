import React, { useEffect, useState } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";

const ExampleCard = ({
}) => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
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
                  <p>{title}</p>
                </div>
              </Button>
            </ButtonToolbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal-header">
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                <ul>
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

export default ExampleCard;
