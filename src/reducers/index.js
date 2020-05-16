// reducerのトップレベルファイル，全reducerを結合する
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import events from "./events";

export default combineReducers({ events, form });
