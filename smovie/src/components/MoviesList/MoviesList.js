import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import axios from "axios";

export default class MoviesList extends Component {
  componentDidMount() {
    axios
      .get()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="row mt-4">
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    );
  }
}
