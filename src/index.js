import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import reducer from "./reducers";

import EventsIndex from "./components/events_index";
import * as serviceWorker from "./serviceWorker";

// storeはアプリ内で唯一で，全てのstateはstoreに集約
const store = createStore(reducer, applyMiddleware(thunk));

// Providerでevents_indexをラップし，storeを渡して置くことで全コンポーネントがstoreにアクセス出来る
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
