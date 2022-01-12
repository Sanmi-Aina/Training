import react from "react";

const Book = (props) => {
  const { img, title, author, children } = props.book;
  const clickHandler = () => alert(title);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {children} */}
      <button type="button" onClick={clickHandler}>
        Click ME
      </button>
    </article>
  );
};

export default Book;
