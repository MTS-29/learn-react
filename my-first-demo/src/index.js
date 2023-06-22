import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY436_FMwebp_QL65_.jpg",
  author: "James Clear",
};

const secondBook = {
  title:
    "You Only Live Once: One for Passion Two for Love Three for Friendship",
  img: "https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY436_FMwebp_QL65_.jpg",
  author: "Stuti Changle",
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
      />
    </section>
  );
}
const Book = ({ img, title, author }) => {
  console.log(img, title, author);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
