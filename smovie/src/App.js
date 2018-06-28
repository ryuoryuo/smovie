import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";
import AppContent from "./components/AppContent/AppContent";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppMenu />
        <div className="page-content-wrapper">
          <div className="container-fluid">
            <AppContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
