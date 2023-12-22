import React from "react";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const MyDropDown = (props) => {
  return (
    <Dropdown
      as={ButtonGroup}
      className="mb-3"
      onSelect={(eventKey) => {
        props.myChangeFun(eventKey);
      }}
    >
      <Dropdown.Toggle variant="dark" className="fw-bold border border-white border-1">
        Titolo
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        <Dropdown.Item eventKey="batman">batman</Dropdown.Item>
        <Dropdown.Item eventKey="harry-potter">harry-potter</Dropdown.Item>
        <Dropdown.Item eventKey="lord-of-the-rings">lord-of-the-rings</Dropdown.Item>
        <Dropdown.Item eventKey="goofy">goofy</Dropdown.Item>
        <Dropdown.Item eventKey="spiderman">spiderman</Dropdown.Item>
        <Dropdown.Item eventKey="leon">leon</Dropdown.Item>
        <Dropdown.Item eventKey="hero">hero</Dropdown.Item>
        <Dropdown.Item eventKey="horror">horror</Dropdown.Item>
        <Dropdown.Item eventKey="super">super</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropDown;
