import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/Shop';
import Header from './Components/Header';
import AuthPages from './Pages/Authentication';
import { auth, createUserDocumentFromAuth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDocumentFromAuth(userAuth);

        // userRef.get(query => console.log('QUERY:', query));
        console.log('USER REF', userRef)
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  };

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  };

  render() {
    console.log('USER from APP JS: ', this.state.currentUser)
    return (
      <div>
        <Routes>
          <Route path='/' element={<Header currentUser={this.state.currentUser} />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="sign-in" element={<AuthPages />} />
          </Route>
        </Routes>
      </div>
    );
  };
};

export default App;
