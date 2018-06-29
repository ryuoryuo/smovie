import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";
import MoviePage from "./components/MoviePage/MoviePage";
import Movies from "./components/Movies/Movies";
import AppContent from "./components/AppContent/AppContent";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div className="row">
            <div className="col-md-2 col-2 p-0">
              <AppMenu />
            </div>
            <div className="page-content-wrapper col-sm-10 col-12">
              <div className="container-fluid">
                <Switch />
                <Route exact path="/" component={AppContent} />
                <Route path="/movie/:id" component={MoviePage} />
                <Route path="/movies" component={Movies} />
                <Route path="/not-found" component={NotFound} />
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
