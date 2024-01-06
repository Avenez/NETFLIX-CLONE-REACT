import React, { Component } from "react";
import { Row, Col, Button, Image, Form } from "react-bootstrap";

class MyProfilePage2 extends Component {
  state = {
    nameSelected: false,
    ProfileName: "",
    favLanguage: "",
    matSettings: "",
    autoEpisode: false,
    autoPreview: false,
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      const inputValue = event.target.value;
      this.setState({ ProfileName: inputValue });
      this.setState({ nameSelected: !this.state.nameSelected });
    }
  };

  render() {
    return (
      <>
        <Row>
          <Col xs={1} xl={4}></Col>

          <Col xs={10} xl={5}>
            <Row className="border-bottom border-secondary border-1 ms-0">
              <h1 className="text-white display-3 fw-semibold ps-0">Edit Profile</h1>
            </Row>

            <Row className="flex-column flex-md-row mt-4 border-bottom border-secondary border-1 ms-0">
              <Col xs={3} className=" ps-0 pe-0">
                <div className="position-relative img-div">
                  <Image
                    className="object-fit-cover border-0 rounded h-100 w-100"
                    width="100"
                    src={this.props.profilePicturePage ? this.props.profilePicturePage : "assets/avatar.png"}
                    alt="avatar"
                  />
                  <input
                    type="file"
                    id="upload"
                    hidden
                    onChange={(event) =>
                      this.props.changeProfilePicture2(event.target.files[0] ? event.target.files[0] : null)
                    }
                  />
                  <label for="upload">
                    <i className="bi bi-pencil-fill btn btn-light text-white bg-black rounded-circle i-abs"></i>
                  </label>
                </div>
              </Col>

              {/* STRIVE STUDENT --- La parte relativa al nome, all'immagine profilo e al linguaggio possono essere cambiate. Nome e linguaggio aggiornano lo stato in questo componente. 
              L'input type file aggiorna lo stato nel componente app per poterlo condividere con la navbar. 
              Ho provato ad usare Redux per avere uno stato condiviso ma non sosno riuscito ad usarlo in autonomia */}

              <Col xs={8} className="mt-4 mt-md-0">
                <Row className="border-bottom border-secondary border-1 pb-4">
                  {this.state.nameSelected && (
                    <Form.Control
                      type="text"
                      placeholder={this.state.ProfileName ? this.state.ProfileName : "Default Name"}
                      onKeyDown={this.handleKeyDown}
                    />
                  )}

                  {!this.state.nameSelected && (
                    <p
                      className="bg-secondary text-white p-2 namePargraf"
                      onClick={() => this.setState({ nameSelected: true })}
                    >
                      {this.state.ProfileName ? this.state.ProfileName : "Default Name - click to change"}
                    </p>
                  )}
                  <p className="text-white p-0 mt-3 fs-4 text-start">Language:</p>
                  <Form.Select
                    className="bg-dark text-white w-35 d-none d-sm-flex"
                    aria-label="Languages"
                    onChange={(event) => this.setState({ favLanguage: event.target.value })}
                  >
                    <option selected></option>
                    <option value="Inglese">Inglese</option>
                    <option value="Francese">Francese</option>
                    <option value="Tedesco">Tedesco</option>
                    <option value="Italiano">Italiano</option>
                  </Form.Select>

                  <Form.Select
                    className="bg-dark text-white d-flex d-sm-none"
                    aria-label="Languages"
                    onChange={(event) => this.setState({ favLanguage: event.target.value })}
                  >
                    <option selected></option>
                    <option value="Inglese">Inglese</option>
                    <option value="Francese">Francese</option>
                    <option value="Tedesco">Tedesco</option>
                    <option value="Italiano">Italiano</option>
                  </Form.Select>
                </Row>

                {/* MATURITY SET --- anche qui i select cambiano lo stato */}
                <Row className="border-bottom border-secondary border-1 pb-4 mt-4">
                  <p className="text-white p-0 mt-3 fs-4 text-start">Maturity Settings:</p>
                  <Form.Select
                    className="bg-secondary text-white w-50 d-none d-sm-flex border-0"
                    aria-label="Maturity"
                    onChange={(event) => this.setState({ matSettings: event.target.value })}
                  >
                    <option selected></option>
                    <option value="ALL MATURITY RATINGS">ALL MATURITY RATINGS</option>
                    <option value="RESTRICTED">RESTRICTED</option>
                    <option value="BABY">BABY</option>
                  </Form.Select>

                  <Form.Select
                    className="bg-secondary text-white d-flex d-sm-none border-0"
                    aria-label="Maturity"
                    onChange={(event) => this.setState({ matSettings: event.target.value })}
                  >
                    <option selected></option>
                    <option value="ALL MATURITY RATINGS">ALL MATURITY RATINGS</option>
                    <option value="RESTRICTED">RESTRICTED</option>
                    <option value="BABY">BABY</option>
                  </Form.Select>

                  <p className="text-white p-0 mt-3 ms-0 text-start">
                    Show titles of all maturity ratings for this profile
                  </p>
                  <Button variant="dark" className="border-1 border-secondary editBtn">
                    EDIT
                  </Button>
                </Row>

                {/* AUTOPLAY CONTROLS - la pressione delle checkbox aggiorna lo stato */}
                <Row className="pb-4 mt-4">
                  <p className="text-white p-0 mt-3 fs-4 text-start">Autoplay Controls</p>

                  <div className="d-flex flex-column justify-content-center p-0">
                    <div className="d-flex align-items-center mb-0 p-0">
                      <label className="checkbox mb-0">
                        <input
                          type="checkbox"
                          onChange={() => this.setState({ autoEpisode: !this.state.autoEpisode })}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <p className="text-white ms-2 mb-0 pb-2 ">Autoplay next episode in a series on all devices.</p>
                    </div>

                    <div className="d-flex align-items-center mt-0 p-0">
                      <label className="checkbox">
                        <input
                          type="checkbox"
                          onClick={() => this.setState({ autoPreview: !this.state.autoPreview })}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <p className="text-white ms-2 pb-2">Autoplay previews while browsing on all devices.</p>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* BUTTONS */}
            <Row className="justify-content-center justify-content-lg-start mt-4 ms-0 px-auto pt-3 pb-5">
              <Col xs="auto" className="ps-0">
                <Button variant="light" className="rounded-0 px-4 ms-0 fs-5 mb-3">
                  SAVE
                </Button>
              </Col>
              <Col xs="auto" className="ps-0">
                <Button variant="dark" className="border-1 border-secondary rounded-0 px-4 fs-5 mb-3">
                  CANCEL
                </Button>
              </Col>
              <Col xs="auto" className="ps-0">
                <Button variant="dark" className="border-1 border-secondary rounded-0 px-4 px-md-5 fs-5 mb-3">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default MyProfilePage2;
