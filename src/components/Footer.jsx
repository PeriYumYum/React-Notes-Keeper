import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Designed and Built by Peri👒 ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
