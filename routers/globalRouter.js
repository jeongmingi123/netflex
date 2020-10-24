import express from "express";
import routes from "../routes.js";
import { home, search } from "../controllers/videoController.js";
import { login, join, logout } from "../controllers/userController.js";

export const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
