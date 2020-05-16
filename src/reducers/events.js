import _ from "lodash";

// counterの値を管理するreducer
import {
  READ_EVENTS,
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
} from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    case UPDATE_EVENT:
      // UPDATE_EVENTはREAD_EVENTと同じ形式

      // イベント一覧(配列)をオブジェクトの形に整形して返す,キー値はidと同じ
      return _.mapKeys(action.response.data, "id");
    case READ_EVENT:
      // イベント詳細画面で使用
      const data = action.response.data;
      return { ...events, [data.id]: data };
    case DELETE_EVENT:
      delete events[action.id];
      //メモリ空間上に更新後のオブジェクトをreducerが返す
      // スレッド演算子
      return { ...events };
    default:
      return events;
  }
};
