import React from "react";

function App() {
  return (
    // React.Fragmentで余計なdivを削減できる
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onClick={() => {
          console.log("asdfasdf");
        }}
      />
    </React.Fragment>
  );
}

export default App;
