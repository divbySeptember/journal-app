import React, {setState} from 'react'
import Form from 'react-bootstrap/Form';


function Modalform() {
    // const [userForm, setUserForm] = setState('');

    


  return (
    <Form>
        <Form.Group className="mb-3" controlId="EntryTitle" >
            <Form.Label>Entry Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="JournalEntry">
            <Form.Label>Todays Entry</Form.Label>
            <Form.Control as="textarea" placeholder="Today's Entry" />
        </Form.Group>
    </Form>
  )
}

export default Modalform