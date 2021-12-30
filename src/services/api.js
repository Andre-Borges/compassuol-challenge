import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users',
  client_id: '293ea240976d031209d2',
  client_secret: 'cf4f13df096751ac089dcc9aba9d8b3ef8690f2f',
  responseType: 'json',
});

export default api;
