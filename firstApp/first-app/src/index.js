import React from "react";
import reactDom from "react-dom";

import "./index.css";

const firstBook = {
  title: `Atomic Habits`,
  img: "https://images-na.ssl-images-amazon.com/images/I/91S%2BnNHdHSL._AC_UL200_SR200,200_.jpg",
  author: "James Clear",
};
const secondBook = {
  title: `Verity`,
  img: "https://images-na.ssl-images-amazon.com/images/I/61%2BnBGbGW7L._AC_UL200_SR200,200_.jpg",
  author: "Colleen Hoover",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non porro
          modi aperiam placeat, unde accusamus ea, reiciendis ipsum, id
          voluptates rem asperiores fugit qui minima sunt quisquam fuga esse.
        </p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
