import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Books from './books/bookslice';
import Categories from './categories/categoriesSlice';

const reducerReal = combineReducers({
  Books,
  Categories,
});

const theStore = configureStore({ reducer: reducerReal });

export default theStore;
