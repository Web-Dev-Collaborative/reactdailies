import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoutInput from './ShoutInput';
import ShoutOutput from './ShoutOutput';

class App extends Component {
  state = {
    currentShout: ""
  }

  updateShoutHandler = (event) => {
    this.setState({currentShout: event.target.value})
  }


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of ReactJS</h1>
        <h2>Day 2: Shout at Me App</h2>
        <ShoutInput changed={this.updateShoutHandler} />
        
        <ShoutOutput shout={(this.state.currentShout).toUpperCase()} />
    
      </header>
    </div>
  );
}

}
export default App;
