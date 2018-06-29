import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SearchField.css";
export default class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onChange(e) {
    // Calling onSearch function in setState callback
    this.setState(
      {
        text: e.target.value
      },
      () => {
        this.props.onSearch(this.state.text);
      }
    );
  }

  render() {
    return (
      <div className="search-wrapper mb-3 offset-7">
        <div className="mb-3 col-3 search-result">
          <input
            onChange={this.onChange.bind(this)}
            type="text"
            value={this.state.text}
            className="form-control form-control-sm search-input"
            placeholder="Search movies"
          />
          <div className="list-group search-list">
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              First item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              Second item
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action list-group-item-primary"
            >
              Third item
            </a>
          </div>
        </div>
      </div>
    );
  }
}

SearchField.propTypes = {
  onSearch: PropTypes.func.isRequired
};
