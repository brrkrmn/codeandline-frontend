import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
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
    try {
      const userToLogin = await loginService.login(user)
      dispatch(login(userToLogin));
      window.localStorage.setItem("currentUser", JSON.stringify(userToLogin))
    } catch (error) {
      toast.error(error.response.data)
    }
  }
}

export const logoutUser = () => {
  return async dispatch => {
    try {
      dispatch(logout())
      window.localStorage.removeItem("currentUser")
    } catch (error) {
      console.log(error)
    }
  }
}

export const signupUser = (user) => {
  return async dispatch => {
    try {
      const newUser = await signupService.signup(user);
      dispatch(login(newUser))
      window.localStorage.setItem("currentUser", JSON.stringify(newUser))
    } catch (error) {
      toast.error(error.response.data)
    }
  }
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
