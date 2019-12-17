import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Color from './Color/Color';

class App extends Component {

  state = {
   color1: 138,
   color2: 131,
   color3: 198 
  }
  
  colorCreator = () => {
    return (Math.floor(Math.random() * 250) + 1);
  }
  
  updateColorHandler = ( event ) => {
    this.setState({
      color1: this.colorCreator(),
      color2: this.colorCreator(),
      color3: this.colorCreator()
    })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of ReactJS</h1>
        <h2>Day 3: Color Picker App</h2>
          <div className="container">
            <Color clicked={this.updateColorHandler}
              c1={this.state.color1.toString()}
              c2={this.state.color2.toString()}
              c3={this.state.color3.toString()}
            />
          </div>
        </header>
      </div>
    );
  }

}

export default App;
