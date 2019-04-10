import React, { Component } from 'react';
import DisplayMap from './DisplayMap'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div >
        <h1>Map App</h1>
        <DisplayMap />
      </div>
    );
  }
}

export default App;
