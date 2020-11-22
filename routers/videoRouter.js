import express from "express";
import { editProfile } from "../controllers/userController.js";
import {
  getUpload,
  postUpload,
  videoDetail,
  deleteVideo,
} from "../controllers/videoController.js";
import routes from "../routes.js";
import {uploadVideo} from "../middlewares";

export const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editProfile, editProfile);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
