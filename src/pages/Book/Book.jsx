import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ book }) => {
  console.log(book);
  const {
    bookName,
    author,
    image,
    publisher,
    rating,
    review,
    tags,
    category,
    yearOfPublishing,
  } = book;
  return (
    <div className="card bg-base-100  shadow-md p-6 border border-gray-300">
      <figure className="bg-gray-200 w-2/3 mx-auto p-4">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-center gap-10">
          {tags.map((tag) => (
            <button>{tag}</button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p>Book by: {publisher}</p>
        <div className="border-t border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaStarHalfStroke />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
