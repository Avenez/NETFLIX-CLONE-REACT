import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import MyFilmList from "./components/MyFilmList";
import MyTvShowsHeader from "./components/MyTvShowsHeader";
import MyHomePage from "./components/MyHomePage";

function App() {
  return (
    <div className="App">
      <header className="container-fluid bg-dark position-sticky top-0">
        <MyNavBar />
      </header>

      <main className="container-fluid bg-dark">
        {/* <MyTvShowsHeader />
        <MyFilmList searchQuery="batman" />
        <MyFilmList searchQuery="harry-potter" />
        <MyFilmList searchQuery="lord-of-the-rings" /> */}

        <MyHomePage />
      </main>

      {/* --------FOOTER-------- */}
      <footer className="container-fluid  bg-dark">
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
