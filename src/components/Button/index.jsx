import React from 'react';

export default function Button({ handleClick }) {
  return (
    <button type="button" className="btn btn-lg btn-success" onClick={handleClick}>
      Pesquisar
    </button>
  );
}
