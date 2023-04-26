import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
// *If clear localStorage is needed, or localStorage go wrong with webpage, activate this code:
//localStorage.clear();

function App() {
  const [notes, setNotes] = useState([]);

  // get the saved notes and add them to the array
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes'));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  const updateLocalStorage = (notesArray) => {
    localStorage.setItem('notes', JSON.stringify(notesArray));
  };

  // save to LocalStorage func
  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      updateLocalStorage([...prevNotes, newNote]);
      return [...prevNotes, newNote];
    });
  };

  // delete note func
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const updateItems = prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
      updateLocalStorage(updateItems);
      return updateItems;
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className='notes-container'>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
