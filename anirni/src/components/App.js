import React, { Component } from 'react';
import {Route, BrowserRouter as Router,Redirect} from 'react-router-dom';
import '../stylesheets/App.css';
import Home from './home';
import Login from './login';
import Profile from './profile';
import Signup from './signup';
import * as actions from '../actions';
import {connect} from 'react-redux';
class App extends Component {
  
    redirect()
    {
     
      switch(this.props.token)
    {

      case '': {return <Redirect to="/"/>; break;}
      default:{this.props.fetchUser(this.props.token) ;return <Redirect to="/profile"/> ;break;}
    }
     

   
   }
   render() {


    return (
        <Router>

         <div>
          {this.redirect()}
         <Route   exact path='/' component={Home}/>
         <Route exact path='/login' component={Login}/>
         <Route exact path='/profile' component={Profile}/>
         <Route exact path='/signup' component={Signup}/>
        </div>
         
        </Router>
        
     
    );
  }

}
function mapStateToProps(state)
{
   
   return {token:state.token.jwtToken}; 
}

export default connect(mapStateToProps,actions)(App);
