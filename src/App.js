import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/Shop';
import Header from './Components/Header';
import AuthPages from './Pages/Authentication';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={AuthPages} />
      </Switch>
    </div>
  );
}

export default App;
