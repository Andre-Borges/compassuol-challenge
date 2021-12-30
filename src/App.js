import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/app.routes';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
}

export default App;
