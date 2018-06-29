import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import ViewedList from "../ViewedList/ViewedList";
import axios from "axios";

export default class AppContent extends Component {
  render() {
    let viewedContent;

    // getting recently viewed movies from local storage
    let localMovies = localStorage.getItem("movies");

    // If local storage is not empty then split it to array
    if (localMovies) {
      localMovies = localMovies.split(",");

      if (localMovies.length > 0) {
        viewedContent = (
          <div className="mt-4">
            <h3>Recently Viewed</h3>
            <ViewedList viewedIds={localMovies} />
          </div>
        );
      }
    }

    return (
      <div className="content-wrapper ml-3">
        {viewedContent}
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
