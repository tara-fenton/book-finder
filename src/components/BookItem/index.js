import React from 'react'

const BookItem = ({ book }) => {

  return (
    <div>
        <h3>{book.volumeInfo.title}</h3>
        <h6>Authors: {book.volumeInfo.authors.join(", ")}</h6>
        <h6>Publisher: {book.volumeInfo.publisher}</h6>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      </div>
  );
};

export default BookItem;
