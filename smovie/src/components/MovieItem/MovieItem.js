import React, { Component } from "react";
import "./MovieItem.css";

export default class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie col-md-2">
        <div className="card">
          <img
            className="card-img-top movie-image"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
              movie.poster_path
            }`}
          />
          <div className="overlay">
            <div className="card-img-overlay h-100 d-flex flex-column">
              <div className="card-text border-0 text-light text-center">
                {movie.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
