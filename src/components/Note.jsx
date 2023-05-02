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
        <span title='delete note' className='delete-btn' onClick={handleClick}>
          <DeleteForeverIcon
            sx={{
              color: 'royalblue',
              backgroundColor: 'white',
              fontSize: 28,
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default Note;
