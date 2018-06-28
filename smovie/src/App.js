import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";
import AppContent from "./components/AppContent/AppContent";

class App extends Component {
  render() {
    return (
      <div className="row">
        <AppMenu />
        <div className="page-content-wrapper col-md-9 offset-2">
          <div className="container-fluid">
            <AppContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
