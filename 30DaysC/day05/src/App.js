import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Relish from './Relish/Relish';

class App extends Component {

  state = {
    relishStyles: [
      { name: 'Branston Pickle', description: 'A british pickle that is brown in colour' },
      { name: 'Fruit Chutney', description: 'A chutney, surprisingly made of fruits' },
      { name: 'Onion Jam', description: 'A sweet chutney made of onions' },
      { name: 'Tomato Relish', description: 'A classic made with apples and tomatoes' },
      { name: 'Picalilli', description: 'Its a yellow one that tastes weird' },
      { name: 'Mango Chutney', description: 'A spicy one, served with Indian currys' },
  ],
  }

  deleteRelishHandler = (relishIndex) => { 
    const relishes = [...this.state.relishStyles];
    relishes.splice(relishIndex, 1);
    this.setState({relishStyles: relishes})
  }
  
  render() {
    const style = {
      border: '2px solid white',
      borderRadius: '0px',
      width: '100px',
      height: '60px',
      fontSize: '30px'
    }

    let relishes = null;
    if (this.state.relishStyles.length > 0) {
      relishes = (
        <div>
          {
            this.state.relishStyles.map((relish, index) => { 
              return <Relish name={relish.name}
                description={relish.description}
                click={()=>this.deleteRelishHandler(index)} />
            })
          }
        </div>
      )
    } else {
      relishes = (
        <div>
          <h1>DON'T FORGET ABOUT RELISH!</h1>
          <button style={style} onclick={() => window.location.reload()}>OK</button>
        </div>
      )
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of ReactJS</h1>
        <h2>Day 5: Relish Reminder</h2>
          <div className="container">

            {relishes} 
            
          </div>
        </header>
      </div>
    );
  }
}
export default App;
