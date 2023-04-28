import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Grow } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
  const [note, setNote] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [isExpanded, setExpanded] = useState(false);

  //textarea character limit
  const charLimit = 150;
  //textarea character left
  const charLeft = charLimit - note.content.length;

  const expand = () => {
    setExpanded(true);
  };

  const toggleForm = () => {
    setExpanded((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        id: uuidv4(),
      };
    });
  };

  const submitNote = (e) => {
    if (note.title !== '' || note.content !== '') {
      props.onAdd(note);
    }
    setNote({
      title: '',
      content: '',
    });
    e.preventDefault();
  };

  return (
    <div className='create-note'>
      <form autoComplete='off'>
        <div style={{ display: 'flex' }}>
          <input
            name='title'
            onChange={handleChange}
            value={note.title}
            maxLength='25'
            placeholder='Title'
            onClick={expand}
            autoComplete='off'
          />
          <FormControlLabel
            control={<Switch checked={isExpanded} onChange={toggleForm} color='default' />}
            style={{ width: '36px' }}
          />
        </div>
        <div style={{ display: isExpanded ? 'block' : 'none' }}>
          <textarea
            name='content'
            onChange={handleChange}
            value={note.content}
            maxLength='150'
            placeholder='Take a note...'
            rows='3'
            autoComplete='off'
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
