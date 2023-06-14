import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OkebGlTDQ0WA4QdH2dLm/books/';

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
  isLoading: true,
  errMsg: false,
  addMsg: false,
  delMsg: false,
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const resp = await axios(url);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error has occurred while getting data');
  }
});

export const addBook = createAsyncThunk(
  'addBooks/addBook',
  async (book, thunkAPI) => {
    try {
      const resp = await axios(url, {
        method: 'POST',
        data: JSON.stringify(book),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (resp.status === 201) {
        thunkAPI.dispatch(getBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Failed to add book',
      );
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (itemId, thunkAPI) => {
    try {
      const resp = await axios(`${url}${itemId}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (resp.status === 201) {
        thunkAPI.dispatch(getBooks());
        return null;
      }
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete book');
    }
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },

    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },

    [getBooks.rejected]: (state) => {
      state.isLoading = false;
      state.errMsg = true;
    },

    [addBook.pending]: (state) => {
      state.addMsg = true;
    },

    [addBook.fulfilled]: (state, action) => {
      state.addMsg = false;
      state.books = action.payload;
    },

    [addBook.rejected]: (state) => {
      state.addMsg = false;
    },

    [deleteBook.pending]: (state) => {
      state.delMsg = true;
    },

    [deleteBook.fulfilled]: (state, action) => {
      state.delMsg = false;
      state.books = action.payload;
    },

    [deleteBook.pending]: (state) => {
      state.delMsg = false;
    },
  },
});

// export const { deleteBook, addBook } = bookSlice.actions;
export default bookSlice.reducer;
