
export const API_URLS = {
  login: "/login",
  signup: "/signup",
  note: {
    allNotes: "/notes",
    byId: (id: string) => `/notes/${id}`,
  },
  folder: {
    allFolders: "/folders",
    byId: (id: string) => `/folders/${id}`,
  }
}