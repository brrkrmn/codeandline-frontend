import { Entry, Note } from "../../types";

export type GetUserNotesResponse = Note[]

export type GetNoteResponse = Note

export type CreateNoteRequestData = {
  title: string;
  description?: string;
  folder?: string;
  code: string;
  entries?: Entry[]
}

export type CreateNoteResponse = Note

export type UpdateNoteRequestData = {
  title: string;
  description?: string;
  folder?: string;
  code: string;
  entries?: Entry[]
}

export type UpdateNoteResponse = Note