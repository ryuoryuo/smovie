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

  // Fisher-Yates shuffle of array
  shuffle(arr) {
    let tmp,
      current,
      top = arr.length;

    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = arr[current];
        arr[current] = arr[top];
        arr[top] = tmp;
      }

    return arr;
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    // Generating random number from 1 to 5 for our API request (so movies will have much lesser chance to repeat)
    const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${
          this.props.list
        }?api_key=${API_KEY}&language=en-US&page=${randomNumber}`
      )
      .then(res => {
        // Shuffling array
        // And getting first 6 elements after shuffling
        let shuffledMovies = this.shuffle(res.data.results);
        shuffledMovies.length = 6;

        this.setState({
          movies: shuffledMovies,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { movies } = this.state;

    let moviesContent;

    if (!this.state.loading && movies.length === 6) {
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
