import React from 'react'
import { Field, reduxForm } from 'redux-form'



const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } 
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}




const renderField = ({
  input,
  
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    
    <div>
      <input {...input} class="form-control" type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)


let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

    <div class="form-group">
      <label>Email</label>
      <Field type="email"   component={renderField} name="email"  />
    </div>
    <div class="form-group">
      <label>Password</label>
       <Field type="password" component={renderField} name="password"  />
    </div>
    <div>
    <button type="submit" disabled={submitting} class="btn btn-warning btn-lg">Login</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </div>
     
    </form>
  )
}

LoginForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate, 
  
  
})(LoginForm)

export default LoginForm;