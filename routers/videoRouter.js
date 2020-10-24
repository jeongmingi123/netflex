import express from "express";
import { editProfile } from "../controllers/userController.js";
import {
  upload,
  videoDetail,
  videos,
  deleteVideo,
} from "../controllers/videoController.js";
import routes from "../routes.js";

export const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editProfile, editProfile);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
