import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users',
  responseType: 'json',
});

export const auth = {
  client_id: '88b042761dcc9cb9bd83',
  client_secret: 'bee728e008ac16ae6211c174cb0aad35975bf4c3',
  req: '?client_id=88b042761dcc9cb9bd83&client_secret=bee728e008ac16ae6211c174cb0aad35975bf4c3',
};
