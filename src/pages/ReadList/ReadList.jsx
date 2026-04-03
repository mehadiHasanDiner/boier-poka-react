import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBookFromLS } from "../../utility/addToLS";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookId = getBookFromLS();
    const storedBookIdToNo = storedBookId.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      storedBookIdToNo.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPages);
    }
    if (type === "ratings") {
      const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortByRatings);
    }
  };
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read: {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>my wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
