import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import "./MovieItem.css";

export default () => {
  return (
    <div className="movie col-md-2">
      <div className="card">
        <img
          className="card-img-top movie-image"
          src="https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg"
        />
        <div className="overlay">
          <div className="card-img-overlay h-100 d-flex flex-column">
            <div class="card-text border-0 text-light text-center">
              Avengers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
