// fix immagine logo
import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";

class MyNavBar extends React.Component{
  render(){
    return(
      <Nav
      className="navbar navbar-expand-lg navbar-dark"
    >
      <Navbar.Brand href="#">
        <img src="../assets/logo.png" id="netflix-logo" /* style={{"width: 100px; height: 55px"}} */ />
      </Navbar.Brand>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
    
      <Navbar.Collapse id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              Home <span className="sr-only">(current)</span>
            </Nav.Link>
          </li>
          <li className="nav-item active">
            <Nav.Link className="fw-bold" href="#">
              TV Shows
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              Movies
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              Recently Added
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link className="fw-bold" href="#">
              My List
            </Nav.Link>
          </li>
        </ul>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <i className="fa fa-bell icons"></i>
        <i className="fa fa-user icons"></i>
      </Navbar.Collapse>
    </Nav>
    )
  }
}


export default MyNavBar