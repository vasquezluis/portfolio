import express from "express";
import morgan from "morgan";

import indexRouter from "./v1/routes/index.routes.js";
import worksRouter from "./v1/routes/works.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRouter);
app.use(worksRouter);

export default app;
