import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/slices/books/bookSlice';

function BookList() {
  const contStyle = {
    padding: '0 5em',
    overflow: 'auto',
    maxHeight: '265px',
  };

  const numStyle = {
    background: '#fff',
    padding: '1em',
    marginBottom: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.3em',
    marginTop: '.3em',
    color: '#121212',
  };

  const categoryStyle = {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: '.9em',
  };

  const autStyle = {
    color: '#4386bf',
  };

  const editStyle = {
    marginRight: '.8em',
    paddingRight: '.8em',
    borderRight: '2px solid #e9e8e8',
    color: '#4386bf',
    cursor: 'pointer',
  };

  const delStyle = {
    marginRight: '.8em',
    paddingRight: '.8em',
    borderRight: '2px solid #e9e8e8',
    color: '#4386bf',
    cursor: 'pointer',
  };

  const commStyle = {
    color: '#4386bf',
    cursor: 'pointer',
  };

  const progStyle = {
    display: 'flex',
    gap: '1em',
  };

  const spanStyle = {
    textAlign: 'center',
    color: 'gray',
  };

  const spansStyle = {
    fontSize: '2.2em',
    color: 'black',
  };

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
    <ul style={contStyle}>
      {Object.entries(books).map(([id, book]) => book.map((bookItem) => (
        <li key={id} style={numStyle}>
          <div>
            <p style={categoryStyle}>{bookItem.category}</p>
            <h2 style={titleStyle}>{bookItem.title}</h2>
            <p style={autStyle}>{bookItem.author}</p>
            <div>
              <button type="button" style={editStyle}>
                edit
              </button>
              <button
                type="button"
                style={delStyle}
                onClick={() => {
                  dispatch(deleteBook(id));
                }}
              >
                delete
              </button>
              <button type="button" style={commStyle}>
                comments
              </button>
            </div>
          </div>

          <div className="progress">
            <div style={progStyle}>
              <div className="progress-bar">
                <div className="progresss" />
              </div>
              <p style={spanStyle}>
                <span style={spansStyle}>64%</span>
                <br />
                Completed
              </p>
            </div>
            <div className="infos">
              <p className="current-chapter">Current chapter</p>
              <h3 className="chapter">chapter 17</h3>
              <button type="button" className="update">
                update progress
              </button>
            </div>
          </div>
        </li>
      )))}
    </ul>
  );
}

export default BookList;
