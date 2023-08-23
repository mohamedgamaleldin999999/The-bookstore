import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import { Category } from '../redux/categories/categoriesSlice';

function CategoriesPage() {
  const dispatch = useDispatch();

  const position = useSelector((state) => state.Categories);
  return (
    <>
      <Nav />
      <div>Categories</div>
      <button type="button" onClick={() => dispatch(Category())}>
        Check Status
      </button>
      <p>{position}</p>
    </>
  );
}
export default CategoriesPage;