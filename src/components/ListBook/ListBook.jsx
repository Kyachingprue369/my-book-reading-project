import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoPeopleOutline } from 'react-icons/io5';
import { MdOutlineContactPage } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ListBook = ({ book }) => {
  const { image, bookId, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
  console.log(book)
  return (
    <div>
      <div className="hero border rounded-xl place-items-start my-3 h-[277px]">
        <div className="hero-content flex-col lg:flex-row">
          <div className=' p-8 rounded-xl md:mr-12 bg-gray-300'>
            <img
              src={image}
              className="w-[129.32px] h-[172px] rounded-sm " />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p className="py-2">
              By: {author}
            </p>
            <div className='flex items-center gap-3'>
              <p className='font-bold'>Tag:</p>
              {
                tags.map((tag, index) => <button className='py-1 px-3 text-green-600 rounded-full mr-2 bg-gray-200' key={index}>#{tag}</button>)
              }
              <div className='flex gap-2 items-center'>
                <CiLocationOn />
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
            <div className='flex items-center gap-5 py-3 border-b-2'>
              <div className='flex items-center gap-2'>
                <IoPeopleOutline />
                <p>Publisher: {publisher}</p>
              </div>
              <div className='flex items-center gap-3'>
                <MdOutlineContactPage />
                <p>Page {totalPages}</p>
              </div>
            </div>
            <div className='flex items-center mt-3 gap-4'>
              <button className='py-1 px-3 rounded-full bg-blue-300'>Category:{category}</button>
              <button className='py-1 px-3 rounded-full bg-orange-300'>Rating:{rating}</button>
              <Link to={`/books/${bookId}`}> <button className='py-1 px-3 rounded-full bg-green-300'>View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBook;