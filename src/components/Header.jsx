import React from 'react';
import EventNoteIcon from '@mui/icons-material/EventNote';

function Header() {
  return (
    <header>
      <EventNoteIcon fontSize='large' className='logo' />
      <h1>Keeper</h1>
    </header>
  );
}

export default Header;
