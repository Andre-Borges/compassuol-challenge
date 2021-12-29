import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import SearchField from '../../components/SearchField';
import Button from '../../components/Button';
import CardUser from '../../components/CardUser';

import './styles.css';

export default function Home() {
  const [user, setUser] = useState();
  const [search, setSearch] = useState();

  async function searchUser() {
    api
      .get(`/${search}`)
      .then((response) => {
        const { data } = response;
        setUser(data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  useEffect(() => {}, []);

  return (
    <div className="home-container container">
      <div>
        <SearchField handleChange={handleChange} search={search} />
        <Button handleClick={searchUser} />
        <CardUser user={user} home={true} />
      </div>
    </div>
  );
}
