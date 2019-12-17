import React from 'react';

const fruitFact = (props) => {
    const outputStyle = {
        textAlign: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    };

    const divStyle = {
        width: '150px',
        height: '150px',
        border: '4px solid white',
        display: 'inline-block',
        margin: '10px',
        padding: '10px'
    };

    return (
        <div style={divStyle}>
            <h2 style={outputStyle}>{props.fruit}</h2>
            <p>{props.fact}</p>
        </div>

    );
    
    
};

export default fruitFact;