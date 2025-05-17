import { useState } from "react";
import classes from "./NewPost.module.css";

const NewPost = ({ onCancel, onAddPost }) => {
  const [enteredBody, setEnteredBodyy] = useState("");
  const [author, setAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBodyy(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: author,
    };
    onAddPost(postData);
    onCancel();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
