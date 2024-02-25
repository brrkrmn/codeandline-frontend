import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';
import signupService from '../services/signup';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return null;
    }
  }
})

export const initializeLogin = () => {
  return async dispatch => {
    const currentUser = window.localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(login(JSON.parse(currentUser)));
    }
  }
}

export const loginUser = (user) => {
  return async dispatch => {
    const userToLogin = await loginService.login(user)
    dispatch(login(userToLogin));
    window.localStorage.setItem("currentUser", JSON.stringify(userToLogin))
  }
}

export const logoutUser = () => {
  return async dispatch => {
    dispatch(logout())
    window.localStorage.removeItem("currentUser")
  }
}

export const signupUser = (user) => {
  return async dispatch => {
    await signupService.signup(user);
  }
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
