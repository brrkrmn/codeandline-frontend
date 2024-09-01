type Route = {
  pathName: string;
  id: string;
  submitLabel: string
}

export const routes: Record<string, Route> = {
  create: {
    pathName: '/create/folder',
    id: 'create',
    submitLabel: "Create Folder"
  },
  edit: {
    pathName: 'edit-folder',
    id: 'edit',
    submitLabel: "Edit Folder"
  }
}