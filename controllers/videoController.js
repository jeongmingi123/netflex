import routes from "../routes.js";

// 하나의 템플릿에서만 변수를 사용할때는 두번째 인자에 다음과같이 변수를 정의함
export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  const searchingBy = req.query.term;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  res.redirect(routes.videoDetail());
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "EditProfile" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "deleteVideo" });
