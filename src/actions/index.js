export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// INCREMENTアクションを返す，アクションクリエイター
export const increment = () => ({
  type: INCREMENT,
});

// DECREMENTアクションを返す，アクションクリエイター
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
