import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { api, auth } from '../../services/api';

import SearchField from '../../components/SearchField';
import CardUser from '../../components/CardUser';

import { setUserRedux } from '../../redux/actions';

export default function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const user = useSelector((state) => state.user);

  async function searchUser() {
    api
      .get(`/${search}${auth.req}`)
      .then((response) => {
        const { data } = response;
        dispatch(setUserRedux(data));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error('Usuário não encontrado.');
      });
  }

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);
  }

  return (
    <div className="home-container container pt-4 pb-4">
      <SearchField handleChange={handleChange} search={search} handleClick={searchUser} />
      <CardUser user={user} home={true} />
    </div>
  );
}
