import React, { Component } from "react";
import "./SearchField.css";
import axios from "axios";
import API_KEY from "../../config/keys";
import { Link } from "react-router-dom";
import Moment from "react-moment";

export default class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      searchResult: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange(e) {
    this.setState(
      {
        text: e.target.value
      },
      // Calling onSearch function in setState callback
      () => {
        this.onSearch(this.state.text);
      }
    );
  }

  onSearch(query) {
    // If no query param then setting search results to empty
    if (query === "") {
      this.setState({
        searchResult: []
      });
      return;
    }
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
      )
      .then(res => {
        let responseData = res.data.results;
        responseData.length = 5;
        this.setState({
          searchResult: responseData,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { searchResult } = this.state;
    let searchContent;
    console.log(searchResult);
    searchContent = searchResult.map((item, key) => {
      return (
        <Link
          key={key}
          className="list-group-item list-group-item-light"
          to={`/movie/${item.id}`}
        >
          <div className="row">
            <div className="col-10 p-0 m-0 search-title">{item.title}</div>
            <p className="search-year mb-0 col-2 h6 text-secondary p-0">
              <Moment format="YYYY">{item.release_date}</Moment>
            </p>
          </div>
        </Link>
      );
    });
    return (
      <div className="search-wrapper mb-3 offset-7">
        <div className="mb-3 col-4 search-result">
          <input
            onChange={this.onChange}
            type="text"
            value={this.state.text}
            className="form-control form-control-sm search-input"
            placeholder="Search movies"
          />
          <div className="list-group search-list">{searchContent}</div>
        </div>
      </div>
    );
  }
}
