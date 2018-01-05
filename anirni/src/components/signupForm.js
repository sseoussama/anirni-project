import React from 'react'
import { Field, reduxForm } from 'redux-form'



const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 7) {
    errors.password = 'Must be 7 characters or more'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  
  return errors
}

const warn = values => {
  const warnings = {}
  
  if (values.password) {
    if(8<values.password.length && values.password.length<10)
    warnings.password = 'Hmm, your password seem too mkawad...'
  }
  return warnings
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


let SignupForm = props => {
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
    <button type="submit" disabled={submitting} class="btn btn-warning btn-lg">SignUp</button>
    <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </div>
     
    </form>
  )
}

SignupForm = reduxForm({
  // a unique name for the form
  form: 'login',
  validate, 
  warn
  
})(SignupForm)

export default SignupForm;