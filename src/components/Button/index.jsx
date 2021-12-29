import React from 'react';

export default function Button({ handleClick }) {
  return (
    <div className="row justify-content-center">
      <button type="button" className="btn btn-success mt-3 mb-5" onClick={handleClick}>
        Pesquisar
      </button>
    </div>
  );
}
