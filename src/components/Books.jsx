import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from './BookList';
import { addBook } from '../redux/slices/books/bookSlice';

function Books() {
  const { addMsg } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('');

  return (
    <div className="books">
      <BookList />

      <form className="form">
        <div className="form-line" />
        <h1 className="form-title">ADD NEW BOOK</h1>
        <div className="form-body">
          <input
            type="text"
            value={author}
            className="author"
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            style={{
              border: 'none',
              padding: '.5em',
              flex: 1,
            }}
            required
          />

          <select className="select" value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="Fiction">Fiction</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Romance">Romance</option>
            <option value="action">action</option>
          </select>

          <button
            className="submit"
            type="submit"
            onClick={async (e) => {
              e.preventDefault();

              if (author !== '' && title !== '') {
                const book = {
                  item_id: uuidv4(),
                  title,
                  author,
                  category: cat,
                };

                dispatch(addBook(book));
                setAuthor('');
                setTitle('');
              }
            }}
          >
            {addMsg && <div>Adding Book</div>}
            {!addMsg && <div>ADD BOOK</div>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Books;
