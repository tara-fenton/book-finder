import React, { Component } from 'react'
import BookItem from '../BookItem'

export default class BookList extends Component {
  
  render() {
    return (
      <div>
        {this.props.dataLoaded ? (
          this.props.books.items.map(book => {
            return <BookItem book={book} key={book.id} />
          })
        ) : (
            <h2>Loading</h2>
          )}

      </div>
    )
  }
}
