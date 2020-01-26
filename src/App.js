import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    lengthString: 0,
    charArray: []
  };
  textInputChangeHandler = event => {
    this.setState({
      lengthString: event.target.value.length,
      charArray: event.target.value.split('')
    });
  };

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
        <CharComponent text={this.state.charArray} />
      </div>
    );
  }
}

export default App;
