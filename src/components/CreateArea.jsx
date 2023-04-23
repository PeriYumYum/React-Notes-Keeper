import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Grow } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [isExpanded, setExpanded] = useState(false);

  //textarea character limit
  const charLimit = 100;
  //textarea character left
  const charLeft = charLimit - note.content.length;

  function expand() {
    setExpanded(true);
  }

  function toggleForm() {
    setExpanded((prev) => !prev);
  }

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

  return (
    <div className='create-note'>
      <form>
        <div style={{ display: 'flex' }}>
          <input
            name='title'
            onChange={handleChange}
            value={note.title}
            maxLength='25'
            placeholder='Title'
            onClick={expand}
          />
          <FormControlLabel control={<Switch checked={isExpanded} onChange={toggleForm} />} />
        </div>
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <textarea
            name='content'
            onChange={handleChange}
            value={note.content}
            maxLength='100'
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
