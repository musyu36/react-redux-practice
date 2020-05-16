import _ from "lodash";

// counterの値を管理するreducer
import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      // イベント一覧(配列)をオブジェクトの形に整形して返す,キー値はidと同じ
      return _.mapKeys(action.response.data, "id");
    default:
      return events;
  }
};
