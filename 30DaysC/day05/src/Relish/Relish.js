import React from 'react';

const relish = (props) => {

  const outputStyle = {
  textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
  };

  const divStyle = {
  border: '4px solid white',
  display: 'inline-block',
  margin: '10px',
  padding: '10px',
  alignItems: 'center',
  maxWidth: '300px',
  };

  const buttonStyle = {
  border: '2px solid white',
  borderRadius: '0px',
  display: 'inline-block',
  margin: '10px',
  maxWidth: '100px',
  maxHeight: '40px'
  };

    return (
        <div style={divStyle}>
            <h3 style={outputStyle}>{props.name}</h3>
            <p>{props.description}</p>

            <button style={buttonStyle} onclick={props.click}>
                Not Right Now
            </button>
        </div>
    )
    
    
    
    
}


export default relish;