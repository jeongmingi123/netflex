import express from "express";
import routes from "../routes.js";
import { home, search } from "../controllers/videoController.js";
import {
  getJoin,
  postJoin,
  logout,
  getLogin,
  postLogin,
} from "../controllers/userController.js";

export const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
