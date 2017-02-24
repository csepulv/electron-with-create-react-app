import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {files: []}
    }

    componentDidMount() {
        fs.readdir('/', (err, files) => {
            this.setState({files: files});
        });

        //ipcRenderer example, from http://electron.atom.io/docs/api/ipc-main/
        console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            console.log(arg);// prints "pong"
        });
        ipcRenderer.send('asynchronous-message', 'ping');
    }

    renderFiles = () => {
        return this.state.files.map((file, index) => {
            return (<p key={index}>{file}</p>);
        })
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React/Electron</h2>
                </div>
                <p className="App-intro">
                    Hello Electron!
                </p>
                {this.renderFiles()}

            </div>
        );
    }
}

export default App;
