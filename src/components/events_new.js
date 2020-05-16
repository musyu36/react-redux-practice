import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

// stateとactionsの紐付けに必要
import { connect } from "react-redux";

import { postEvent } from "../actions";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    // onSubmitメソッドを紐付け(このクラスのインスタンスでonSubmitメソッドが使えるようにする)
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      ></TextField>
    );
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    const style = {
      margin: 12,
    };
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          ></Field>
        </div>
        <div>
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          ></Field>
        </div>
        <div>
          <RaisedButton
            label="Submit"
            type="submit"
            style={style}
            disabled={pristine || submitting}
          />
          <RaisedButton
            label="Cancel"
            type="cancel"
            style={style}
            containerElement={<Link to="/">Cancel</Link>}
          />
        </div>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) errors.title = "Enter a title, please.";
  if (!values.body) errors.body = "Enter a body, please";
  return errors;
};

const mapDispatchToProps = { postEvent };

// connectは関数を返す高階関数，connect(connectが受け取る引数)(connectが返す関数が受け取る引数)
// reduxFromも同様に高階関数
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
