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
    <div >
      {props.text.map(char => {
        return <div style={charComponentStyle}>{char}</div>;
      })}
    </div>
  );
};

export default CharComponent;
