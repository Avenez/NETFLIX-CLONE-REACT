import React, { Component } from "react";
import { Navbar, Nav, Button, Form, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import MyProfileSelect from "./MyProfileSalect";
import { motion, AnimatePresence } from "framer-motion";

class MyNavBar extends Component {
  state = {
    searchIsActive: false,
  };

  render() {
    return (
      <Navbar expand="lg" bg="dark">
        <div className="container-fluid">
          <a target="_blank" className="navbar-brand" href="/">
            <Image
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
                <Nav.Link target="_blank" className="nav-link" href="#">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" className="nav-link" href="#">
                  TV Show
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" className="nav-link" href="#">
                  Movies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" className="nav-link" href="#">
                  Recently Added
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link target="_blank" className="nav-link" href="#">
                  My List
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <div className="d-flex justify-content-center flex-wrap">
              {/* --------------------PROVA ANIMAZIONE-------------- */}
              <AnimatePresence>
                {this.state.searchIsActive && (
                  <motion.div initial={{ width: 0 }} animate={{ width: 150 }} exit={{ width: 0 }}>
                    <InputGroup className="mb-3 searcForm d-flex justify-content-center align-items-center pt-3 mb-0 pb-0 w-100 ">
                      <Form.Control placeholder="search..." aria-label="Username" size="sm" className="rounded-pill" />
                    </InputGroup>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* -------------------------------------------------------- */}
            <div className="d-flex justify-content-end  align-items-center flex-wrap align-self-end" role="search">
              <a
                className="search p-0 mx-4 nav-link mt-3"
                type="button"
                onClick={() => {
                  this.setState({ searchIsActive: this.state.searchIsActive ? false : true });
                }}
              >
                <i className="bi bi-search"></i>
              </a>
              <a className="nav-link m-0 text-decoration-none pointer-event">KIDS</a>
              <Button className="btn btn-dark p-0 ms-4 me-2" type="button">
                <i className="bi bi-bell-fill"></i>
              </Button>
              <div className="btn ms-0">
                <MyProfileSelect />
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavBar;
