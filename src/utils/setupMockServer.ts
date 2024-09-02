import { RequestHandler } from "msw";
import { setupServer } from "msw/node";
import { createFolder } from "../mocks/createFolder";
import { createNote } from "../mocks/createNote";
import { deleteFolder } from "../mocks/deleteFolder";
import { deleteNote } from "../mocks/deleteNote";
import { editFolder } from "../mocks/editFolder";
import { editNote } from "../mocks/editNote";
import { getFolder } from "../mocks/getFolder";
import { getNote } from "../mocks/getNote";
import { getUserFolders } from "../mocks/getUserFolders";
import { getUserNotes } from "../mocks/getUserNotes";
import { postLogin } from "../mocks/postLogin";
import { postSignup } from "../mocks/postSignup/postSignup";

const defaultServiceHandlers: RequestHandler[] = [
  postLogin.success,
  postSignup.success,
  createNote.success,
  editNote.success,
  deleteNote.success,
  getNote.success,
  getUserNotes.success,
  createFolder.success,
  editFolder.success,
  deleteFolder.success,
  getFolder.success,
  getUserFolders.success,
]

const server = setupServer(...defaultServiceHandlers)

export default server