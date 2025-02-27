import React from 'react';
import books from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 rounded-xl mb-12 md:h-[554px]">
        <div className="hero-content flex-col w-full gap-24 lg:flex-row-reverse">
          <img
            src={books}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-7">Book to freshen up <br /> your bookself</h1>
            <button className="btn bg-green-600 text-xl text-white font-bold mt-12">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;