import React from 'react';

//export default function Header(props) {
export default function Header({ title, children}) { // desestruturada
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}