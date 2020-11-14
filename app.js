import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./routers/userRouter.js";
import { videoRouter } from "./routers/videoRouter.js";
import { globalRouter } from "./routers/globalRouter.js";
import { routes } from "./routes.js";
import { localMiddleware } from "./middlewares.js";
const app = express();
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev")); // 어떠한 방식과 어디 폴더에 접속하는지 알수있음 + 컬러추가
app.use(localMiddleware);

// app.use(morgan("tiny")); // 어떠한 방식과 어디 폴더에 접속하는지 알수있음
// app.use(morgan("combined")); // 어떤 종류의 접속인지 어떤 브라우저인지 등등에 대하여 알 수 있다.

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use의 의미는 /user에 경로에 접속하면 이 router 전체를 사용하겠다는 의미
app.use(routes.videos, videoRouter);

export default app;
