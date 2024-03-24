import { configureStore } from '@reduxjs/toolkit'
import foldersReducer from '../reducers/foldersReducer'
import notesReducer from '../reducers/notesReducer'
import userReducer from '../reducers/userReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer,
    folders: foldersReducer,
  }
})