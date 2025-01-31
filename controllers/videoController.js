import routes from "../routes.js";
import Video from "../models/Video.js"

// 하나의 템플릿에서만 변수를 사용할때는 두번째 인자에 다음과같이 변수를 정의함

export const home = async (req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle: "Home", videos});
    } catch (error){
        console.log(error);
        res.render("home", {pageTitle: "Home", videos: []});
    }
}

export const search = (req, res) => {
  const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = async (req, res) => {
  const {
    body : { title, description },
    file : {path}
  } = req;
  //console.log(body, file);
  const newVideo = await Video.create({
    fileUrl: path,
    title, 
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
