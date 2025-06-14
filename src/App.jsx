import React, { useState } from 'react';
import Note from './Note';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddNote = () => {
    if (text.trim() === '') return;

    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = text;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes([...notes, text]);
    }

    setText('');
  };

  const handleEditNote = (index) => {
    setText(notes[index]);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <h1>Notes App 📝</h1>
      <div className="note-input">
        <textarea
          placeholder="Write a note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddNote}>
          {editIndex !== null ? 'Update Note' : 'Add Note'}
        </button>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <Note
            key={index}
            text={note}
            onEdit={() => handleEditNote(index)}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
