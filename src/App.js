import { useEffect, useState } from "react";
import "./styles.css";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const createBook = async (title) => {
    const response = await axios.put("http://localhost:3001/books", {
      title
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...books,
          title: newTitle
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div>
      <div className="text-center">
        <h2>React Book Apllication</h2>
      </div>
      <div className="app">
        <h2 style={{ paddingLeft: "12px" }}>Reading List</h2>
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </div>
  );
}
