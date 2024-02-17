import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  // const handleNewNote = (newNote) => {
  //   dispatch({ type: "add", payload: newNote });
  //   // setNotes((prevNotes) => [...prevNotes, newNote]);
  // };

  // const handleDeleteNote = (id) => {
  //   dispatch({ type: "delete", payload: id });
  //   // const filteredNotes = notes.filter((n) => n.id !== id);
  //   // setNotes(filteredNotes);
  //   // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  // };

  // const handleCompleteNote = (e) => {
  //   const noteId = Number(e.target.value);
  //   dispatch({ type: "complete", payload: noteId });
  //   // const newNote = notes.map((note) =>
  //   //   note.id == noteId ? { ...note, completed: !note.completed } : note
  //   // );
  //   // setNotes(newNote);

  //   // setNotes((prevNotes) =>
  //   //   prevNotes.map((note) =>
  //   //     note.id == noteId ? { ...note, completed: !note.completed } : note
  //   //   )
  //   // );
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
