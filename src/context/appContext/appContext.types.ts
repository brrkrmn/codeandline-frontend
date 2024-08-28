export type AppContextValue = null | {
  userState: User | null;
  notesState: Note[];
  foldersState: Folder[];
  initializeLogin: () => void;
  loginUser: (data: User) => void;
  logoutUser: () => void;
  signupUser: (data: User) => void;
  getUserNotes: () => void;
  createNote: (data: Note) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, data: Note) => void;
  getUserFolders: () => void;
  createFolder: (data: Folder) => void;
  deleteFolder: (id: string) => void;
  editFolder: (id: string, data: Folder) => void;
}

export type Folder = {
  id: string;
  title: string;
  description?: string;
  date: string;
  public: boolean;
  notes: Note[];
  user: User
}

export type Note = {
  id: string;
  title: string;
  description?: string;
  date: string;
  public: boolean;
  code: string;
  entries: Entry[];
  folder: Folder;
  user: User;
}

export type User = {
  username: string;
  email: string;
  passwordHash: string;
}

export type Entry = {

}