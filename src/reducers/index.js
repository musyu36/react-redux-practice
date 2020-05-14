// reducerのトップレベルファイル，全reducerを結合する
import { combineReducers } from "redux";
import count from "./count";

export default combineReducers({ count });

// 複数のreducerをcombineしたい時
// export default combineReducers({ hoge, fuga });
