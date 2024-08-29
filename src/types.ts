export type User = {
  id: string;
  username: string;
  email: string;
  notes: Note[];
  folders: Folder[];
}

export type Note = {
  id: string;
  title: string;
  description: string;
  date: string;
  code: string;
  public: boolean;
  entries: Entry[] | [];
  folder: Folder | null;
  user: User;
}

export type Entry = {
  _id: string;
  content: string;
  lineNumbers: number[] | [];
}

export type Folder = {
  id: string;
  title: string;
  description: string;
  date: string;
  public: boolean;
  notes: Note[] | [];
  user: User;
  mock?: boolean;
}

export type MockFolder = {
  id: string;
  title: string;
  description: string;
  date: string;
  public: boolean;
  notes: string[];
  mock: boolean;
}

export type MockMenuList = {
  notes: MockMenuNote[],
  folders: MockMenuFolder[]
}

export type MockMenuNote = {
  id: string;
  title: string;
  folder: string | null;
}

export type MockMenuFolder = {
  id: string;
  title: string;
  notes: MockMenuNote[]
}

export type MockFoldersSelectItem = {
  id: string;
  title: string;
}