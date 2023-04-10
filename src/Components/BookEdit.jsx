import React,{useState} from "react";

function BookEdit({book, onEdit}) {
  const [title, setTitle] = useState(book.title);

  const handleSubmit = (e)=>{
    e.preventDefault();
    onEdit(book.id, title);

  }

  return (
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input"
          type="text"  
          onChange={(e)=> setTitle(e.target.value)} 
          value={title} />
        <button type="submit" className="button is-primary">Save</button>
      </form>
  );
}

export default BookEdit;
