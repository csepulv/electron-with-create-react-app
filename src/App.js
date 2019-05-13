import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import remote from 'electron';
const electron = window.require("electron");
const remote = window.require('electron').remote;
const dialog = remote.require('electron').dialog;
//const fs = require('fs');


class App extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.uploadFileButton = this.uploadFileButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    data: []
  };

  componentDidMount() {
    //fetch("http://localhost:5000/api/contacts")
    //      .then(response => response.json())
    //.then(data => this.setState({ data }));
  }

  handleChange(event) {
    //this.setState({ value: event.target.value });
    console.log(event.target.value);
    var f = document.getElementById("myFile");
    console.log(f);
    f = document.getElementById("myFile2");
    console.log(f);
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
        <input id="myFile" type="file" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }

  handleClick() {
    console.log(dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'] }));
    return;
    fetch(
      "http://localhost:5000/api/imposition/6/6/%2FUsers%2Fjoelbellot%2FDocuments%2Fgit%2Ftetefufu%2Fimposition%2Fapi%2Fbin%2Fdist%2Fosx%2Fa4.pdf"
    )
      .then(response => response.json())
      .then(data => console.log(data));
  }

  uploadFileButton() {
    return;
  }
}

export default App;
