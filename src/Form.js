import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

window.next = false;

const validate = values => {
    let emailIsOk = false;
    let passIsOK = false;
    let confirmIsOk = false;

    const errors = {}
    if (!values.email) {
        errors.email = 'Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } else {
        emailIsOk = true;
    }

    if(values.password) {
        if (values.password.length < 6) {
            errors.password = 'Password should be minimum 6 characters';
        } else {
            passIsOK = true;
        }
    }

    if (!values.password) {
        errors.password = 'Password is Required';
    } else if (values.password !== values.confirmPassword) {
        errors.confirmPassword = 'Invalid Password';
    } else {
        confirmIsOk = true;
    }

    if(emailIsOk && emailIsOk && confirmIsOk) {
        window.next = true;
    }

    if (!values.dayOfBirth && !values.monthOfBirth && !values.yearOfBirth) {
        errors.age = 'Date Of Birth is Required'
    } else if (Number(values.yearOfBirth) < 2000) {
        errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
     {(touched && (error)) ? <span className="error">{error}</span> : <span>{label}</span>}
      <input {...input} type={type}/>
  </div>
)

class Form extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    let imgUrl = '/checked.svg';
    let styles = {}

    if(this.props.step === 'two') {
        styles = {
            transform: 'translateX(-300px)'
        }
     } else if(this.props.step === 'three') {
        styles = {
            transform: 'translateX(-600px)'
        }
    }

    return (
    <form onSubmit={handleSubmit}>
      <div className="container" style={styles}>
        <div className="first-block">
            <div>
                <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="EMAIL"
                    />
             </div>
            <div>
            <div>
                <Field
                    name="password"
                    component={renderField}
                    type="password"
                    label="PASSWORD"
                    />
            </div>
         </div>
         <div>
            <div>
                <Field
                    name="confirmPassword"
                    component={renderField}
                    type="password"
                    label="CONFIRM PASSWORD"
                    />
            </div>
          </div>
         </div>
        <div className="second-block">
            <div>
                <label>DATE OF BIRTH</label>
                <div>
                <Field
                    name="dayOfBirth"
                    component="input"
                    type="text"
                    placeholder="DD"
                    />
                <Field
                    name="monthOfBirth"
                    component="input"
                    type="text"
                    placeholder="MM"
                    />
                <Field
                    name="yearOfBirth"
                    component="input"
                    type="text"
                    placeholder="YYYY"
                    />
              </div>
             </div>
            <div className="gender">
                <label>GENDER</label>
                <div>
                <label>
                    <Field name="sex" component="input" type="radio" value="male" />
                 </label>
                <label>
                    <Field name="sex" component="input" type="radio" value="female" />
                 </label>
                <label>
                    <Field name="sex" component="input" type="radio" value="unspecired" />
                 </label>
             </div>
             </div>
            <div>
                <label>WHERE DID YOU HERE ABOUT IS?</label>
                <div>
                    <Field name="where-did-you-here" component="select">
                        <option />
                        <option value="social-network">Social Network</option>
                        <option value="tv">TV</option>
                        <option value="another-source">Another Source</option>
                    </Field>
                </div>
             </div>
         </div>
        <div className="third-block">
            <div>
                <img src={imgUrl} />
                <div className="container-btn">
                    <button type="submit" disabled={!window.next}>Go to Dashboard -></button>
                </div>
            </div>
         </div>
      </div>
     </form>
    );
  }
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
  validate
})(Form);
