import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY436_FMwebp_QL65_.jpg",
    author: "James Clear",
    id: 1,
  },
  {
    title:
      "You Only Live Once: One for Passion Two for Love Three for Friendship",
    img: "https://m.media-amazon.com/images/I/71dNsRuYL7L._AC_UY436_FMwebp_QL65_.jpg",
    author: "Stuti Changle",
    id: 2,
  },
  {
    title: "A Gentelmen in Moscow",
    img: "https://m.media-amazon.com/images/I/51k+lXZyJ6L._SY344_BO1,204,203,200_.jpg",
    author: "Amor Towles",
    id: 3,
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author, id } = book;
        return <Book img={img} title={title} author={author} key={id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
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
