import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyHomePage from "./components/MyHomePage";
import { Component } from "react";
import MyProfilePage2 from "./components/MyProfilePage2";

// import MyFilmList from "./components/MyFilmList";
// import MyTvShowsHeader from "./components/MyTvShowsHeader";

class App extends Component {
  state = {
    profilePicture: "",
    isSettingsOn: false,
  };

  profileToggle = () => {
    this.setState({ isSettingsOn: !this.state.isSettingsOn });
  };

  changeProfilePicture = (file) => {
    const fReader = new FileReader();
    fReader.readAsDataURL(file);

    fReader.onload = () => {
      const filePath = fReader.result;
      this.setState({ profilePicture: filePath });
      console.log(file);
    };
  };

  render() {
    return (
      // nella navbar, il menù relativo al profilo, sull'opzione impostazioni, cambia lo stato dell'app permettendo di renderizzare la pagina del profilo.
      // Questa è commentata al suo interno con le sue funzionalità
      <div className="App">
        <header className="container-fluid bg-dark position-sticky top-0">
          <MyNavBar
            profileToggle2={this.profileToggle}
            isSettingsOnCheck={this.state.isSettingsOn}
            profilePicture2={this.state.profilePicture}
          />
        </header>

        <main className="container-fluid bg-dark">
          {!this.state.isSettingsOn && <MyHomePage />}
          {this.state.isSettingsOn && (
            <MyProfilePage2
              changeProfilePicture2={this.changeProfilePicture}
              profilePicturePage={this.state.profilePicture}
            />
          )}
        </main>

        {/* --------FOOTER-------- */}
        <footer className="container-fluid  bg-dark">
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
