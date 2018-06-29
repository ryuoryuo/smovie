import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import API_KEY from "../../config/keys";
import "./MoviePage.css";
import Spinner from "../common/spinner";
import Moment from "react-moment";

class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      loading: false
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}language=en-US`
      )
      .then(res => {
        // Setting movie in state
        this.setState({ movie: res.data, loading: false });

        // Saving visited page to localStorage
        let localSaved = localStorage.getItem("movies");

        if (localSaved) {
          localSaved = localSaved.split(",");
        } else {
          localSaved = [];
        }

        // if current item id not included then add it to array
        // if included then move it to the start of array
        if (!localSaved.includes(id)) {
          localSaved.push(id);
        } else {
          localSaved.splice(localSaved.indexOf(id), 1);
          localSaved.push(id);
        }

        // Splice array if there is more than 6 saved items in localstorage
        if (localSaved.length > 6) localSaved = localSaved.slice(-6);

        localStorage.setItem("movies", localSaved.join());
      })
      .catch(err => this.props.history.push("/not-found"));
  }

  onGoBack() {
    this.props.history.goBack();
  }

  render() {
    const { movie } = this.state;

    // Check if there is no poster for image and set a placeholder if so
    const imagePath =
      movie.poster_path !== null
        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        : "https://image.ibb.co/kzBrfT/no_poster.jpg";

    const movieContent =
      this.state.loading || Object.keys(movie).length === 0 ? (
        <div className="row">
          <Spinner />
        </div>
      ) : (
        <div className="row">
          <div className="movie-image col-3">
            <img
              src={imagePath}
              alt="Movie Poster"
              className="float-left poster-image img-responsive"
            />
          </div>

          <div className="movie-info col-7">
            <div className="row">
              <div className="movie-title col-9">
                <h1 className="movie-title mb-0">{movie.title}</h1>
                {movie.title === movie.original_title ? null : (
                  <h5 className="movie-title ml-3 text-muted">
                    {movie.original_title}
                  </h5>
                )}
                <p className="lead movie-year mb-0">
                  <Moment format="YYYY">{movie.release_date}</Moment>
                </p>
              </div>
              {movie.production_countries[0] && (
                <div className="movie-country col-3">
                  <h3 className="text-muted mt-2">
                    {movie.production_countries[0].name}
                  </h3>
                </div>
              )}
            </div>
            <div className="movie-genres ml-3">
              {movie.genres.length === 0
                ? null
                : movie.genres.map(genre => {
                    return (
                      <span
                        key={genre.id}
                        className="badge badge-secondary mr-1"
                      >
                        {genre.name}
                      </span>
                    );
                  })}
            </div>

            <div className="movie-tagline ml-3 mt-4">
              {movie.tagline === "" ? null : (
                <h3 className="text-info text-center">„{movie.tagline}“</h3>
              )}
            </div>

            <div className="movie-desc ml-3 mt-4">
              {movie.overview === "" ? "No info Available" : movie.overview}
            </div>
            {movie.vote_average > 0 && (
              <div className="movie-rating ml-3 mt-5">
                <h3 className="text-primary">
                  User Rating: {movie.vote_average}
                </h3>
              </div>
            )}
          </div>
        </div>
      );

    return (
      <div className="poster-wrapper mt-4">
        <a
          onClick={this.onGoBack.bind(this)}
          className="btn btn-secondary text-light mb-4 ml-3"
        >
          Go back
        </a>
        {movieContent}{" "}
      </div>
    );
  }
}

export default withRouter(MoviePage);
