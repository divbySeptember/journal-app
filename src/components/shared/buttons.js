import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'

function Buttons({children, type, handle}) {
  return (
    <div>
       <Button variant="danger"  >{children}</Button>
        
    </div>
  )
}


Button.defaultProps = {
    type: 'button',
   
    
  }
  
  Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    handle: PropTypes.func,
    
  }

export default Buttons