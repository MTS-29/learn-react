import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Atomic Habits";
const img =
  "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY436_FMwebp_QL65_.jpg";
const alternate = "Atomic Habits";
const author = "James Clear";

//parameter
const someFunc = (para1, para2) => {
  console.log(para1, para2);
};

//argument
someFunc("Job", "Developer");

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={alternate} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
