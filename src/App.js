import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    data: []
  };

  componentDidMount() {
    //fetch("http://localhost:5000/api/contacts")
    //      .then(response => response.json())
    //.then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro">Welcome</p>
        {this.state.data.map(d => (
          <p>
            {d.FirstName} {d.LastName}
          </p>
        ))}
        <button className="button" onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    );
  }

  handleClick() {
    fetch(
      "http://localhost:5000/api/imposition/6/6/%2FUsers%2Fjoelbellot%2FDocuments%2Fgit%2Ftetefufu%2Fimposition%2Fapi%2Fbin%2Fdist%2Fosx%2Fa4.pdf"
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }
}

export default App;
