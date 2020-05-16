// reducerのトップレベルファイル，全reducerを結合する
import { combineReducers } from "redux";
import events from "./events";

export default combineReducers({ events });

// 複数のreducerをcombineしたい時
// export default combineReducers({ hoge, fuga });
