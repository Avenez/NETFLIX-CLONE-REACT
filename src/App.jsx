import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyFilmList from "./components/MyFilmList";
import MyTvShowsHeader from "./components/MyTvShowsHeader";

function App() {
  return (
    <div className="App">
      <header className="container-fluid bg-dark position-sticky top-0">
        <MyNavBar />
      </header>

      <main className="container-fluid bg-dark">
        <MyTvShowsHeader />
        <MyFilmList searchQuery="batman" />
        <MyFilmList searchQuery="harry-potter" />
        <MyFilmList searchQuery="lord-of-the-rings" />
      </main>

      {/* --------FOOTER-------- */}
      <footer className="container-fluid  bg-dark">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
