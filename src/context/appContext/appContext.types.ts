import { CreateFolderRequestData, UpdateFolderRequestData } from "../../services/folder/folder.types";
import { LoginRequestData } from "../../services/login/login.types";
import { CreateNoteRequestData, UpdateNoteRequestData } from "../../services/note/note.types";
import { SignupRequestData } from "../../services/signup/signup.types";
import { Folder, Note } from "../../types";

export type AppContextValue = null | {
  userState: UserState | null;
  notesState: Note[];
  foldersState: Folder[];
  initializeLogin: () => void;
  loginUser: (data: LoginRequestData) => void;
  logoutUser: () => void;
  signupUser: (data: SignupRequestData) => void;
  getUserNotes: () => void;
  createNote: (data: CreateNoteRequestData) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, data: UpdateNoteRequestData) => void;
  getUserFolders: () => void;
  createFolder: (data: CreateFolderRequestData) => void;
  deleteFolder: (id: string) => void;
  editFolder: (id: string, data: UpdateFolderRequestData) => void;
}

export type UserState = {
  username: string;
  email: string;
  token: string;
}