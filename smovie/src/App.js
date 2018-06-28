import React, { Component } from "react";
import "./App.css";
import AppMenu from "./components/AppMenu/AppMenu";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppMenu />
      </div>
    );
  }
}

export default App;
