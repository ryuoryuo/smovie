import React, { Component } from "react";
import "./MovieItem.css";
import { Link } from "react-router-dom";

export default class MovieItem extends Component {
  render() {
    const { movie, id } = this.props;

    // Check if there is no poster for image and set a placeholder if so
    const imagePath =
      movie.poster_path !== null
        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        : "https://image.ibb.co/kzBrfT/no_poster.jpg";
    return (
      <div className="movie mb-4 col-xl-2 col-lg-3">
        <Link to={`/movie/${movie.id}`}>
          <div className="card">
            <img className="card-img-top movie-image" src={imagePath} />
            <div className="overlay">
              <div className="card-img-overlay h-100 d-flex flex-column">
                <div className="card-text border-0 text-light text-center">
                  {movie.title}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
