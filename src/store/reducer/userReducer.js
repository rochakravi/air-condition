const initialState = {
  user: "ravi",
  email: "rochak.ravi@gmail.com",
  items: [],
};

const UserReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_USER") {
    return {
      ...state,
      user: action.payload.user,
      email: action.payload.email,
      items: state.items.concat(5),
    };
  }

  return state;
};

export default UserReducer;
