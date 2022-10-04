const initialState = {
  storeUsers: [],
  modal: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS":
      return { ...state, storeUsers: action.payload };
    case "DELETE_USER":
      return {
        ...state,
        storeUsers: state.storeUsers.filter(
          (user) => user.id !== action.payload
        ),
      };
    case "EDIT_USER":
      return {
        ...state,
        storeUsers: state.storeUsers.map((user) => {
          if (user.id === action.payload.id) return action.payload.user;
          return user;
        }),
      };
    default:
      return state;
  }
};
