import React, { Component } from "react";
import "./AppMenu.css";

class AppMenu extends Component {
  render() {
    return (
      <div className="sidebar-wrapper col-2">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#">SMovie</a>
          </li>
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">IMDB</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AppMenu;
