import { createSlice } from '@reduxjs/toolkit';
import loginService from '../services/login';

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

export const initializeUser = () => {
  return async dispatch => {
    const currentUser = window.localStorage.getItem("currentUser");
    if (currentUser) {
      dispatch(login(JSON.parse(currentUser)));
    }
  }
}

export const setUser = (user) => {
  return async dispatch => {
    const userToLogin = await loginService.login(user)
    dispatch(login(userToLogin));
    window.localStorage.setItem("currentUser", JSON.stringify(userToLogin))
  }
}

export const removeUser = () => {
  return async dispatch => {
    dispatch(logout())
    window.localStorage.removeItem("currentUser")
  }
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
