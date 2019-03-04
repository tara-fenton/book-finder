import React, { Component } from 'react'
//Each item in the list should include the 
//book's author, title, and publishing company, as well as a picture of the book.
export default class BookItem extends Component {
  render() {
    return (
      <div>
        <h3>Book Title</h3>
        <h3>Author</h3>
        <h3>publishing company</h3>
        <img src=''/>
      </div>
    )
  }
}
