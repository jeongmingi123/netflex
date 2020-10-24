import routes from "./routes.js";

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "NetFliex";
  res.locals.routes = routes;
  next();
};
