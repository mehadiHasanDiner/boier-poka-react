import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookIdNo = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookIdNo);
  console.log(singleBook);
  const { image, bookName } = singleBook || {};
  return (
    <div className="my-10">
      <img className="w-2/6" src={image} alt="" />
      <h2 className="text-3xl">{bookName}</h2>
      <button className="btn btn-info mr-2">Mark as Read</button>
      <button className="btn btn-accent">Add to Wishlist</button>
    </div>
  );
};

export default BookDetails;
