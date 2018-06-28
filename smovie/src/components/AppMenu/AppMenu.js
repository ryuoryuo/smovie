import React, { Component } from "react";
import "./AppMenu.css";

class AppMenu extends Component {
  render() {
    return (
      <div className="sidebar-wrapper col-sm-2">
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

// <div className="sidebar col-sm-2 p-0 m-0">
// <nav className="nav flex-column nav-pills">
//   <a className="navbar-brand mb-3 text-light mx-auto" href="#">
//     SMovie
//   </a>
//   <a href="#" className="nav-item nav-link active">
//     Main
//   </a>
//   <a href="#" className="nav-item nav-link bg-dark text-light">
//     Movies
//   </a>
//   <a href="#" className="nav-item nav-link  bg-dark text-light">
//     IMDB
//   </a>
//   <a href="#" className="nav-item nav-link  bg-dark text-light">
//     Github
//   </a>
//   <a href="#" className="nav-item nav-link  bg-dark text-light">
//     About
//   </a>
// </nav>
// </div>
