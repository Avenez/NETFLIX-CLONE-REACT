import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

class MyProfileSelect extends Component {
  render() {
    return (
      <DropdownButton
        variant="dark"
        id="dropdown-basic-button"
        title={
          <Image
            src={this.props.profilePicturePage ? this.props.profilePicturePage : "assets/avatar.png"}
            width="30"
            alt="avatar"
            rounded
          />
        }
        drop="start"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="#/action-1">
          <i className="bi bi-people-fill me-2 "></i>Cambia Profilo
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <i className="bi bi-person-plus me-2"></i>Aggiungi Profilo
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3" onClick={this.props.profileToggle4}>
          <i className="bi bi-gear-wide me-2"></i>Impostazioni
        </Dropdown.Item>
      </DropdownButton>
    );
  }
}

export default MyProfileSelect;
