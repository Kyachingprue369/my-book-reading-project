import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { bookId } = useParams();
  const Id = parseInt(bookId)


  const data = useLoaderData();
  const book = data.find(book => book.bookId === Id)
  const { bookName, image, author, publisher, review, tags, rating, totalPages, yearOfPublishing } = book;

  return (
    <div className='w-11/12 mx-auto my-5'>
      <div className="hero bg-base-100 h-[711px]">
        <div className="hero-content flex-col lg:flex-row">
          <div className='mr-7 pr-10'>
            <img
              src={image}
              className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{bookName}</h1>
            <p className='text-2xl py-4'>By: {author}</p>
            <p className='text-xl border-y-2 py-3 border-gray-400'>Fiction</p>
            <p className="py-3 text-gray-500">
              <span className='font-bold text-black'>Review:</span> {review}
            </p>
            <div className='flex items-center gap-4 my-3 border-b-2 border-gray-400 pb-5'>
              <p className='text-xl'>Tag </p>
              <div className='flex gap-3'>
                {
                  tags.map((tag, index) => <button key={index} className='btn bg-gray-200 rounded-full text-green-500'>#{tag}</button>)
                }
              </div>
            </div>
            <div className='leading-10 mb-5 text-gray-500'>
              <p>Number of Pages :<span className='text-black pl-11 font-bold'>{totalPages}</span></p>
              <p>Publisher: <span className='text-black pl-24 font-bold'>{publisher}</span></p>
              <p>Year of Publishing: <span className='text-black pl-9 font-bold'>{yearOfPublishing}</span></p>
              <p>Rating: <span className='text-black pl-28 font-bold'>{rating}</span></p>
            </div>
            <div className='flex gap-3'>
              <button className="btn text-white bg-green-400">Read</button>
              <button className="btn text-white bg-green-400">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;