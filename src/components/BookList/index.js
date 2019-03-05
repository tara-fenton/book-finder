import React, { Component } from 'react'
import BookItem from '../BookItem'
import './index.css'

export default class BookList extends Component {
  
  render() {
    return (
      <div className="book-list">
        {this.props.dataLoaded ? (
          this.props.books.items.map(book => {
            return <BookItem book={book} key={book.id} />
          })
        ) : (
            <h2>Try searching for a book!</h2>
          )}

      </div>
    )
  }
}
