import React from "react";
import { Field, reduxForm, formValues } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`; // --> Displaying error message based on meta data of formValues provided by redux forms
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues); //--> calls the createStream action creator on submit
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)} //--> Redux form feature ,Use Field to show a field --> Redux Feature as well
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title " />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description "
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({
  form: "streamForm",
  validate: validate,
})(StreamForm);
