import React, { Component } from "react";
import InputField from "../common/InputField";

class Movies extends Component {
  onSearch(text) {
    console.log(text);
  }
  render() {
    return (
      <div>
        <InputField onSearch={this.onSearch} />
      </div>
    );
  }
}

export default Movies;
