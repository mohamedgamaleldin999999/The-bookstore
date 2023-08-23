import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import Books from './books/bookslice';
import Categories from './categories/categoriesSlice';

const reducer = combineReducers({
  Categories,
  Books,
});

const theStore = configureStore(reducer);

export default theStore;
