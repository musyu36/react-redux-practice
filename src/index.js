import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import EventsShow from "./components/events_show";
import * as serviceWorker from "./serviceWorker";

// developかどうかによってenhancerを変える，developであればdevtoolsでデバッグできるようにする
const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

// storeはアプリ内で唯一で，全てのstateはstoreに集約
const store = createStore(reducer, enhancer);

// Providerでevents_indexをラップし，storeを渡して置くことで全コンポーネントがstoreにアクセス出来る
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* 新規作成画面 */}
        <Route path="/events/new" component={EventsNew} />
        {/* コロンに続けて:idとして変数 */}
        <Route path="/events/:id" component={EventsShow} />
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
