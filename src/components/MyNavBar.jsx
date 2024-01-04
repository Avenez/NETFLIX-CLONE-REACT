import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import MyNavMenu from "./MyNavMenu";

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

            <MyNavMenu searchIsActive={this.state.searchIsActive} profileToggle3={this.props.profileToggle2} />
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default MyNavBar;
