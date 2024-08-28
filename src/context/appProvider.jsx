import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import folderService from "../services/folder";
import loginService from "../services/login";
import noteService from "../services/note";
import signupService from "../services/signup";
import formatDate from "../utils/formatDate";
import { setToken } from "../utils/token";

export const AppContext = createContext(null);

export const useAppContext = () => {
  return useContext(AppContext);
}

const AppProvider = () => {
  const [userState, setUserState] = useState({});
  const [notesState, setNotesState] = useState([]);
  const [foldersState, setFoldersState] = useState([]);

  const initializeLogin = () => {
    const currentUser = window.localStorage.getItem("currentUser")
    if (currentUser) {
      const user = JSON.parse(currentUser)
      setUserState(user)
      setToken(user.token)
    }
  }

  const loginUser = async (credentials) => {
    try {
      const user = await loginService.login(credentials)
      setUserState(user)
      window.localStorage.setItem("currentUser", JSON.stringify(user))
      setToken(user.token)
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data, { position: 'top-center' })
      } else {
        toast.error("Something went wrong", { position: 'top-center' })
       }
    }
  }

  const logoutUser = () => {
    try {
      setUserState(null)
      window.localStorage.removeItem("currentUser")
    } catch (error) {
      console.log(error)
    }
  }

  const signupUser = async (user) => {
    try {
      const newUser = await signupService.signup(user);
      window.localStorage.setItem("currentUser", JSON.stringify(newUser))
      toast.success('Account created successfully', { position: 'top-center'})
    } catch (error) {
      if (error.response?.data) {
        toast.error(error.response.data, {position: 'top-center'})
      } else {
        toast.error("Something went wrong", { position: 'top-center' })
       }
    }
  }

  const getUserNotes = async () => {
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
    setNotesState(userNotes);
  }

  const createNote = async (data) => {
    try {
      await noteService.createNote(data);
      getUserNotes()
      getUserFolders()
      toast.success("Note created successfully")
    } catch (error) {
      toast.error("Couldn't create note")
    }
  }

  const deleteNote = async (id) => {
    try {
      await noteService.deleteNote(id)
      getUserNotes()
      getUserFolders()
      toast.success("Note deleted successfully")
    } catch (error) {
      toast.error("Couldn't delete note")
    }
  }

  const editNote = async (id, note) => {
    try {
      await noteService.updateNote(id, note)
      getUserNotes()
      getUserFolders()
      toast.success("Note edited successfully")
    } catch (error) {
      toast.error("Couldn't edit note")
    }
  }

  const getUserFolders = async () => {
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
    setFoldersState(userFolders)
  }

  const createFolder = async (data) => {
    try {
      await folderService.createFolder(data);
      getUserFolders()
      getUserNotes()
      toast.success("Folder created successfully")
    } catch (error) {
      toast.error("Couldn't create folder")
    }
  }

  const deleteFolder = async (id) => {
    try {
      await folderService.deleteFolder(id)
      getUserFolders()
      getUserNotes()
      toast.success("Folder deleted successfully")
    } catch (error) {
      toast.error("Couldn't delete folder")
    }
  }

  const editFolder = async (id, folder) => {
    try {
      await folderService.updateFolder(id, folder)
      getUserFolders();
      getUserNotes();
      toast.success("Folder edited successfully")
    } catch (error) {
      toast.error("Couldn't edit folder")
    }

  }
  return (
    <AppContext.Provider
      value={{
        userState,
        notesState,
        foldersState,
        initializeLogin,
        loginUser,
        logoutUser,
        signupUser,
        getUserNotes,
        createNote,
        deleteNote,
        editNote,
        getUserFolders,
        createFolder,
        deleteFolder,
        editFolder
      }}
    >

    </AppContext.Provider>
  )
}

export default AppProvider;