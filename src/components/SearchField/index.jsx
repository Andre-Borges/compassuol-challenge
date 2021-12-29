import React from 'react';

export default function SearchField({ handleChange, search }) {
  return (
    <div>
      <input type="text" onChange={handleChange} value={search || ''} />
    </div>
  );
}
