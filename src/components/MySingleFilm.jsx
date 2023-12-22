import React from "react";
import { Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const MySingleFilm = (props) => (
  <Col className="containerPosition">
    <Image className="w-100 h-100 object-fit-cover imageHover" src={props.imageUrl} alt="film-image" />
    {/* <i class="bi bi-play-circle text-danger positionIcon"></i> */}
  </Col>
);

export default MySingleFilm;
