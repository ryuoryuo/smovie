import React, { Component } from "react";
import MoviesList from "../MoviesList/MoviesList";
import ViewedList from "../ViewedList/ViewedList";
import SearchField from "../common/SearchField";

export default class AppContent extends Component {
  render() {
    let viewedContent;

    // Getting recently viewed movies from local storage
    let localMovies = localStorage.getItem("movies");

    // If local storage is not empty then split it to array and then render it
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
        <div className="row justify-content-center">
          <SearchField />
        </div>

        {viewedContent}
        {viewedContent && <hr />}

        <div className="mt-4">
          <h3>Upcoming Movies</h3>
          <MoviesList list={"upcoming"} />
        </div>
        <hr />
        <div className="mt-4">
          <h3>Top Rated Movies</h3>
          <MoviesList list={"top_rated"} />
        </div>
        <hr />

        <div className="mt-4">
          <h3>Now Playing Movies</h3>
          <MoviesList list={"now_playing"} />
        </div>
        <hr />

        <div className="mt-4">
          <h3>Popular Movies</h3>
          <MoviesList list={"popular"} />
        </div>
      </div>
    );
  }
}
