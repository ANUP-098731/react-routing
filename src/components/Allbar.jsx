import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Style.css';
import logo from '../images/logo.png';
import { FaRegComment,FaLocationDot} from 'react-icons/fa6';

const Allbar = () => {
  return (
<section>
    {/* uppernavbar */}
    <div className="UpperNavbar">
    <Navbar>
    <Container>
      <Navbar.Brand href="#home" className=' IconBold' style={{paddingLeft:'8rem'}}>
        <span><FaRegComment/>&nbsp; support@novena.com</span>&nbsp; &nbsp;
        <span><FaLocationDot/>&nbsp;  Address Ta-134/A, New York, USA</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className=' Bold' style={{paddingRight:'7rem'}}>
        Call Now: <a href="#login" className='LinkBold'>823-4565-13456</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>

{/* lowernavbar */}
<div className="LowerNavbar">
<Navbar expand="lg" className="bg-body-tertiary">
<Container>
<Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          className="d-inline-block align-top" style={{paddingLeft:'7rem'}}
        />{''}
      </Navbar.Brand>   
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" " style={{paddingRight:'6rem'}}>
      <NavLink className='nav-link' to="/">Home</NavLink>
      <NavLink className='nav-link' to="/about">About</NavLink>
      <NavLink className='nav-link' to="/services">Services</NavLink>
      <NavLink className='nav-link' to="/blog">Blog</NavLink>
      <NavLink className='nav-link' to="/contact">Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
</div>

</section>


    
  )
}


export default Allbar