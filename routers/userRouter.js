import express from "express";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController.js";
import routes from "../routes.js";

export const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
