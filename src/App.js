import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/Homapge.component';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/signIn-signUp/SignInSignUp';
import {auth} from './firebase/utils';


class App extends React.Component {
    state={
      currentUser:null
    }

    unSubscribeFromAuth = null;
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});

      console.log('user',user)
      // console.log('check',this.unSubscribeFromAuth);
      
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInSignUp}/>
        </Switch>
      
      </div>
    );
  }
}

export default App;
