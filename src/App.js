import React, { Component } from "react";
import Navbar from "./Navbar";
import "./App.css";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1 className="Main">Hello World</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
