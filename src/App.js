import React, {Component} from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.util';



class App extends Component{
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }
 
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        
        <Router>
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
        </Router> 
      </div>
       
    );
  }
}

export default App;
