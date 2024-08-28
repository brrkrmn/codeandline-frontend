export type AppContextValue = null | {
  userState: User | null;
  notesState: Note[];
  foldersState: Folder[];
  initializeLogin: () => void;
  loginUser: (data: User) => void;
  logoutUser: () => void;
  signupUser: (data: User) => void;
  getUserNotes: () => void;
  createNote: (data: NoteRequestValues) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, data: NoteRequestValues) => void;
  getUserFolders: () => void;
  createFolder: (data: FolderRequestValues) => void;
  deleteFolder: (id: string) => void;
  editFolder: (id: string, data: FolderRequestValues) => void;
}

export type Folder = {
  id: string;
  title: string;
  description?: string;
  date: string;
  public: boolean;
  notes: Note[];
  user?: User;
  mock?: boolean;
}

export type FolderRequestValues = {
  title: string;
  description?: string;
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

export type NoteRequestValues = {
  title: string;
  description?: string;
  code: string;
  folder?: string;
  entries: Entry[];
}

export type User = {
  username: string;
  email: string;
  passwordHash: string;
}

export type Entry = {
  lineNumbers?: number[];
  content: string;
}

export type MockFolder = {
  id: string;
  title: string;
  description?: string;
  notes?: string[];
  public?: boolean;
  mock?: boolean;
  date?: string;
}