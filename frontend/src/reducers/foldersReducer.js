import { createSlice } from "@reduxjs/toolkit";
import folderService from "../services/folder";

export const foldersSlice = createSlice({
  name: 'folders',
  initialState: [],
  reducers: {
    setFolders: (state, action) => {
      return action.payload
    },
    addFolder: (state, action) => {
      state.push(action.payload)
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
        date: folder.date,
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

export const { setFolders, addFolder } = foldersSlice.actions;
export default foldersSlice.reducer;