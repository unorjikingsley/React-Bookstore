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
    <div>
      <BookList />
      <div
        style={{
          width: '100%',
          background: 'black',
          height: '2px',
          marginTop: '10px',
          marginBottom: '10px',
        }}
      />

      <form>
        <h1>ADD NEW BOOK</h1>
        <div>
          <input
            type="text"
            value={author}
            placeholder="author"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <input
            type="text"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <select value={cat} onChange={(e) => setCat(e.target.value)}>
            <option value="action">Fiction</option>
            <option value="sci-fi">Non-Fiction</option>
            <option value="Economy">Drama</option>
            <option value="Comedy">Comedy</option>
          </select>

          <button
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
