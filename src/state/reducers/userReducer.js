const userReducer = (state = { name: "Guest" }, action) => {
  switch (action.type) {
    case "set":
      return {
        value: state,
      };
    default:
      return state;
  }
};

export default userReducer;
