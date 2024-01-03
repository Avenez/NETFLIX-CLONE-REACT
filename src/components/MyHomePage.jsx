import { Component } from "react";
import MyFilmList from "./MyFilmList";
import MyTvShowHeader from "./MyTvShowsHeader";

class MyHomePage extends Component {
  state = {
    FilmListTile1: "batman",
    FilmListTile2: "harry-potter",
    FilmListTile3: "lord-of-the-rings",
  };

  render() {
    return (
      <>
        <MyTvShowHeader />
        <MyFilmList searchQuery={this.state.FilmListTile1} />
        <MyFilmList searchQuery={this.state.FilmListTile2} />
        <MyFilmList searchQuery={this.state.FilmListTile3} />
      </>
    );
  }
}
