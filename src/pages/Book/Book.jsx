import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";

const Book = ({ book }) => {
  console.log(book);
  const { bookName, author, image, publisher, rating, review, category } = book;
  return (
    <div className="card bg-base-100  shadow-md p-6 border border-gray-300">
      <figure className="bg-gray-200 w-2/3 mx-auto p-4">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
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
