import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/Shop';
import Header from './Components/Header';
import AuthPages from './Pages/Authentication';
import Checkout from './Pages/Checkout';
import { checkUserSession } from './Store/User/user.actions'

import './App.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  
  return (
      <div>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="shop/*" element={<ShopPage />} />
            <Route path="auth" element={<AuthPages />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
