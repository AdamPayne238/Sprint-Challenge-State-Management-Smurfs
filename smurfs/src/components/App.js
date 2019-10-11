import React, { Component } from "react";
import "./App.css";

import SmurfData from "../components/SmurfData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <SmurfData />
      </div>
    );
  }
}

export default App;
