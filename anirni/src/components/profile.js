import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

var props=null;
class Profile extends Component {
  componentWillMount()
  {
    props=this.props;
  }
  logout()
  {
    props.updateToken('');

  }
  render() {
    return (
      
 <div class="container">

  <div class="page-header text-center">
    <h1><span class="fa fa-anchor"></span> Profile Page</h1>
    
  </div>
  <button onClick={this.logout}> logut</button>
  <div class="row">

    <div class="col-sm-6">
      <div class="well">
        <h3><span class="fa fa-user"></span> Local</h3>

          <p>
            <strong>id  </strong>:{this.props.user.local.id} <br/>
            <strong>email</strong>:{this.props.user.local.username} <br/>
            <strong>password </strong>: {this.props.user.local.password}
          </p>

      </div>
    </div>

     
        <div class="col-sm-6">
            <div class="well">
                <h3 class="text-primary"><span class="fa fa-facebook"></span> Facebook</h3>

                <p>
                    <strong>id </strong>:{this.props.user.facebook.id} <br/>
                    <strong>token </strong>: {this.props.user.facebook.token}<br/>
                    <strong>email</strong>:{this.props.user.facebook.email} <br/>
                    <strong>name </strong>: {this.props.user.facebook.name}
                </p>

            </div>
        </div>

        
        <div class="col-sm-6">
            <div class="well">
                <h3 class="text-danger"><span class="fa fa-google-plus"></span> Google</h3>

                <p>
                    <strong>id </strong>:{this.props.user.google.id }<br/>
                    <strong>token </strong>:{this.props.user.google.token} <br/>
                    <strong>email </strong>: {this.props.user.google.email}<br/>
                    <strong>name{this.props.user.google.name}</strong>:{this.props.user.google.name} 
                </p>

            </div>
        </div>

  </div>
  </div>



    );
  }
}
function mapStateToProps(state)
{
   console.log(state.user);
   return {user:state.user}; 
}
export default connect(mapStateToProps,actions) (Profile);