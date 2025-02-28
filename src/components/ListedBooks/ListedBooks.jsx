import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../../Utility/AddToDb';
import { getStoredWishList } from '../../Utility/WishList';
import ListBook from '../ListBook/ListBook';

const ListedBooks = () => {
  const [readLists, setReadLists] = useState([]);
  const [wishLists, setWistLists] = useState([]);
  const allBooks = useLoaderData();

  //Ideally we will directly get the read book list from the database 

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedWishList = getStoredWishList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));
    const storedWishListInt = storedWishList.map(id => parseInt(id));
    //Worst Way
    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
    const wishBookList = allBooks.filter(wished => storedWishListInt.includes(wished.bookId));
    setReadLists(readBookList);
    setWistLists(wishBookList);
  }, [])

  return (
    <div className='w-11/12 mx-auto my-5'>
      <h2 className='text-3xl font-bold text-center py-5 bg-gray-300 rounded-xl mb-5'>Books</h2>
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div>
            {
              readLists.map(book => <ListBook key={book.bookId} book={book}></ListBook>)
            }
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div>
            {
              wishLists.map(book => <ListBook key={book.bookId} book={book}></ListBook>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;