import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import folderService from "../../services/folder";
import loginService from "../../services/login";
import noteService from "../../services/note";
import signupService from "../../services/signup";
import formatDate from "../../utils/formatDate";
import { setToken } from "../../utils/token";
import { AppContextValue, Folder, Note, User } from "./appContext.types";
import { LS_USER_ITEM } from "./constants";

export const AppContext = createContext<AppContextValue>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("You can only call this hook inside AppProvider");
  }
  return context;
}

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState<User | null>(null);
  const [notesState, setNotesState] = useState<Note[]>([]);
  const [foldersState, setFoldersState] = useState<Folder[]>([]);

  const initializeLogin = () => {
    const currentUser = window.localStorage.getItem(LS_USER_ITEM)
    if (currentUser) {
      const user = JSON.parse(currentUser)
      setUserState(user)
      setToken(user.token)
    }
  }

  const loginUser = async (data: User) => {
    try {
      const user = await loginService.login(data)
      setUserState(user)
      window.localStorage.setItem(LS_USER_ITEM, JSON.stringify(user))
      setToken(user.token)
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        toast.error(error.response.data, { position: 'top-center' })
      } else {
        toast.error("Something went wrong", { position: 'top-center' })
       }
    }
  }

  const logoutUser = () => {
    try {
      setUserState(null)
      window.localStorage.removeItem(LS_USER_ITEM)
    } catch (error) {
      console.log(error)
    }
  }

  const signupUser = async (data: User) => {
    try {
      const newUser = await signupService.signup(data);
      window.localStorage.setItem(LS_USER_ITEM, JSON.stringify(newUser))
      toast.success('Account created successfully', { position: 'top-center'})
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        toast.error(error.response.data, {position: 'top-center'})
      } else {
        toast.error("Something went wrong", { position: 'top-center' })
       }
    }
  }

  const getUserNotes = async () => {
    const userNotes:Note[] = [];
    const response = await noteService.getUserNotes();
    response.map((note: Note) => {
      const noteObject: Note = {
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

  const createNote = async (data: Note) => {
    try {
      await noteService.createNote(data);
      getUserNotes()
      getUserFolders()
      toast.success("Note created successfully")
    } catch (error) {
      toast.error("Couldn't create note")
    }
  }

  const deleteNote = async (id: string) => {
    try {
      await noteService.deleteNote(id)
      getUserNotes()
      getUserFolders()
      toast.success("Note deleted successfully")
    } catch (error) {
      toast.error("Couldn't delete note")
    }
  }

  const editNote = async (id: string, data: Note) => {
    try {
      await noteService.updateNote(id, data)
      getUserNotes()
      getUserFolders()
      toast.success("Note edited successfully")
    } catch (error) {
      toast.error("Couldn't edit note")
    }
  }

  const getUserFolders = async () => {
    const userFolders: Folder[] = [];
    const response = await folderService.getUserFolders();
    response.map((folder: Folder) => {
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

  const createFolder = async (data: Folder) => {
    try {
      await folderService.createFolder(data);
      getUserFolders()
      getUserNotes()
      toast.success("Folder created successfully")
    } catch (error) {
      toast.error("Couldn't create folder")
    }
  }

  const deleteFolder = async (id: string) => {
    try {
      await folderService.deleteFolder(id)
      getUserFolders()
      getUserNotes()
      toast.success("Folder deleted successfully")
    } catch (error) {
      toast.error("Couldn't delete folder")
    }
  }

  const editFolder = async (id: string, data: Folder) => {
    try {
      await folderService.updateFolder(id, data)
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
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;