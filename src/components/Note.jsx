import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <div className='note'>
      <div className='note-content'>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className='note-CTA'>
        <span>{props.date}</span>
        <button title='delete note' onClick={handleClick}>
          <DeleteForeverIcon style={{ color: 'royalblue' }} />
        </button>
      </div>
    </div>
  );
}

export default Note;
