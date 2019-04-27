import React, { Component } from 'react';
import './App.css';
import MemoryGame from './MemoryGame.js';
// import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MemoryGame />
      </div>
    )
  }
}


export default App;