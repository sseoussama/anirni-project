import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {Link} from 'react-router-dom';
import LoginForm from './loginForm';


class Login extends Component 
{
  
  
   
    submit = (values) =>{
     var  props=this.props;
     axios.post('http://localhost:5000/api/users/login', {
       email:values.email,
        password:values.password
               })
                .then(function (response) {
                    
                    props.updateToken(response.data.token);
                    
                  })
                .catch(function (error) {
                  alert(error);
                   
                });

  }
  
  render() {
    return (
      
     <div class="container">

     <div class="col-sm-6 col-sm-offset-3">

      <h1><span class="fa fa-sign-in"></span> Login</h1>

     
    <LoginForm onSubmit={this.submit}/>
  

  

  <p>Need an account? <Link to="/signup">Signup</Link></p>
  <p>Or go <Link to="/">home</Link>.</p>
 
</div>
</div>

    );
  }
}

export default connect(null,actions) (Login);