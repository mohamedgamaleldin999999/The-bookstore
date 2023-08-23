import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './eachBook.module.css';
import { removeBook } from '../../redux/books/bookslice';
import Percentage from './Percentage';

function EachBook(props) {
  const {
    category, title, author, id,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className={style.leftBody}>
      <ul>
        <li>{category}</li>
        <li>{title}</li>
        <li>{author}</li>
      </ul>

      <div className={style.button}>
        <button type="button">Comments</button>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
}

EachBook.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EachBook;
