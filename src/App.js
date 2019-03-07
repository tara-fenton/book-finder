import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';
import axios from 'axios';
import { throwError } from 'rxjs';

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      dataLoaded: false,
      query: '',
      error: ''
    }
  }

  async fetchBookData(query) {
    try {
      if(this.state.error) {
        this.setState({
          error: ''
        })
      }
      const resp = await axios.get(`${BASE_URL}${query}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
      this.setState({ books: resp.data, dataLoaded: true });
      console.log("data ",resp.data)
      return resp.data;
    }
    catch (e) {
      this.setState({
        error: 'There is an error in your search, please try again'
      })
    }
    
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await this.fetchBookData(this.state.query);
  }

  updateBook = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <h1>Book Finder</h1>
          <div className="error-message">{this.state.error}</div>
          <SearchBar onSubmit={this.onSubmit} onChange={this.updateBook} value={this.state.query} name="query" />
          <BookList books={this.state.books} dataLoaded={this.state.dataLoaded} />
        </main>
      </div>

    );
  }
}

export default App;
