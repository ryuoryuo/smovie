import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import axios from "axios";

// https://api.themoviedb.org/3/movie/550?api_key=7f540c62c1fdd7d646f8324eb576980c

export default class AppContent extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="mt-4 ml-3">
          <h3>Upcoming Movies</h3>
          <MoviesList />
        </div>
        <div className="mt-4 ml-3">
          <h3>Recent Movies</h3>
        </div>
        <div className="mt-4 ml-3">
          <h3>Recent Movies</h3>
        </div>
        <div className="mt-4 ml-3">
          <h3>Recent Movies</h3>
        </div>
      </div>
    );
  }
}
