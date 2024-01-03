import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle("");
    setDescription("");
    console.log(newNote);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="text-field"
          placeholder="Note Title..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note Description..."
        />
        <button type="submit" className="btn btn--primary ">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
