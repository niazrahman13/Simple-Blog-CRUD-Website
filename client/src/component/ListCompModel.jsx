import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { Link } from "react-router-dom";

function ListCompModel({props}) {
    console.log(props['_id'])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
      <Button className="m-2" onClick={handleShow} variant="btn btn-outline-success">More Details</Button>
        
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props['Title']}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props['Details']}</Modal.Body>
        <Modal.Footer>
        <Button className="m-2" variant="btn btn-outline-danger"><Link to={'/update/'+props['_id']} className="editDecoration">
            Edit</Link>
        </Button>
        <Button variant="btn btn-outline-success" onClick={handleClose}>
        Close
        </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ListCompModel;