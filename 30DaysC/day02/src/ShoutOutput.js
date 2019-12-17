import React from 'react';

const shoutOutput = (props) => {
    const outputStyle = {
        textAlign: 'center',
        color: 'pink',
        fontSize: '100px',
        marginTop: '-30px',
        padding: '10px'
    };

    const divStyle = {
        display: 'inline-block',
    };

    return (
        <div
            style={divStyle}>
            <h1
                type="text"
                style={outputStyle}
                >{props.shout} </h1>
        </div>
    )
}

export default shoutOutput;