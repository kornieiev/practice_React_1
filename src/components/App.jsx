import { Component } from 'react';
import Form from './Form/Form';
import WordsList from './WordsList/WordsList';
import { Container } from '@mui/material';

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
      <Container maxWidth="xl">

        <Form addWord={this.addWord} />
        <WordsList words={this.state.words}/>
      </Container>
    );
  }
}
