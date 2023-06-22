import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const title = "Atomic Habits";
const img =
  "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY436_FMwebp_QL65_.jpg";
const author = "James Clear";

function BookList() {
  return (
    <section className="booklist">
      <Book img={img} title={title} author={author} />
      <Book img={img} title={title} author={author} />
    </section>
  );
}
const Book = (props) => {
  console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
