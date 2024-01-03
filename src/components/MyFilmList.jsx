import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import MySingleFilm from "./MySingleFilm";
import Carousel from "react-bootstrap/Carousel";
import MyCarouselItem from "./MyCarouselItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import MyDropDown from "./MyDropDown";

class MyFilmList extends Component {
  state = {
    searchQuery: this.props.searchQuery,
    filmData: [],
    isLoading: true,
    startPoint: 0,
  };

  changeTitle = async (title) => {
    console.log(title);
    await this.setState({ searchQuery: title });
    await this.setState({ startPoint: Math.floor(Math.random() * 6) });
    await this.filmDataFetch();
  };

  filmDataFetch = async () => {
    const apiKey = "cffdda84";

    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=${apiKey}`);

      if (!response.ok) {
        throw new Error("Errore");
      }

      const filmDataObj = await response.json();
      this.setState({ filmData: filmDataObj.Search, isLoading: false });

      console.log(this.state.filmData);
    } catch (error) {
      console.error("Errore durante il recupero dei dati:", error.message);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.filmDataFetch();
  }

  render() {
    const title = this.state.searchQuery;
    return (
      <section className="container-fluid pt-4 pb-3 text-start">
        <h4 className="text-white pb-2">{title.toUpperCase()}</h4>
        <MyDropDown myChangeFun={this.changeTitle} />

        {/* -----SPINNER */}

        {this.state.isLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="border" variant="danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <Row className=" d-none d-md-flex gx-1 gy-3 ">
              {this.state.filmData.slice(this.state.startPoint, this.state.startPoint + 6).map((film, index) => (
                <MySingleFilm key={`film-id-${index}`} imageUrl={film.Poster} />
              ))}
            </Row>
            <Row className="d-sm-flex d-md-none">
              <Carousel>
                {this.state.filmData.slice(0, 6).map((film, index) => (
                  //   <MyCarouselItem key={`car-id:${index}`} imageUrl={film.Poster} title={film.Title} year={film.Year} /> Ho provato ad aggiungere gli elementi del carosello come componente ma non sembravano funzionare. Ho inserito qui il contenuto di MyCarouselItem e funziona

                  <Carousel.Item>
                    <Image src={film.Poster} className="d-block w-100 h-100 object-fit-cover" alt="film" />
                    <Carousel.Caption>
                      <h3>{film.Title}</h3>
                      <p>{film.Year}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Row>
          </>
        )}
      </section>
    );
  }
}

export default MyFilmList;
