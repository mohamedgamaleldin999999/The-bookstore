import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookPage from './components/BookPage';
import CategoriesPage from './components/CategoriesPage';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={(<BookPage />)}
        />

        <Route
          path="/categories"
          element={<CategoriesPage />}
        />
      </Routes>
    </>
  );
}

export default App;
