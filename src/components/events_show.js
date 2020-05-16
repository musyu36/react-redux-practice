import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

// stateとactionsの紐付けに必要
import { connect } from "react-redux";

import { getEvent, deleteEvent, putEvent } from "../actions";

class EventsShow extends Component {
  constructor(props) {
    super(props);
    // onSubmitメソッドを紐付け(このクラスのインスタンスでonSubmitメソッドが使えるようにする)
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error },
    } = field;
    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }

  async onDeleteClick() {
    // idを取得
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  async onSubmit(values) {
    // await this.props.postEvent(values);
    // リダイレクト
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    console.log("events show rendered");
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
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting}
          />
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>
            Delete
          </Link>
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

const mapDispatchToProps = { deleteEvent };

// connectは関数を返す高階関数，connect(connectが受け取る引数)(connectが返す関数が受け取る引数)
// reduxFromも同様に高階関数
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventShowForm" })(EventsShow));
