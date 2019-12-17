import React from 'react';

const thought = ( props ) => {


  const outputStyle = {
  textAlign: 'center',
  fontSize: '20px',
  color: 'white'
  };


    return (
        <div>
            <li style={outputStyle}>
                {props.thought} ▶ {props.time}
            </li>
            <button className="btn" onClick={props.click}>Delete Thought</button>
        </div>

        

  );
};

export default thought;
