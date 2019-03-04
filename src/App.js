import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        <main>
          <SearchBar />
          <BookList />
        </main>
      </div>
    );
  }
}

export default App;
