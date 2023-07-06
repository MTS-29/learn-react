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
    title: "You Only Live Once",
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
  const someValue = "shakeAndBake";
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, displayValue } = props;
  // console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Click me</button>
      <h4>{author}</h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);

//LEARNING PART
// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
//     // console.log(e.target.name);
//   };

//   const handleButtonClick = () => {
//     alert("Handle button click");
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//   };
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={handleFormInput}
//         />
//         <br></br>
//         <button onClick={() => console.log("Click mr")} type="button">
//           Click me
//         </button>
//       </form>
//     </section>
//   );
// };
