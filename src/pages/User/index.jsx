import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api, auth } from '../../services/api';

import CardUser from '../../components/CardUser';

import { clearUserRedux } from '../../redux/actions';

export default function User() {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const userRedux = useSelector((state) => state.user);

  const getUser = useCallback(() => {
    api
      .get(`/${params.user}${auth.req}`)
      .then((response) => {
        const { data } = response;
        setUser(data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error('Usuário não encontrado.');
        navigate('/');
      });
  }, [params]);

  useEffect(() => {
    !userRedux ? getUser() : setUser(userRedux);
  }, [userRedux, getUser]);

  function voltarPage() {
    dispatch(clearUserRedux());
    navigate('/');
  }

  return (
    <div className="user-container container-fluid">
      <div className="container p-3">
        <CardUser user={user} home={false} voltarPage={voltarPage} />
      </div>
    </div>
  );
}
