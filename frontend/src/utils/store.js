import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../reducers/notesReducer'
import userReducer from '../reducers/userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
  }
})