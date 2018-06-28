import React, { Component } from "react";
import "./AppMenu.css";
import { withRouter } from "react-router-dom";
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
            <a href="#">SMovie</a>
          </li>
          <li>
            <a
              href="#"
              className={classnames({
                active: location === "/"
              })}
            >
              Main
            </a>
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

export default withRouter(AppMenu);
