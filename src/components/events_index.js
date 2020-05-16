import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "material-ui/Table";

import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

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
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>{event.title}</Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12,
    };
    return (
      <React.Fragment>
        <FloatingActionButton
          style={style}
          containerElement={<Link to="/events/new"></Link>}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
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
