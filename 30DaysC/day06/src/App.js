import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Thought from './Thought/Thought';


class App extends Component {
  state = {
    thoughts: [

  ],
  }
  
  deleteThoughtHandler = (thoughtIndex) => { 
    const thoughts = [...this.state.thoughts];
    thoughts.splice(thoughtIndex, 1);
    this.setState({thoughts: thoughts});
  }

  addThoughtHandler = (event) => { 
    event.preventDefault();
    const thoughts = [...this.state.thoughts];
    const newThought = {};

    newThought.content = this.newThought.value;

    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();

    newThought.time = (`${hour}:${mins}`);
    thoughts.push(newThought);
    this.setState({ thoughts: thoughts });
    this.newThought.value = null;
    

  }


  render() {
  const style = {
    border: '2px solid white',
    borderRadius: '0px',
    width: '100px',
    height: '60px',
    fontSize: '30px'
    };
    
    let thoughts = (
      <div>
        {
          this.state.thoughts.map(
            (thought, index) => {
              return <Thought thought={thought.content}
                time={thought.time}
                click={() => this.deleteThoughtHandler(index)} />
            }
          )
          .reverse()
        }
      </div>
    );



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of ReactJS</h1>
        <h2>Day 6: Thought Log</h2>
          <div className="container">
            <form onSubmit={(event) => this.addThoughtHandler(event)} >
              <input type="text"
                className="textfield"
                placeholder="Type Thought"
                ref={(input) => { this.newThought = input}}/>
              <input className="mainbtn"
                type="submit"
              value="Post"/>

            </form>
            
          </div>
          <ul>
            {thoughts}
          </ul>
        </header>
      </div>
    );
  }
}
export default App;
