import { RequestHandler } from "msw";
import { setupServer } from "msw/node";
import { createFolder } from "../mocks/createFolder";
import { editFolder } from "../mocks/editFolder";
import { getFolder } from "../mocks/getFolder";
import { postLogin } from "../mocks/postLogin";
import { postSignup } from "../mocks/postSignup/postSignup";

const defaultServiceHandlers: RequestHandler[] = [
  postLogin.success,
  postSignup.success,
  createFolder.success,
  getFolder.success,
  editFolder.success
]

const server = setupServer(...defaultServiceHandlers)

export default server