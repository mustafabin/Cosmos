const userReducer = (state = { name: "Guest" }, action) => {
  switch (action.type) {
    case "set":
      return { name: action.payload };
    default:
      return state;
  }
};

export default userReducer;
