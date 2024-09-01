import { RequestHandler } from "msw";
import { setupServer } from "msw/node";
import { createFolder } from "../mocks/createFolder";
import { deleteFolder } from "../mocks/deleteFolder";
import { editFolder } from "../mocks/editFolder";
import { getFolder } from "../mocks/getFolder";
import { getUserFolders } from "../mocks/getUserFolders";
import { postLogin } from "../mocks/postLogin";
import { postSignup } from "../mocks/postSignup/postSignup";

const defaultServiceHandlers: RequestHandler[] = [
  postLogin.success,
  postSignup.success,
  createFolder.success,
  getFolder.success,
  editFolder.success,
  getUserFolders.success,
  deleteFolder.success
]

const server = setupServer(...defaultServiceHandlers)

export default server