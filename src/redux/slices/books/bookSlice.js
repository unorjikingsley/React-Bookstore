// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

// const bookSlice = createSlice({
//   name: 'book',
//   initialState: [],
//   reducers: {
//     deleteBook: (state, action) => {
//       const bookTitle = action.payload;
//       state.myBooks = state.myBooks.filter((book) => book.title !== bookTitle);
//     },
//     addBook: (state, action) => {
//       const book = action.payload;
//       state.myBooks.push(book);
//     },
//   },
// });

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const book = action.payload;
      state.books.push(book);
    },
  },
});

export const { deleteBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
