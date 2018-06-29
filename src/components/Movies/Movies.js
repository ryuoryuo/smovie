import React, { Component } from "react";
import axios from "axios";
import API_KEY from "../../config/keys";
import MovieItem from "../MovieItem/MovieItem";
import Spinner from "../common/spinner";
import InfiniteScroll from "react-infinite-scroller";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      pageLoaded: 1,
      hasMoreItems: true
    };

    this.getData = this.getData.bind(this);
    this.loadFunc = this.loadFunc.bind(this);
  }

  componentDidMount() {
    this.getData(API_KEY);
  }

  getData(api_key) {
    const { pageLoaded, movies } = this.state;

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pageLoaded}`
      )
      .then(res => {
        // If current page is more than 1 then just add more results to movie array
        // instead of fully replacing it
        if (pageLoaded > 1) {
          // Slicing results value so it always be a full row of 6 items
          let currentMovies = movies;
          currentMovies.results = currentMovies.results.concat(
            res.data.results.slice(2)
          );

          this.setState({
            movies: currentMovies
          });

          // Activating infinite scroll if current page loaded
          if (movies.results.length === pageLoaded * 18) {
            this.setState({
              hasMoreItems: true
            });
          }
        } else {
          // Splicing movies results to 18 for getting full rows of items
          let splicedMovies = res.data;
          splicedMovies.results = splicedMovies.results.splice(2);
          this.setState({
            movies: splicedMovies
          });
        }
      })
      .catch(err => console.log(err));
  }

  // Load function for infinite scroll component
  loadFunc(page) {
    this.setState(
      {
        pageLoaded: page
      },
      () => {
        this.getData(API_KEY);
      }
    );
    this.setState({ hasMoreItems: false });
  }

  render() {
    const { movies } = this.state;
    let moviesContent;

    // If movies loaded, then map results to the MovieItems
    if (movies.total_results) {
      moviesContent = movies.results.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      });
    }

    return (
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={this.state.hasMoreItems}
          useWindow={true}
          loader={<Spinner />}
          initialLoad={false}
          threshold={550}
        >
          <div className="row justify-content-center">{moviesContent}</div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default Movies;
