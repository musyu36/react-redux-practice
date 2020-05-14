import React, { Component } from "react";
const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10,
    },
    {
      name: "Hanako",
      age: 20,
    },
    {
      name: "John",
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

export default App;
