export type ACTIONS = "increment";
export const appReducer = (
  state = 0,
  action: {
    type: ACTIONS;
  }
) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    default:
      return state;
  }
};
