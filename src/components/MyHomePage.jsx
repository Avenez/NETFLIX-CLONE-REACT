import { Component } from "react";
import MyFilmList from "./MyFilmList";
import MyTvShowHeader from "./MyTvShowsHeader";

class MyHomePage extends Component {
  changeTitle2 = async (title) => {
    console.log(title);
    await this.setState({ filmListTile1: title, filmListTile2: title, filmListTile3: title });
  };

  state = {
    filmListTile1: "batman",
    filmListTile2: "harry-potter",
    filmListTile3: "lord-of-the-rings",
  };

  render() {
    return (
      <>
        <MyTvShowHeader myChangeFun2={this.changeTitle2} />
        <MyFilmList searchQuery={this.state.filmListTile1} />
        <MyFilmList searchQuery={this.state.filmListTile2} />
        <MyFilmList searchQuery={this.state.filmListTile3} />
      </>
    );
  }
}

export default MyHomePage;
