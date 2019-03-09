import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/contacts")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">Hello Electron</p>
        {this.state.data.map(d => (
          <p>
            {d.FirstName} {d.LastName}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
