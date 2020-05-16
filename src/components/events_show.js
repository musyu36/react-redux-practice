import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

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

  // レンダリング完了時に情報を取ってくる
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getEvent(id);
    }
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

  // 削除
  async onDeleteClick() {
    // idを取得
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    // リダイレクト
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
          <RaisedButton
            label="Delete"
            style={style}
            onClick={this.onDeleteClick}
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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, event };
};

// コンポーネントにactionの関数をバインド
const mapDispatchToProps = { deleteEvent, getEvent, putEvent };

// connectは関数を返す高階関数，connect(connectが受け取る引数)(connectが返す関数が受け取る引数)
// reduxFromも同様に高階関数
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  //titleとbodyを表示するためenabledInitializeをtrueに
  reduxForm({ validate, form: "eventShowForm", enabledInitialize: true })(
    EventsShow
  )
);
