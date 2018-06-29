import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-sm-none">
          <Link to="/" className="navbar-brand" href="#">
            Smovie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/movies/" className="nav-link">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.themoviedb.org/"
                  target="_blank"
                >
                  TMDb
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/ryuoryuo/smovie"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
