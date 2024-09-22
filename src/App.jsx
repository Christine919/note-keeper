import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState({ id: null, title: "", content: "" });

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function editNote(id) {
    const noteToEdit = notes[id];
    setCurrentNote({ ...noteToEdit, id }); // Include id in currentNote
    setIsEditing(true);
  }

  function updateNote(updatedNote) {
    setNotes((prevNotes) => {
      return prevNotes.map((note, index) => (index === updatedNote.id ? updatedNote : note));
    });
    setIsEditing(false);
    setCurrentNote({ id: null, title: "", content: "" }); // Reset current note
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <CreateArea
          onAdd={isEditing ? updateNote : addNote}
          note={isEditing ? currentNote : { title: "", content: "" }} // Pass current note if editing
          setIsEditing={setIsEditing} // Function to exit editing mode
        />
        <div className="notes-container">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote} // Pass edit function
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
