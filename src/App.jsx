import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import { useState } from "react";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";
function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handleNewNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNote = notes.map((note) =>
    //   note.id == noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id == noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <NoteHeader
        notes={notes}
        sortBy={sortBy}
        onSort={(e) => setSortBy(e.target.value)}
      />
      <div className="note-app">
        <AddNewNote onAddNote={handleNewNote} />
        <div className="note-container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDelete={handleDeleteNote}
            onCompleted={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
