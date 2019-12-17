import React from 'react';

const pet = ( props ) => {

  const outputStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: 'black'
  };

  const divStyle = {
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'white',
  minWidth: '100px',
  padding: '20px',
  margin: '10px',
  display: 'inline-block'
  };

 return (
     <div style={divStyle}>
         <ul>
             <li style={outputStyle}> Animal: {props.animal}</li>
             <li style={outputStyle}> Name: {props.animalName}</li>
             <li style={outputStyle}> Owner: {props.owner}</li>
             <li style={outputStyle}> Illness: {props.illness}</li>
             <li style={outputStyle}> Date: {props.date}</li>
         </ul>
    </div>
    
  );
};

export default pet;
