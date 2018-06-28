import React, { Component } from "react";
import PropTypes from "prop-types";
export default class InputField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };
  }

  onChange(e) {
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
    const { onSearch } = this.props;
    return (
      <div className="mb-3">
        <input
          onChange={this.onChange.bind(this)}
          type="text"
          value={this.state.text}
          className="form-control form-control-lg"
          placeholder="Type something here..."
        />
      </div>
    );
  }
}

InputField.propTypes = {
  onSearch: PropTypes.func.isRequired
};
