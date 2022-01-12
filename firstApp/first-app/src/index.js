import React from "react";
import reactDom from "react-dom";

import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  );
}

reactDom.render(<BookList />, document.getElementById("root"));
