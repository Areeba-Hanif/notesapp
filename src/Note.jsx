import React from 'react';

function Note({ text, onEdit, onDelete }) {
  return (
    <div className="note">
      <p>{text}</p>
      <div className="note-actions">
        <button onClick={onEdit}>✏️ Edit</button>
        <button onClick={onDelete}>🗑️ Delete</button>
      </div>
    </div>
  );
}

export default Note;
