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
        <Dropdown.Item eventKey="batman" href="#">
          batman
        </Dropdown.Item>
        <Dropdown.Item eventKey="harry-potter" href="#">
          harry-potter
        </Dropdown.Item>
        <Dropdown.Item eventKey="lord-of-the-rings" href="#">
          lord-of-the-rings
        </Dropdown.Item>
        <Dropdown.Item eventKey="goofy" href="#">
          goofy
        </Dropdown.Item>
        <Dropdown.Item eventKey="spiderman" href="#">
          spiderman
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropDown;
