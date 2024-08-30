import { RequestHandler } from "msw";
import { setupServer } from "msw/node";
import { postLogin } from "../mocks/postLogin";

const defaultServiceHandlers: RequestHandler[] = [
  postLogin.success
]

const server = setupServer(...defaultServiceHandlers)

export default server