import React from 'react'
import Card from 'react-bootstrap/Card';

function Cards() {
    return (
        <div 
        className="d-flex justify-content-evenly  flex-wrap"
        style={{padding: '0.5rem', margin: '1rem'}}
        
        >
          {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '18rem', margin: '0.5rem' }}
              className="mb-2 justify-content-between"

              editButton
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{variant} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    }

export default Cards