import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { deleteBook, bookEndPoint } from '../../components/API';

const initialState = [];

export const booksFromAPI = createAsyncThunk('bookstore/booksFromAPI', async () => {
  const response = await axios.get(bookEndPoint());
  if (response.status === 200) {
    return Object.keys(response.data).map((valu) => ({
      item_id: valu,
      ...response.data[valu][0],
    }));
  }
  throw new Error('Failed to fetch books');
});

export const addBook = createAsyncThunk('bookstore/addBook', async (book) => {
  const response = await axios.post(bookEndPoint(), book);
  if (response.status === 201) {
    return book;
  }
  throw new Error('Book save was unsuccessful');
});

export const removeBook = createAsyncThunk('bookstore/removeBook', async (id) => {
  const response = await axios.delete(deleteBook(id));
  if (response.status === 201) {
    return id;
  }
  throw new Error('Book not deleted');
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(booksFromAPI.fulfilled, (state, action) => [...action.payload])
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => state.filter((book) =>
        book.item_id !== action.payload));
  },
});

export default booksSlice.reducer;
