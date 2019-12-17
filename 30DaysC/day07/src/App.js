import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pet from './Pet/Pet';

class App extends Component {

  state = {
    pets: [
    { animal: 'Cat', animalname: 'Chips', owner: 'Jenny', illness: 'scurvy', date: "23/05/2015" },
    { animal: 'Fish', animalname: 'Flubber', owner: 'John', illness: 'Elephantitis', date: "23/05/2015" },

  ],
}
  
  
  addPetHandler = (event) => {
    event.preventDefault();
    const pets = [...this.state.pets];
    const newpet = {};
      
    newpet.animal = this.newPetAnimal.value;
    newpet.animalname = this.newPetName.value;
    newpet.owner = this.newPetOwner.value;
    newpet.illness = this.newPetIllness.value;
    
    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();;
    newpet.date = (day + '/' + monthIndex + '/' + year);
    
    pets.push(newpet);
    this.setState({ pets: pets })
    
    this.newPetAnimal.value = null;
    this.newPetName.value = null;
    this.newPetOwner.value = null;
    this.newPetIllness.value = null;
  };



  render() {

  const style = {
  border: '2px solid white',
  borderRadius: '0px',
  width: '100px',
  height: '60px',
  fontSize: '30px'
  };

 let pets = (
       <div>
        {this.state.pets.map((pet) => {
          return <Pet
          animal={pet.animal}
          animalname={pet.animalname}
          owner={pet.owner}
          illness={pet.illness}
          date={pet.date}/>
        })
       .reverse()
     } 
      </div> 
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1>30 days of ReactJS</h1>
        <h2>Day 7: Vet Log App</h2>
          <div className="container">
{/* Form */}
        <form
        className="form"
        onSubmit={(event) => this.addPetHandler(event)}>   
        <h2>Add Pet Record</h2> 

{/* Select Animal Dropdown */}
          <select
          className="textfield"
          ref={(input) => {this.newPetAnimal = input}}>
              <option value="" disabled selected>Animal / Species</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rodent">Rodent</option>
              <option value="Fish">Fish</option>
          </select>

          <input 
            type="text"
            className="textfield"
            placeholder="Pet Name"
            ref={(input) => {this.newPetName = input}} />

          <input 
            type="text"
            className="textfield"
            placeholder="Owner Name"
            ref={(input) => {this.newPetOwner = input}} />

          <input 
            type="text"
            className="textfield"
            placeholder="Illness"
            ref={(input) => {this.newPetIllness = input}} />
         
          <input
            className="mainbtn" 
            type="submit"
            value="Add Pet" />
          
        </form>
        <ul>
          {pets}
        </ul>

          </div>
        </header>
      </div>
    );
  }
}
export default App;
