import React, { Component } from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Mary",
      age: 20,
    },
    {
      name: "John",
      age: 3,
    },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      I am {props.name}, {props.age} years old
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

// Userコンポーネントが受け付けるpropsに対してprop-typesで型チェックをする
// isRequiredでnullチェック
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
