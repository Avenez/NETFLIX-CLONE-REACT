import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyHomePage from "./components/MyHomePage";
import { Component } from "react";

// import MyFilmList from "./components/MyFilmList";
// import MyTvShowsHeader from "./components/MyTvShowsHeader";

class App extends Component {
  state = {
    isSettingsOn: false,
  };

  profileToggle = () => {
    this.setState({ isSettingsOn: !this.state.isSettingsOn });
  };

  render() {
    return (
      <div className="App">
        <header className="container-fluid bg-dark position-sticky top-0">
          <MyNavBar profileToggle2={this.profileToggle} />
        </header>

        <main className="container-fluid bg-dark">
          {/* <MyTvShowsHeader />
        <MyFilmList searchQuery="batman" />
        <MyFilmList searchQuery="harry-potter" />
        <MyFilmList searchQuery="lord-of-the-rings" /> */}
          {!this.state.isSettingsOn && <MyHomePage />}
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
