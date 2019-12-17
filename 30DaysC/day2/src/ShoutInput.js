import React from 'react';

const shoutInput = (props) => {
    const inputStyle = {
        textAlign: 'center',
        fontSize: '20px',
        margin: '50px',
        width: '40vw',
    };

    const divStyle = {
        display: 'inline-block',
    };

    return (
        <div
            style={divStyle}>
            <input
                type="text"
                style={inputStyle}
                onChange={props.changed} />
        </div>
    )


}
export default shoutInput;