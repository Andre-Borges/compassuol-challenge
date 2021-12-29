import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import User from '../pages/User';

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/:user" exact element={<User />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
