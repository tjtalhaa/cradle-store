import React, { Component } from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from  './components/header/header.component'; 
import SigninSignupPage from './pages/signin-signup/signin-signup.component'; 
import {auth} from './firebase/firebase.utilis';

class App extends Component {
  constructor() {
    super();
  
   this.state ={
     currentUser:null
    };
  }
   
  unsubscribeFromauth = null;

  componentDidMount() {
     this.unsubscribeFromauth = auth.onAuthStateChanged( user => {
       this.setState({currentUser : user})
      console.log(user);
      });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromauth();
  }
  
  
  
  render(){
  return (
  <div> 
    <Header  currentUser={this.state.currentUser} />
    <Switch>
    <Route  exact path ='/' component={ HomePage }   />
    <Route  path ='/shop' component={ ShopPage }   />
    <Route  path ='/signin' component={ SigninSignupPage }   />
    </Switch>
  </div>
  );}
  }
export default App;


