import _ from "lodash";

// counterの値を管理するreducer
import { READ_EVENTS, DELETE_EVENT } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // イベント一覧(配列)をオブジェクトの形に整形して返す,キー値はidと同じ
      return _.mapKeys(action.response.data, "id");
    case DELETE_EVENT:
      delete events[action.id];
      //メモリ空間上に更新後のオブジェクトをreducerが返す
      // スレッド演算子
      return { ...events };
    default:
      return events;
  }
};
