import React, { Component } from "react";

class EditProfile extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 col-xl-4"></div>

          <div className="col-10 col-xl-5">
            <div className="row border-bottom border-secondary border-1 ms-0">
              <h1 className="text-white display-3 fw-semibold ps-0">Edit Profile</h1>
            </div>

            <div className="row flex-column flex-md-row mt-4 border-bottom border-secondary border-1 ms-0">
              <div className="col-3 position-relative ps-0 pe-0">
                <div>
                  <img width="100" src="assets/avatar.png" alt="avatar" />
                  <i className="bi bi-pencil-fill btn btn-close-white btn-light i-abs"></i>
                </div>
              </div>

              {/* STRIVE STUDENT */}
              <div className="col-auto col-md-8 mt-4 mt-md-0">
                <div className="row border-bottom border-secondary border-1 pb-4">
                  <p className="bg-secondary text-white p-2"> Strive Student</p>
                  <p className="text-white p-0 mt-3 fs-4">Language:</p>
                  <select
                    className="form-select bg-dark text-white w-35 d-none d-sm-flex"
                    aria-label="Default select example"
                  >
                    <option selected>Italiano</option>
                    <option value="1">Inglese</option>
                    <option value="2">Francese</option>
                    <option value="3">Tedesco</option>
                  </select>

                  <select
                    className="form-select bg-dark text-white d-flex d-sm-none"
                    aria-label="Default select example"
                  >
                    <option selected>Italiano</option>
                    <option value="1">Inglese</option>
                    <option value="2">Francese</option>
                    <option value="3">Tedesco</option>
                  </select>
                </div>

                {/* MATURITY SET */}
                <div className="row border-bottom border-secondary border-1 pb-4 mt-4">
                  <p className="text-white p-0 mt-3 fs-4">Maturity Settings:</p>
                  <select
                    className="form-select bg-secondary text-white w-50 d-none d-sm-flex border-0"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">ALL MATURITY RATINGS</option>
                    <option value="2">RESTRICTED</option>
                    <option value="3">BABY</option>
                  </select>

                  <select
                    className="form-select bg-secondary text-white d-flex d-sm-none border-0"
                    aria-label="Default select example"
                  >
                    <option selected></option>
                    <option value="1">ALL MATURITY RATINGS</option>
                    <option value="2">RESTRICTED</option>
                    <option value="3">BABY</option>
                  </select>

                  <p className="text-white p-0 mt-3">Show titles of all maturity ratings for this profile</p>
                  <button type="button" className="btn btn-dark border-1 border-secondary w-25">
                    EDIT
                  </button>
                </div>

                {/* AUTOPLAY CONTROLS */}
                <div className="row pb-4 mt-4">
                  <p className="text-white p-0 mt-3 fs-4">Autoplay Controls</p>

                  <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex align-items-center mb-0 p-0">
                      <label className="checkbox mb-0">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <p className="text-white ms-2 mb-0 pb-2">Autoplay next episode in a series on all devices.</p>
                    </div>

                    <div className="d-flex align-items-center mt-0 p-0">
                      <label className="checkbox">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                      <p className="text-white ms-2 pb-2">Autoplay next episode in a series on all devices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="row justify-content-center justify-content-lg-start mt-4 ms-0 pt-3 pb-5">
            <div className="col-auto ps-0">
              <button type="button" className="btn btn-light rounded-0 px-4 ms-0 fs-5 mb-3">
                SAVE
              </button>
            </div>
            <div className="col-auto ps-0">
              <button type="button" className="btn btn-dark border-1 border-secondary rounded-0 px-4 fs-5 mb-3">
                CANCEL
              </button>
            </div>
            <div className="col-auto ps-0">
              <button type="button" className="btn btn-dark border-1 border-secondary rounded-0 px-4 px-md-5 fs-5 mb-3">
                DELETE PROFILE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
