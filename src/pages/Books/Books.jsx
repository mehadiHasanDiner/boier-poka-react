import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const booksData = useLoaderData();
  console.log(booksData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {booksData.map((book) => (
        <Book key={book.bookId} book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
