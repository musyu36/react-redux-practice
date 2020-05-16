// 外部APIサーバにリクエストを投げるHTTPクライアントをインポート
import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";

// CRUDで共通で使用するURL
const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

// thunkをimportしているのでアクションの代わりに関数を返すことが出来ている
export const readEvents = () => async (dispatch) => {
  //イベント一覧を取得
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);

  // responseと一緒にreducerに渡す
  dispatch({ type: READ_EVENTS, response });
};
