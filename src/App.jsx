import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
import { useReducer, useState } from "react";
import NoteStatus from "./component/NoteStatus";
import NoteHeader from "./component/NoteHeader";

function notesReducer(notes, action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id == action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown error" + action.payload);
  }
}

function App() {
  const [notes, dispatch] = useReducer(notesReducer, []);
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handleNewNote = (newNote) => {
    dispatch({ type: "add", payload: newNote });
    // setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleDeleteNote = (id) => {
    dispatch({ type: "delete", payload: id });
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes);
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };

  const handleCompleteNote = (e) => {
    const noteId = Number(e.target.value);
    dispatch({ type: "complete", payload: noteId });
    // const newNote = notes.map((note) =>
    //   note.id == noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNote);

    // setNotes((prevNotes) =>
    //   prevNotes.map((note) =>
    //     note.id == noteId ? { ...note, completed: !note.completed } : note
    //   )
    // );
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
