// 外部APIサーバにリクエストを投げるHTTPクライアントをインポート
import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const READ_EVENT = "READ_EVENT";
export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

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

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  // responseと一緒にreducerに渡す
  dispatch({ type: CREATE_EVENT, response });
};

export const getEvent = (id) => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  dispatch({ type: READ_EVENTS, response });
};

export const putEvent = (values) => async (dispatch) => {
  const response = await axios.put(
    `${ROOT_URL}/events/${values.id}${QUERYSTRING}`,
    values
  );
  dispatch({ type: UPDATE_EVENT, response });
};

export const deleteEvent = (id) => async (dispatch) => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`);
  // responseと一緒にreducerに渡す
  dispatch({ type: DELETE_EVENT, id });
};
