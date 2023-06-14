import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList() {
  const { books, isLoading, errMsg } = useSelector((store) => store.book);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div style={{ marginTop: '50px' }}>Loading...</div>
    );
  }

  if (errMsg) {
    return (
      <div style={{ marginTop: '50px' }}>Failed to load...</div>
    );
  }

  return (
    <ul>
      {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
        <li key={id}>
          <div>
            <p>{bookItem.category}</p>
            <h2>{bookItem.title}</h2>
            <p>{bookItem.author}</p>
            <div>
              <button type="button">edit</button>
              <button
                type="button"
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                delete
              </button>
              <button type="button">comments</button>
            </div>
          </div>
          <div>
            <div />
          </div>
        </li>
      )))}
    </ul>
  );
}

export default BookList;
