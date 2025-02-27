import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])
  return (
    <div className='w-11/12 mx-auto mt-10 my-6'>
      <h3 className='text-center font-bold text-3xl'>Books</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          books.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;