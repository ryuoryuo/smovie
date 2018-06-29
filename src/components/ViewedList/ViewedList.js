import React, { Component } from "react";
import MovieItem from "../MovieItem/MovieItem";
import axios from "axios";
import API_KEY from "../../config/keys";
import Spinner from "../common/spinner";
import PropTypes from "prop-types";

export default class ViewedList extends Component {
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

    const viewedMovies = this.props.viewedIds;

    viewedMovies.forEach(id => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}language=en-US`
        )
        .then(res => {
          this.setState(prevState => {
            return { movies: [res.data, ...prevState.movies], loading: false };
          });
        })
        .catch(err => console.log(err));
    });
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
    return <div className="row mt-4">{moviesContent}</div>;
  }
}

ViewedList.propTypes = {
  viewedIds: PropTypes.array.isRequried
};
