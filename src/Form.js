import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(handleSubmit);
    return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="first-block">
        <div>
            <label>EMAIL</label>
            <div>
                <Field
                    name="Email"
                    component="input"
                    type="text"
                    />
            </div>
         </div>
        <div>
            <label>PASSWORD</label>
            <div>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    />
            </div>
         </div>
         <div>
            <label>CONFIRM PASSWORD</label>
            <div>
                <Field
                    name="confirm-password"
                    component="input"
                    type="password"
                    />
            </div>
          </div>
       </div>
        <div className="second-block">
        <div>
            <label>DATE OF BIRTH</label>
            <div>
                <Field
                    name="day-of-birth"
                    component="input"
                    type="text"
                    placeholder="DD"
                    />
                <Field
                    name="month-of-birth"
                    component="input"
                    type="text"
                    placeholder="MM"
                    />
                <Field
                    name="year-of-birth"
                    component="input"
                    type="text"
                    placeholder="YYYY"
                    />
              </div>
              </div>
        <div>
            <label>GENDER</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />
            MALE
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />
            FEMALE
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="unspecired" />
            UNSPECIRED
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
            <button type="submit" disabled={pristine || submitting}>Go to Dashboard</button>
        </div>
       </div>
      </div>
    </form>
    );
  }
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form);
