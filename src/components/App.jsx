import { Component } from 'react';
import Form from './Form/Form';
import WordsList from './WordsList/WordsList';
import { Container } from '@mui/material';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    words: [],
    filter: '',
  };
  addWord = newWord => {
    this.setState(prevState => {
      return {
        words: [...prevState.words, newWord],
      };
    });
  };
  deleteWord = id => {
    this.setState(prevState => {
      return {
        words: prevState.words.filter(word => word.id !== id),
      };
    });
  };
  handleSetFilter = e => {
    this.setState({ filter: e.target.value });
  };
  handleFilterWords = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.words.filter(word =>
      // word.ukr
      //   .toLowerCase()
      //   .includes(normalizedFilter) ||
      `${word.eng}${word.ukr}`.toLowerCase().includes(normalizedFilter)
    );
  };
  render() {
    return (
      <Container maxWidth="xl">
        <Form addWord={this.addWord} />
        <Filter
          handleSetFilter={this.handleSetFilter}
          filter={this.state.filter}
        />
        <WordsList
          words={this.handleFilterWords()}
          deleteWord={this.deleteWord}
        />
      </Container>
    );
  }
}
