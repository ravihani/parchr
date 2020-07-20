import { LOGIN_USER_INFO, LOGOUT_USER_INFO } from "./UserActions";

// let authUser = JSON.parse(localStorage.getItem("authUser"));
// const initialState = authUser
//   ? { loggedIn: true, authUser }
//   : { loggedIn: false, authUser: null };

const initialState = { loggedIn: false, authUser: null };

export default (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case LOGIN_USER_INFO:
      return { ...state,  loggedIn: true,authUser: payload, };
    case LOGOUT_USER_INFO:
      return { ...state,  loggedIn: false,authUser: null, };

    default:
      return state;
  }
};
