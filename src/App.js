import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";
import MoviePage from "./components/MoviePage/MoviePage";
import Movies from "./components/Movies/Movies";
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
              <Route path="/movie/:id" component={MoviePage} />
              <Route path="/movies" component={Movies} />
              <Switch />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
