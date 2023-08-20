import React from 'react';
import Nav from './components/Nav';
import ActionNameButton from './components/BookComponent/ActionNameButton';
import style from './BookPage.module.css';
import AddBook from './components/BookComponent/AddBook';

function BookPage() {
  return (
    <>
      <Nav />
      <div className={style.body}>
        <div className={style.action}>
          <ActionNameButton
            userName="Olaoluwa Owoeye"
            gameName="Sokudo"
            category="Moon"
          />
        </div>
      </div>
      <AddBook />
    </>
  );
}

export default BookPage;
