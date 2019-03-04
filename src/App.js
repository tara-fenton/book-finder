import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';
import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      dataLoaded: false
    }
  }

  async fetchBookData() {
    const query = 'quilting';
    const resp = await axios.get(`${BASE_URL}${query}`);
    this.setState({ books: resp.data,  dataLoaded: true });
    console.log("fetch books ",this.state.books)
    // this.filterResults();
    return resp.data;
  }
  filterResults() {
    this.state.books.items.map(book => {
      console.log(book.volumeInfo.publisher);
    })
  }
  async componentDidMount() {
    await this.fetchBookData();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <main>
          <SearchBar />
          <BookList books={this.state.books} dataLoaded={this.state.dataLoaded} />
        </main>
      </div>
    );
  }
}

export default App;
