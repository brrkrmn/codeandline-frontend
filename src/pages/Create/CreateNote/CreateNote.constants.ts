import { Route } from "../Create.types";

export const routes: Record<string, Route> = {
  create: {
    pathName: '/create/note',
    id: "create",
    submitLabel: "Create Note"
  },
  edit: {
    pathName: 'edit-note',
    id: "edit",
    submitLabel: "Save Changes"
  }
}