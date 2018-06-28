import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";
import AppContent from "./components/AppContent/AppContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <AppMenu />
          <div className="page-content-wrapper col-10 offset-2">
            <div className="container-fluid">
              <Switch />
              <Route exact path="/" component={AppContent} />
              <Switch />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
