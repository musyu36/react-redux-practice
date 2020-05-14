import React, { Component } from "react";
import PropTypes from "prop-types";

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
const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handlePlusButton = () => {
    // setStateを用いることでコールバックでrenderが実行される
    this.setState({ count: this.state.count + 1 });
  };
  handleMinusButton = () => {
    // setStateを用いることでコールバックでrenderが実行される(stateの変更に伴って表示が変わる)
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
