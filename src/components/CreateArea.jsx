import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  useEffect(() => {
    // If editing, set note to current note details
    if (props.note.id !== null) {
      setNote(props.note);
    } else {
      setNote({ title: "", content: "" }); // Reset for new note
    }
  }, [props.note]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note); // Add or update note based on parent logic
    setNote({
      title: "",
      content: ""
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
