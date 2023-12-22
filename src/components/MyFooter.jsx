import React from "react";
import { ListGroup } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div className="row pt-5">
      <div className="col-1 col-lg-3 "></div>

      <div className="col-10 col-lg-6 fs-6">
        <div id="social" className="d-flex align-items-center">
          <a target="_blank" href="#">
            <i className="bi bi-facebook i-secondary me-4 fs-4"></i>
          </a>
          <a target="_blank" href="#">
            <i className="bi bi-instagram i-secondary me-4 fs-4"></i>
          </a>
          <a target="_blank" href="#">
            <i className="bi bi-twitter i-secondary me-4 fs-4"></i>
          </a>
          <a target="_blank" href="#">
            <i className="bi bi-youtube i-secondary me-4 fs-4"></i>
          </a>
        </div>

        <div className="row row-cols-2 row-cols-md-4 mt-3">
          <ListGroup className="col">
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Audio and Settings
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Media Center
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Privacy
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Contact us
              </a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="col">
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Audio Description
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Investor Relation
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Legal Notice
              </a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="col">
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Help Center
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Jobs
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Cookie Preferences
              </a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className="col">
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Gift Cards
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Term of Use
              </a>
            </ListGroup.Item>
            <ListGroup.Item className="li">
              <a target="_blank" className="text-decoration-none">
                Corporate Information
              </a>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="mt-4">
          <button className="btn btn-dark border border-secondary border-1 rounded-0 text-secondary">
            Service Code
          </button>
          <p className="text-secondary mt-3">
            &reg; 1997 - 2019 Netflix, Inc. {`Se sei arrivato fin qui:"Complimenti"`}
          </p>
        </div>
      </div>

      <div className="col-1 col-lg-3 "></div>
    </div>
  );
};

export default MyFooter;
