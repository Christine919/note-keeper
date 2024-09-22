import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    props.onEdit(props.id); // Trigger the edit function passed from the parent
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEditClick}>
        <EditIcon />
      </button>
      <button onClick={handleDeleteClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
