import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="gridWrap">
            <Header />
            <Board />
            <Footer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
