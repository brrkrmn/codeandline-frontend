import { createSlice } from "@reduxjs/toolkit";
import noteService from "../services/note";
import formatDate from "../utils/formatDate";
import { getUserFolders } from "./foldersReducer";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes: (state, action) => {
      return action.payload
    },
    addNote: (state, action) => {
      state.push(action.payload)
    },
    removeNote: (state, action) => {
      const id = action.payload
      return state.filter(note => note.id !== id)
    },
    updateNote: (state, action) => {
      const id = action.payload.id
      return state.map(note => note.id !== id ? note : action.payload)
    }
  }
})

export const getUserNotes = () => {
  return async dispatch => {
    const userNotes = [];
    const response = await noteService.getUserNotes();
    response.map(note => {
      const noteObject = {
        id: note.id,
        title: note.title,
        description: note.description,
        date: formatDate(note.date),
        public: note.public,
        code: note.code,
        entries: note.entries,
        folder: note.folder,
        user: note.user,
      };
      userNotes.push(noteObject);
    });
    dispatch(setNotes(userNotes));
  }
}

export const createNote = (data) => {
  return async dispatch => {
    await noteService.createNote(data);
    dispatch(getUserNotes())
    dispatch(getUserFolders())
  }
}

export const deleteNote = (id) => {
  return async dispatch => {
    await noteService.deleteNote(id)
    dispatch(getUserNotes())
    dispatch(getUserFolders())
  }
}

export const editNote = (id, note) => {
  return async dispatch => {
    await noteService.updateNote(id, note)
    dispatch(getUserNotes())
    dispatch(getUserFolders())
  }
}

export const { setNotes, addNote, removeNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;