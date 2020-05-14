import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       // React.Fragmentで余計なdivを削減できる
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input
//           type="text"
//           onClick={() => {
//             console.log("asdfasdf");
//           }}
//         />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>meow</div>;
};

export default App;
