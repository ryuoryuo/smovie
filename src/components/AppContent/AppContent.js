import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import axios from "axios";

export default class AppContent extends Component {
  render() {
    return (
      <div className="content-wrapper ml-3">
        <div className="mt-4">
          <h3>Upcoming Movies</h3>
          <MoviesList list={"upcoming"} />
        </div>
        <div className="mt-4">
          <h3>Top Rated Movies</h3>
          <MoviesList list={"top_rated"} />
        </div>
        <div className="mt-4">
          <h3>Now Playing Movies</h3>
          <MoviesList list={"now_playing"} />
        </div>
        <div className="mt-4">
          <h3>Popular Movies</h3>
          <MoviesList list={"popular"} />
        </div>
      </div>
    );
  }
}
