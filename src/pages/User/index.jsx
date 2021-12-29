import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';

import CardUser from '../../components/CardUser';

import './styles.css';

export default function User() {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();

  function getUser() {
    api
      .get(`/${params.user}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  function voltarPage() {
    navigate('/');
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="user-container container-fluid">
      <div className="row justify-content-center p-3">
        <button type="button" className="btn btn-info" onClick={voltarPage}>
          Voltar
        </button>
      </div>

      <div className="container">
        <CardUser user={user} />
      </div>
    </div>
  );
}
