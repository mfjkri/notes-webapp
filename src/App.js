import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/navbar";

class App extends Component {
  state = {
    darkMode: true,
  };

  render() {
    return (
      <div>
        <div className="container">
          <NavBar />
          <p>Hello</p>
        </div>
      </div>
    );
  }
}

export default App;
