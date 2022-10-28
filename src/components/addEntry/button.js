import React, {useState} from 'react'
import Buttons from '../shared/buttons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './form'


function Allbutton() {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
   

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }
      

    
  return (
    <div>
        <Button variant="danger" onClick={handleShow}>New Entry</Button>
        

        <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Create a new Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form /></Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type='submit' onClick={handleClose} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
  
}


export default Allbutton