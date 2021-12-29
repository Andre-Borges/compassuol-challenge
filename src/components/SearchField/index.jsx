import React from 'react';

import Button from '../Button';

export default function SearchField({ handleChange, search, handleClick }) {
  return (
    <div className="form-row justify-content-center pb-3">
      <div className="form-group col-md-5 col-auto">
        <input
          id="inputSearch"
          type="text"
          className="form-control "
          onChange={handleChange}
          value={search || ''}
          placeholder="Usuário"
        />
      </div>
      <div className="col-auto">
        <Button handleClick={handleClick} />
      </div>
    </div>
  );
}
