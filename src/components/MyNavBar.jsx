import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" bg="dark">
      <div className="container-fluid">
        <a target="_blank" className="navbar-brand" href="/">
          <img
            className="ps-"
            height="50"
            src="https://ongpng.com/wp-content/uploads/2023/04/7.Netflix-Logo-1728x734-1.png"
            alt="netflixlogo"
          />
        </a>
        <Navbar.Toggle aria-controls="navbarSupportedContent" className="btn btn-dark" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link target="_blank" className="nav-link active text-white" href="#">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" className="nav-link text-white fw fw-bold" href="#">
                TV Show
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" className="nav-link active text-white" href="#">
                Movies
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" className="nav-link active text-white" href="#">
                Recently Added
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" className="nav-link active text-white" href="#">
                My List
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <div className="d-flex justify-content-end justify-content-lg-between align-items-center" role="search">
            <Button className="btn btn-dark p-0 mx-4" type="button">
              <i className="bi bi-search"></i>
            </Button>
            <a className="text-white m-0 text-decoration-none pointer-event">KIDS</a>
            <Button className="btn btn-dark p-0 ms-4 me-2" type="button">
              <i className="bi bi-bell-fill"></i>
            </Button>
            <div className="btn ms-0">
              <a href="http://127.0.0.1:5500/profile.html" target="_blank">
                <img src="assets/avatar.png" width="30" alt="avatar" />
              </a>
              <Button className="btn btn-dark p-0" type="button">
                <i className="bi bi-caret-down-fill"></i>
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavBar;
