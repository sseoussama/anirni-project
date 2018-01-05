import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/App.css';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import {connect} from 'react-redux';
import * as actions from '../actions';
var props=null;
class Home extends Component {
  
  componentWillMount()
  {
    props=this.props;
  }
  responseFacebook(response) {
    
       axios.post('http://localhost:5000/api/users/auth/facebook', {
        access_token:response.accessToken,
               })
                .then(function (response) {
                    
                    props.updateToken(response.data.token);
                    
                    
                  })
                .catch(function (error) {
                  console.log(error);
                   
                });
     
    }
     responseGoogle(response) {
       axios.post('http://localhost:5000/api/users/auth/google', {
        access_token:response.accessToken,
               })
                .then(function (response) {
                    
                    props.updateToken(response.data.token);
                    
                    
                  })
                .catch(function (error) {
                  console.log(error);
                   
                });
    }
  render() {
    return (
     
   <div class="container">
    
  <div class="jumbotron text-center">
    <h1><span class="fa fa-lock"></span> Anirni Authentication</h1>

    <p>Login or Register with:</p>
    <Link to="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</Link>
    <Link to="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</Link>
   
   
       <FacebookLogin
          appId="1779135328825253"
          autoLoad={false}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"
          cssClass="loginBtn loginBtn--facebook"
          callback={this.responseFacebook}
         
        />
         <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    className="loginBtn loginBtn--google"
    buttonText="Login with google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
  />
  </div>

</div>

    );
  }
}

export default connect(null,actions)(Home);