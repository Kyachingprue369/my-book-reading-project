import React from 'react';
import { IoIosStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { bookId, image, tags, bookName, author, publisher, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className='w-11/12 mx-auto my-6'>
        <div className="card bg-base-100 w-96 border-solid border-2 border-indigo-600">
          <figure className='bg-slate-300 rounded-xl p-5 m-6'>
            <img
              className='w-[124px] h-[166px] mx-auto my-3'
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className='flex gap-2'>
              {
                tags.map((tag, idx) => <button className='btn bg-green-100 font-bold text-green-700 rounded-full' key={idx}>{tag}</button>)
              }
            </div>
            <h2 className="card-title py-3">{bookName}</h2>
            <p className='mb-2'>By: {author}</p>
            <div className='border-t-2 border-black border-dashed pt-3 flex justify-between items-center'>
              <p>{publisher}</p>
              <div className='flex items-center gap-2'>
                <p>{rating}</p>
                <IoIosStarOutline className='text-xl' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;