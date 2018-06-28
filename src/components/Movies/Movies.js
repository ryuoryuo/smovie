import React, { Component } from "react";
import InputField from "../common/InputField";
import axios from "axios";
import API_KEY from "../../config/keys";
import MovieItem from "../MovieItem/MovieItem";
import Spinner from "../common/spinner";
import classnames from "classnames";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: true
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // Setting loading to true, then making a request in callback
    this.setState(
      {
        loading: true
      },
      () => {
        this.getData(API_KEY);
      }
    );
  }

  getData(api_key) {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
      .then(res => {
        this.setState({
          movies: res.data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  onSearch(text) {
    // Setting loading to true, then making a request in callback
    this.setState(
      {
        loading: true
      },
      () => {
        // If no query param then getting default request
        if (text === "") {
          this.getData(API_KEY);
          return;
        }
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
          )
          .then(res => {
            this.setState({
              movies: res.data,
              loading: false
            });
          })
          .catch(err => console.log(err));
      }
    );
  }

  render() {
    const { movies } = this.state;
    let moviesContent;
    moviesContent = <Spinner />;
    if (!this.state.loading && movies.total_results) {
      moviesContent = movies.results.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      });
    } else if (movies.total_results === 0) {
      moviesContent = <h2>No data found</h2>;
    }

    return (
      <div>
        <InputField onSearch={this.onSearch.bind(this)} />
        <div className="row justify-content-center">{moviesContent}</div>
      </div>
    );
  }
}

export default Movies;
