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
    const { pageLoaded } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pageLoaded}`
      )
      .then(res => {
        // If current page is more than 1 then just add more results to movie array
        // instead of fully replacing it

        // Splicing movies results to 18 for getting full rows of items
        let splicedMovies = res.data;
        splicedMovies.results.length = 18;

        this.setState({
          movies: splicedMovies
        });
      })
      .catch(err => console.log(err));

    // Returning new function getData that will always run after first data getting.
    this.getData = () => {
      const { pageLoaded, movies } = this.state;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${pageLoaded}`
        )
        .then(res => {
          // Slicing results value so it always be a full row of 6 items
          movies.results = movies.results.concat(res.data.results.slice(2));

          this.setState({
            movies: movies
          });

          // Activating infinite scroll if current page loaded
          if (movies.results.length === pageLoaded * 18) {
            this.setState({
              hasMoreItems: true
            });
          }
        })
        .catch(err => console.log(err));
    };
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

    // If movies loaded(have total_results field), then map results to the MovieItems
    if (movies.total_results) {
      moviesContent = movies.results.map(movie => {
        return <MovieItem key={movie.id} movie={movie} />;
      });
    }

    return (
      <div>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadFunc}
          hasMore={this.state.hasMoreItems}
          useWindow={true}
          loader={<Spinner key={0} />}
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
