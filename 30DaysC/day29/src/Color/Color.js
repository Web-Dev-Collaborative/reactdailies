
import React from 'react';

const colour = (props) => {
    let newColor = (
        `rgb(${props.c1}, ${props.c2}, ${props.c3})`
        
        // "rgb(" + props.c1 + ", " + props.c2 + ", " + props.c3 + ")"
    );
    
    const outputStyle = {
        textAlign: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'black',
        paddingTop: '20vw'
    };

    const divStyle = {
        margin: '40px auto',
        backgroundColor: newColor,
        textAlign: 'center',
        width: '50vw',
        height: '50vw',
        borderRadius: '100%',
        display: 'inline-block'
        };
    
    return (
        <div style={divStyle}
            onClick={props.clicked}>
            <h1 style={outputStyle}>
                {newColor}
            </h1>

        </div>
    )


}

export default colour;