import React, { Component } from "react";
import "./AppMenu.css";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";

class AppMenu extends Component {
  render() {
    const location = this.props.location.pathname;
    return (
      <div className="sidebar-wrapper col-2 d-none d-sm-block">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="/">SMovie</a>
          </li>
          <li>
            <Link
              to="/"
              className={classnames({
                active: location === "/"
              })}
            >
              Main
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className={classnames({
                active: location === "/movies"
              })}
            >
              Movies
            </Link>
          </li>
          <li>
            <a href="https://www.themoviedb.org/" target="_noblank">
              TMDb
            </a>
          </li>
          <li>
            <a href="https://github.com/ryuoryuo/smovie" target="_noblank">
              Github
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(AppMenu);
