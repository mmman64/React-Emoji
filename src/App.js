import React, { Component } from 'react';
import { SearchBar } from './components/searchbar/searchbar.component';
import { CardGrid } from './components/card-grid/card-grid.component';
import './App.css';

// testing

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      emojis: [],
    };
  }

  componentDidMount() {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    fetch('http://localhost:8080/emoji-info', {
      headers: myHeaders,
    })
      .then(response => response.json())
      .then(emojis => this.setState({ emojis }));
  }

  handleSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { emojis, searchField } = this.state;
    const filteredEmojis = emojis.filter(emoji =>
      emoji.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>React &amp; Emojis!!!</h1>
        <SearchBar placeholder="Search Emojis..." handleSearch={this.handleSearch} />
        <CardGrid emojis={filteredEmojis} />
      </div>
    );
  }
}

export default App;
