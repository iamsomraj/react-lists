import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputString: '',
    lengthString: 0,
    charArray: []
  };
  textInputChangeHandler = event => {
    this.setState({
      inputString: event.target.value,
      lengthString: event.target.value.length,
      charArray: event.target.value.split('')
    });
  };

  deleteCharHandler = index => {
    let inputStringArray =  this.state.charArray;
    inputStringArray.splice(index,1)
    let inputString = inputStringArray.join('');
    let length = inputString.length;
    
    this.setState({
      inputString: inputString,
      lengthString: length,
      charArray: inputStringArray
    });
  }

  renderHeader = () => {
    return (
      <div>
        <label htmlFor="text-input">
          <h1>Enter text :</h1>
        </label>
        <input
          name="text-input"
          type="text"
          onChange={this.textInputChangeHandler}
          value={this.state.inputString}
        />
        <h1>
          <p>Length - {this.state.lengthString}</p>
        </h1>
        <ValidationComponent length={this.state.lengthString} />
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.state.charArray.map( (char,index) => {
        return <CharComponent text={char} key={index} clicked={() => this.deleteCharHandler(index)}/>;
      })}
      </div>
    );
  }
}

export default App;
