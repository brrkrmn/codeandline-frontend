import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
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
    },
    updateFolder: (state, action) => {
      const id = action.payload.id
      return state.map(folder => folder.id !== id ? folder : action.payload)
    },
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
    try {
      const folder = await folderService.createFolder(data);
      dispatch(addFolder(folder));
      toast.success("Folder created successfully")
    } catch (error) {
      toast.error("Couldn't create folder")
    }
  }
}

export const deleteFolder = (id) => {
  return async dispatch => {
    try {
      await folderService.deleteFolder(id)
      .then(dispatch(removeFolder(id)))
      toast.success("Folder deleted successfully")
    } catch (error) {
      toast.error("Couldn't delete folder")
    }
  }
}

export const editFolder = (id, folder) => {
  return async dispatch => {
    try {
      const updatedFolder = await folderService.updateFolder(id, folder)
      dispatch(updateFolder(updatedFolder))
      toast.success("Folder edited successfully")
    } catch (error) {
      toast.error("Couldn't edit folder")
    }
  }
}

export const { setFolders, addFolder, removeFolder, updateFolder } = foldersSlice.actions;
export default foldersSlice.reducer;