import { createSlice } from "@reduxjs/toolkit";
import folderService from "../services/folder";
import formatDate from "../utils/formatDate";

export const foldersSlice = createSlice({
  name: 'folders',
  initialState: [],
  reducers: {
    setFolders: (state, action) => {
      return action.payload
    },
    addFolder: (state, action) => {
      state.push(action.payload)
    },
    removeFolder: (state, action) => {
      const id = action.payload
      return state.filter(folder => folder.id !== id)
    }
  }
})

export const getUserFolders = () => {
  return async dispatch => {
    const userFolders = [];
    const response = await folderService.getUserFolders();
    response.map(folder => {
      const folderObject = {
        id: folder.id,
        title: folder.title,
        description: folder.description,
        date: formatDate(folder.date),
        public: folder.public,
        notes: folder.notes,
        user: folder.user,
      };
      userFolders.push(folderObject);
    });
    dispatch(setFolders(userFolders))
  }
}

export const createFolder = (data) => {
  return async dispatch => {
    const folder = await folderService.createFolder(data);
    dispatch(addFolder(folder));
  }
}

export const deleteFolder = (id) => {
  return async dispatch => {
    await folderService.deleteFolder(id)
    dispatch(removeFolder(id))
  }
}

export const { setFolders, addFolder, removeFolder } = foldersSlice.actions;
export default foldersSlice.reducer;