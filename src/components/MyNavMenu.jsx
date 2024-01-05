import { motion, AnimatePresence } from "framer-motion";
import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import MyProfileSelect from "./MyProfileSelect";

class MyNavMenu extends Component {
  state = {
    searchIsActive: this.props.searchIsActive,
  };

  render() {
    return (
      <>
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
            <MyProfileSelect profilePicture4={this.props.profilePicture3} profileToggle4={this.props.profileToggle3} />
          </div>
        </div>
      </>
    );
  }
}

export default MyNavMenu;
