import React from 'react';

const ValidationComponent = props => {
  let text = 'Text too short';
  if (props.length > 5) {
    text = 'Text long enough';
  }
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default ValidationComponent;
