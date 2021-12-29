import React from 'react';

export default function Button({ handleClick }) {
  return (
    <button type="button" className="btn btn-success" onClick={handleClick}>
      Pesquisar
    </button>
  );
}
