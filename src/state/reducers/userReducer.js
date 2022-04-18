const userReducer = (state = { name: "Guest" }, action) => {
  switch (action.type) {
    case "set":
      return {
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
