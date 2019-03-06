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
      dataLoaded: false,
      query: ''
    }
  }

  async fetchBookData(query) {
    console.log(query);
    const resp = await axios.get(`${BASE_URL}${query}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    this.setState({ books: resp.data,  dataLoaded: true });
    console.log("fetch books ",this.state.books)
    // this.filterResults();
    return resp.data;
  }
  // filterResults() {
  //   this.state.books.items.map(book => {
  //     console.log(book.volumeInfo.publisher);
  //   })
  // }
  async componentDidMount() {
    // await this.fetchBookData();
    console.log('display message to do a search')
  }
   onSubmit= async(e)=> {
    e.preventDefault();
    // this.setState({ query: value });
    console.log(this.state.query)
     await this.fetchBookData(this.state.query);
  }
  
  updateBook=(e)=> {
    const {name, value} = e.target;
  
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
          <SearchBar onSubmit={this.onSubmit} onChange={this.updateBook} value={this.state.query} name="query" />
          <BookList books={this.state.books} dataLoaded={this.state.dataLoaded} />
        </main>
      </div>
      
    );
  }
}

export default App;
