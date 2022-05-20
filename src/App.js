import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/Shop';
import Header from './Components/Header';
import AuthPages from './Pages/Authentication';
import './App.css';

const App = () => (
      <div>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="auth" element={<AuthPages />} />
          </Route>
        </Routes>
      </div>
);

export default App;
