import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
                    <button type="submit" disabled={pristine || submitting}>Go to Dashboard -></button>
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
})(Form);
