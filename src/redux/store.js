// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/books/bookSlice';
import categorySlice from './categories/categorySlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categorySlice,
  },
});

export default store;
