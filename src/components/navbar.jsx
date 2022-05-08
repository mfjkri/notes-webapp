import React, { Component } from "react";
import App from "../App";

class NavBar extends Component {
  handleToggleDarkMode() {
    console.log("yes");
  }

  render() {
    return (
      <div className="nav-bar">
        <h1>
          <span className="contrasting-color-2">React</span> Notes
        </h1>

        <button
          onClick={this.handleToggleDarkMode}
          onHov
          className="toggle-theme-btn"
          style={{ fontSize: "1rem" }}
        >
          Toggle Mode
        </button>
      </div>
    );
  }
}

export default NavBar;
