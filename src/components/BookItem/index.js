import React from 'react'
import './index.css'

const BookItem = ({ book }) => {

  return (
    <div className="book-item">
      <h3>{book.volumeInfo.title}</h3>
      <h6>Authors: {book.volumeInfo.authors.join(", ")}</h6>
      <h6>Publisher: {book.volumeInfo.publisher}</h6>
      <div className="book-info">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <a href={book.volumeInfo.infoLink}>More Info</a>
      </div>
    </div>
  );
};

export default BookItem;
