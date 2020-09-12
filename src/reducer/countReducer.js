export const instialState = {
  name: "enter",
  count: 0,
  product: [],
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "sub":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
