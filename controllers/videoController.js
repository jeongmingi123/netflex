import routes from "../routes.js";
import Video from "../models/Video.js"

export const home = async (req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos});
    } catch (error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: []});
    }
}

export const search = (req, res) => res.render("join");

export const videos = (req, res) => res.render("vidoes");
export const upload = (req, res) => res.render("upload");
export const videoDetail = (req, res) => res.render("videoDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const deleteVideo = (req, res) => res.render("deleteVideo");
