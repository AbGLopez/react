import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-toolbox/lib/button/Button'; // Bundled component import
import TimePicker from 'react-toolbox/lib/time_picker/TimePicker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React toolbox</h2>
        </div>
        <Button>pepep</Button>
        <TimePicker/>
      </div>
    );
  }
}

export default App;
