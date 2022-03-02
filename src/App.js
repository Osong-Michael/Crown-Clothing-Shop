import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import ShopPage from './Pages/Shop';
import Header from './Components/Header';
import AuthPages from './Pages/Authentication';
import { auth } from './firebase/firebase.utils';
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
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log('USER: ', user);
    })
  };

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={AuthPages} />
        </Switch>
      </div>
    );
  };
};

export default App;
