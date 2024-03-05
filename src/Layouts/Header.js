import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class Header extends React.Component{
    render(){
        return (
            <div className=" d-flex align-items-center" id='header'>
              <div className='header-main'>
              <div className='container-fluid d-flex align-items-center'>
            <h1 className='Header-h1'>VELERA</h1>
            <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='Header-nav'>
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='header-link hover-underline-animation active'>Home</Nav.Link>
            <Nav.Link href="#link" className='header-link hover-underline-animation'>About</Nav.Link>
            <Nav.Link href="#home" className='header-link hover-underline-animation'>Services</Nav.Link>
            <Nav.Link href="#link" className='header-link hover-underline-animation'>Portfolio</Nav.Link>
            <Nav.Link href="#home" className='header-link hover-underline-animation'>Team</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='header-link hover-underline-animation text-white'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home" className='header-link hover-underline-animation'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <div class="header-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            </div>
              </div>
            </div>
          );
    }
}

export default Header;