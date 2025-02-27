import React from 'react';

const Book = ({ book }) => {
  const { image, tags, bookName, author, publisher, rating } = book;
  return (
    <div className='w-11/12 mx-auto my-6'>
      <div className="card bg-base-100 w-96 border-solid border-2 border-indigo-600">
        <figure>
          <img
            className='w-[326px] h-[230px] mx-auto object-cover rounded-xl mt-6'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className='flex gap-2'>
            {
              tags.map((tag, idx) => <button className='btn bg-slate-300' key={idx}>{tag}</button>)
            }
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className='border-t-2 border-black border-dashed'>
            <p>{publisher}</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;