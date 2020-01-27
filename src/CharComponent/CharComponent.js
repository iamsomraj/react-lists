import React from 'react';

const CharComponent = props => {
  const charComponentStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  return (
    <div style={charComponentStyle} onClick={props.clicked} >
      {props.text}
    </div>
  );
};

export default CharComponent;
