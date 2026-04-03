import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToLS } from "../../utility/addToLS";

const BookDetails = () => {
  const { id } = useParams();
  const bookIdNo = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookIdNo);
  console.log(singleBook);
  const { image, bookName } = singleBook || {};

  const handleMarkAsRead = (id) => {
    /**
     * store with id
     * where to store
     * array or collection
     * if book already exist then show a alert
     * if book not exist then push in the collection or array.
     * */

    addToLS(id);
  };
  return (
    <div className="my-10">
      <img className="w-2/6" src={image} alt="" />
      <h2 className="text-3xl">{bookName}</h2>
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-info mr-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-accent">Add to Wishlist</button>
    </div>
  );
};

export default BookDetails;
