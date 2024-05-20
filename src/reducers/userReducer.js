import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import loginService from '../services/login';
import signupService from '../services/signup';
import { setToken } from '../utils/token';

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
      const user = JSON.parse(currentUser)
      dispatch(login(user))
      setToken(user.token)
    }
  }
}

export const loginUser = (credentials) => {
  return async dispatch => {
    try {
      const user = await loginService.login(credentials)
      dispatch(login(user));
      window.localStorage.setItem("currentUser", JSON.stringify(user))
      setToken(user.token)
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

export const signupUser =async (user) => {
    try {
      const newUser = await signupService.signup(user);
      window.localStorage.setItem("currentUser", JSON.stringify(newUser))
    } catch (error) {
      console.log(error);
      toast.error(error.response.data)
    }
}

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
