import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function CardUser({ user, home }) {
  const navigate = useNavigate();
  const [repos, setRepos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  function getRepos() {
    !repos.length &&
      api
        .get(`/${user.login}/repos`)
        .then((response) => {
          const { data } = response;
          console.log(data);
          setRepos(data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
  }

  function getFavoritos() {
    !favoritos.length &&
      api
        .get(`/${user.login}/starred`)
        .then((response) => {
          const { data } = response;
          console.log(data);
          setFavoritos(data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
  }

  function verMaisDetalhes() {
    navigate(`/${user.login}`);
  }

  return (
    <>
      {user && (
        <div className="border border-primary">
          <h1>{user.login}</h1>
          {home && <button onClick={verMaisDetalhes}>Ver mais detalhes</button>}
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#repositorios"
                    aria-expanded="true"
                    aria-controls="repositorios"
                    onClick={getRepos}
                  >
                    Repositórios
                  </button>
                </h5>
              </div>

              <div
                id="repositorios"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {repos.map((repo) => (
                    <span key={repo.id}>{repo.full_name}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#favoritos"
                    aria-expanded="true"
                    aria-controls="favoritos"
                    onClick={getFavoritos}
                  >
                    Favoritos
                  </button>
                </h5>
              </div>

              <div
                id="favoritos"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  {favoritos.map((favorito) => (
                    <span key={favorito.id}>{favorito.full_name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
