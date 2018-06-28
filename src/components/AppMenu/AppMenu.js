import React, { Component } from "react";
import "./AppMenu.css";
import { withRouter, Link } from "react-router-dom";
import classnames from "classnames";

class AppMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = this.props.location.pathname;
    return (
      <div className="sidebar-wrapper col-2">
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
            <a href="#">Movies</a>
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
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(AppMenu);
