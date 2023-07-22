import { Component } from 'react';
import Form from './Form/Form';

export default class App extends Component {
  state = {
    words: [],
  };
  addWord = newWord => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, newWord],
      };
    });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Form addWord={this.addWord} />
      </div>
    );
  }
}
