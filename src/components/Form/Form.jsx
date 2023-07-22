import { Component } from 'react';
import { nanoid } from 'nanoid';

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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="ukr"
            value={this.state.ukr}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="eng"
            value={this.state.eng}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
