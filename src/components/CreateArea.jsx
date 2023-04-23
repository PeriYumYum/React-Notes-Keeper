import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Fab, Grow } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [isExpanded, setExpanded] = useState(false);

  //character limit
  const charLimit = 100;
  const charLeft = charLimit - note.content.length;

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  // function cancel() {
  //   if (!isExpanded) {
  //     setExpanded(false);
  //   }
  // }

  return (
    <div>
      <form className='create-note'>
        <input
          name='title'
          onChange={handleChange}
          value={note.title}
          placeholder='Title'
          onClick={expand}
        />
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <textarea
            name='content'
            onChange={handleChange}
            value={note.content}
            maxlength='100'
            placeholder='Take a note...'
            rows='3'
          />
          <span className='label'>{charLeft} left</span>
          <Grow in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Grow>
        </div>
      </form>
    </div>
  );
}

export default CreateArea;
