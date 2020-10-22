import express from "express";
import routes from "../routes.js";

export const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("users"));
videoRouter.get(routes.upload, (req, res) => res.send("upload"));
videoRouter.get(routes.videoDetail, (req, res) => res.send("videoDetail"));
videoRouter.get(routes.editProfile, (req, res) => res.send("editProfile"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("deleteVideo"));

export default videoRouter;
