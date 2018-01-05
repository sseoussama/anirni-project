import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions  from '../actions';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SignupForm from './signupForm';
var props=null;
class Signup extends Component {
  componentWillMount()
  {
    props=this.props;
  }
   
  submit = (values) =>{
    var props=this.props;
    axios.post('http://localhost:5000/api/users/signup', {
                email:values.email,
                password:values.password
               })
                .then(function (response) {
                 
                  props.updateToken('');

                })
                .catch(function (error) {

                    alert(error.response.data.msg);
                   
                });
           
  }
  
   render() {
    return (
      
 <div class="container">

<div class="col-sm-6 col-sm-offset-3">

  <h1><span class="fa fa-sign-in"></span> Signup</h1>

  
  <SignupForm onSubmit={this.submit}/>



  <p>Already have an account? <Link to="/login">Login</Link></p>
  <p>Or go <Link to="/">home</Link>.</p>
  
</div>
</div>

    );
  }
}

export default connect(null,actions)(Signup);