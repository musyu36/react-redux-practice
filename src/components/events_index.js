import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Link } from "react-router-dom";

// stateとactionsの紐付けに必要
import { connect } from "react-redux";

import { readEvents } from "../actions";

class EventsIndex extends Component {
  // コンポーネントがマウントされた時に実行
  componentDidMount() {
    // 初期マウント時にイベント一覧を取得
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, (event) => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    );
  }
}

// stateの情報からこのコンポーネント(Appコンポーネント)に必要な物を取り出して，コンポーネント内のpropsとしてマッピングする関数
// 引数に状態のトップルールを表すstate, 返り値にどのようなオブジェクトををpropsとして対応させるか
const mapStateToProps = (state) => ({
  events: state.events,
});

// あるアクションが発生した時に，reducerにタイプに応じた状態遷移を実行させるための関数
// incrementをキーに，increment関数を引数に持つdispatchを定義，decrementも同様
const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
