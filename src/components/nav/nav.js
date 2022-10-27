import React from 'react'
import logo from '../../img/logo.png'
import User from './user'
import Navbar from 'react-bootstrap/Navbar';


function nav() {
  return (
    <>
    <Navbar bg="light" variant="light" className="justify-content-around"  >
      <Navbar.Brand href="#home" ><img className='logo' src={logo} alt="Logo" /></Navbar.Brand> 
      <User  />
    </Navbar>
   
    </>
  )
}

export default nav