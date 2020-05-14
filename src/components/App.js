import React, { Component } from "react";
import PropTypes from "prop-types";

// stateとactionsの紐付けに必要
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

// const App = () => {
//   const profiles = [
//     {
//       name: "Taro",
//       age: 10,
//     },
//     {
//       name: "Mary",
//       age: 20,
//     },
//     {
//       name: "John",
//       age: 3,
//     },
//   ];
//   return (
//     <div>
//       {profiles.map((profile, index) => {
//         return <User name={profile.name} age={profile.age} key={index} />;
//       })}
//     </div>
//   );
// };

// const User = (props) => {
//   return (
//     <div>
//       I am {props.name}, {props.age} years old
//     </div>
//   );
// };

// User.defaultProps = {
//   age: 1,
// };

// // Userコンポーネントが受け付けるpropsに対してprop-typesで型チェックをする
// // isRequiredでnullチェック
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired,
// };

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

class App extends Component {
  // reducerで初期化しているので不要
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }

  // action-creatorでアクション名を確保して，そこから適切な処理をreducerから呼び出しているので不要
  // handlePlusButton = () => {
  //   // setStateを用いることでコールバックでrenderが実行される
  //   this.setState({ count: this.state.count + 1 });
  // };
  // handleMinusButton = () => {
  //   // setStateを用いることでコールバックでrenderが実行される(stateの変更に伴って表示が変わる)
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    // 状態やアクションをpropsに渡していくのでpropsを格納しておく
    const props = this.props;
    return (
      <React.Fragment>
        <div>count: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// stateの情報からこのコンポーネント(Appコンポーネント)に必要な物を取り出して，コンポーネント内のpropsとしてマッピングする関数
// 引数に状態のトップルールを表すstate, 返り値にどのようなオブジェクトををpropsとして対応させるか
const mapStateToProps = (state) => ({ value: state.count.value });

// あるアクションが発生した時に，reducerにタイプに応じた状態遷移を実行させるための関数
// incrementをキーに，increment関数を引数に持つdispatchを定義，decrementも同様

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

// 下記のショートハンドが存在する

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(App);
