const initialState = {
  secretVal: "Some Secret Value",
  toShow: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Toggle":
      const newtoShow = !state.toShow;
      return {
        ...state,
        toShow: newtoShow
      };
    default:
      return state;
  }
};


export default reducer;
