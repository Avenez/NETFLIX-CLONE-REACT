import React, { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import MySingleFilm from "./MySingleFilm";
import Carousel from "react-bootstrap/Carousel";
import MyCarouselItem from "./MyCarouselItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";

class MyFilmList extends Component {
  state = {
    searchQuery: this.props.searchQuery,
    filmData: [],
    isLoading: true,
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

        {/* -----SPINNER */}

        {this.state.isLoading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <Spinner animation="border" variant="danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <>
            <Row className="row-cols-md-3 row-cols-xl-6 d-none d-md-flex gx-1 gy-3">
              {this.state.filmData.slice(0, 6).map((film, index) => (
                <MySingleFilm key={index} imageUrl={film.Poster} />
              ))}
            </Row>
            <Row className="d-sm-flex d-md-none">
              <Carousel>
                {this.state.filmData.slice(0, 6).map((film, index) => (
                  //   <MyCarouselItem key={`car-id:${index}`} imageUrl={film.Poster} title={film.Title} year={film.Year} /> Ho provato ad aggiungere gli elementi del carosello come componente ma non sembravano funzionare. Ho inserito qui il contenuto di MyCarouselItem e funziona

                  <Carousel.Item>
                    <Image src={film.Poster} className="d-block h-100 w-100" alt="film" />
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
