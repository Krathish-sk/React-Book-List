import React, { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="book-create">
      <h3>Add a Book</h3>
        <label htmlFor="title" className="form-label mt-2">
          Title
        </label>
        <input
          type="text"
          className="input"
          required
          placeholder="Enter the book title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit" className="button mt-2">
          Add Book
        </button>
      </div>
    </form>
  );
}

export default BookCreate;
