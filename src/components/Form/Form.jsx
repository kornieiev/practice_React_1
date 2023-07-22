import { Component } from 'react';
import { nanoid } from 'nanoid';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import { Button } from '@mui/material';
const WordsForm = styled.form`
  width: 360px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default class Form extends Component {
  state = {
    ukr: '',
    eng: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newWord = { ...this.state, id: nanoid(5) };
    this.props.addWord(newWord);
    this.setState({
      ukr: '',
      eng: '',
    });
  };

  render() {
    return (
      <div>
        <WordsForm onSubmit={this.handleSubmit}>
          <TextField
            id="standard-basic"
            label="Ukrainian"
            variant="standard"
            name="ukr"
            value={this.state.ukr}
            onChange={this.handleChange}
          />
          <TextField
            id="standard-basic"
            label="English"
            variant="standard"
            name="eng"
            value={this.state.eng}
            onChange={this.handleChange}
          />
          <Button type="submit" variant="contained">Add</Button>
        </WordsForm>
      </div>
    );
  }
}
