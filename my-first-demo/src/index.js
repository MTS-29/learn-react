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
// console.log(books);
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("Handle from input");
  };
  const handleBottonClick = () => {
    alert("Handle button input");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: "1rem 0" }}
        />
      </form>
      <button onClick={handleBottonClick}>Click me</button>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  // console.log(props);
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
