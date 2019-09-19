import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Hello World</h1>
        <Navbar />
      </div>
    );
  }
}

export default App;
