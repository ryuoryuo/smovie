import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import axios from "axios";
import API_KEY from "../../config/keys";
import Spinner from "../common/spinner";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: true
    });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(res => {
        const splicedMovies = res.data.results.splice(0, 5);

        this.setState({
          movies: splicedMovies,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { movies } = this.state;

    let moviesContent;

    if (!this.state.loading && movies.length > 0) {
      moviesContent = movies.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      });
    } else {
      moviesContent = <Spinner />;
    }
    return (
      <div className="row mt-4 justify-content-center">{moviesContent}</div>
    );
  }
}
