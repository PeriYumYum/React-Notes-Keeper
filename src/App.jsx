import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
// *If clear localStorage is needed, or localStorage go wrong with webpage, activate this code:
// localStorage.clear();

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  // set notes to local storage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // add notes func
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  // delete note func
  const deleteNote = (del_id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== del_id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className='container'>
        <div className='notes-list'>
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={noteItem.id}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
